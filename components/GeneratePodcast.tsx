import { UseGeneratePodcastProps } from "@/types";
import { GeneratePodcastProps } from "@/types";
import React, { useState, useRef, useEffect } from "react";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Loader } from "lucide-react";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { v4 as uuidv4 } from "uuid";
import { toast, useToast } from "@/hooks/use-toast";
import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useUploadFiles } from "@xixixao/uploadstuff/react";
import useFileUpload from "@/hooks/use-file-upload";
import Image from "next/image";

const useGeneratePodcast = ({
  setAudio,
  voiceType,
  voicePrompt,
  setAudioStorageId,
}: UseGeneratePodcastProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const { toast } = useToast();

  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const { startUpload } = useUploadFiles(generateUploadUrl);

  const getPodcastAudio = useAction(api.openai.generateAudioAction);

  const getAudioUrl = useMutation(api.podcasts.getUrl);

  const generatePodcast = async () => {
    setIsGenerating(true);
    setAudio("");

    if (!voicePrompt || !voiceType) {
      toast({
        title: "Please provide a prompt and ai voice to generate a podcast",
      });
      return setIsGenerating(false);
    }

    try {
      const response = await getPodcastAudio({
        voice: voiceType,
        input: voicePrompt,
      });

      const blob = new Blob([response], { type: "audio/mpeg" });
      const fileName = `podcast-${uuidv4()}.mp3`;
      const file = new File([blob], fileName, { type: "audio/mpeg" });

      const uploaded = await startUpload([file]);
      const storageId = (uploaded[0].response as any).storageId;

      setAudioStorageId(storageId);

      const audioUrl = await getAudioUrl({ storageId });
      setAudio(audioUrl!);
      setIsGenerating(false);
      toast({
        title: "Podcast generated successfully",
      });
    } catch (error) {
      console.log("Error generating podcast", error);
      toast({
        title: "Error creating a podcast",
        variant: "destructive",
      });
      setIsGenerating(false);
    }
  };

  return { isGenerating, generatePodcast };
};
const voiceCategories = ["alloy", "shimmer", "nova", "echo", "fable", "onyx"];

const GeneratePodcast = ({
  setAudioStorageId,
  setAudio,
  audio,
  voicePrompt,
  setVoicePrompt,
  setAudioDuration,
  voiceType,
  setVoiceType,
}: GeneratePodcastProps) => {
  const [isAiAudio, setIsAiAudio] = useState(false);
  const voiceTypeRef = useRef<HTMLAudioElement | null>(null);
  const { toast } = useToast();

  const {
    fileInputRef,
    fileUrl,
    isUploading,
    fileStorageId,
    triggerFileSelect,
    handleFileSelection,
  } = useFileUpload({
    onUploadSuccess: (result) => {
      console.log(fileUrl);

      setAudio(result.url!);
      setAudioStorageId(fileStorageId);
      setVoiceType("none");
      toast({
        title: "File uploaded successfully",
      });
      console.log("File uploaded successfully: ", result);
    },
    onUploadError: (error) => {
      console.error("Error during file upload: ", error);
      toast({
        title: "Error during file upload, Please ty again later",
      });
    },
  });

  useEffect(() => {
    if (voiceType && voiceTypeRef.current) {
      // Play the audio when voiceType changes
      voiceTypeRef.current.play();
    }
  }, [voiceType]);

  const { isGenerating, generatePodcast } = useGeneratePodcast({
    setAudio,
    voiceType,
    voicePrompt,
    setAudioStorageId,
  });

  return (
    <>
      <div className="generate_thumbnail" style={{ maxWidth: "400px" }}>
        <Button
          type="button"
          variant="plain"
          onClick={() => setIsAiAudio(true)}
          className={cn("", {
            "bg-black-6": isAiAudio,
          })}
        >
          Use AI to generate audio
        </Button>
        <Button
          type="button"
          variant="plain"
          onClick={() => setIsAiAudio(false)}
          className={cn("", {
            "bg-black-6": !isAiAudio,
          })}
        >
          Upload audio
        </Button>
      </div>

      {isAiAudio ? (
        <div>
          <div className="flex flex-col gap-2.5 mt-5">
            <Label className="text-16 font-bold text-white-1">
              Select AI Voice
            </Label>

            <Select onValueChange={(value) => setVoiceType(value)}>
              <SelectTrigger
                className={cn(
                  "text-16 w-full border-none bg-black-1 text-gray-1 focus-visible:ring-offset-primary-1"
                )}
              >
                <SelectValue
                  placeholder="Select AI Voice"
                  className="placeholder:text-gray-1 "
                />
              </SelectTrigger>
              <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1 focus:ring-primary-1">
                {voiceCategories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="capitalize focus:bg-primary-1"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
              {voiceType && (
                <audio
                  ref={voiceTypeRef}
                  src={`/${voiceType}.mp3`}
                  className="hidden"
                />
              )}
            </Select>
          </div>

          <div className="flex flex-col gap-2.5 mt-5 ">
            <Label className="text-16 font-bold text-white-1">
              AI Prompt to generate Podcast
            </Label>
            <Textarea
              className="input-class font-light focus-visible:ring-offset-primary-1"
              placeholder="Provide text to generate audio"
              rows={5}
              value={voicePrompt}
              onChange={(e) => setVoicePrompt(e.target.value)}
            />
          </div>
          <div className="mt-5 w-full max-w-[200px]">
            <Button
              type="submit"
              className="text-16 bg-primary-1 py-4 font-bold text-white-1"
              onClick={generatePodcast}
            >
              {isGenerating ? (
                <>
                  Generating
                  <Loader size={20} className="animate-spin ml-2" />
                </>
              ) : (
                "Generate"
              )}
            </Button>
          </div>
          {audio && (
            <audio
              controls
              src={audio}
              autoPlay
              className="mt-5"
              onLoadedMetadata={(e) =>
                setAudioDuration(e.currentTarget.duration)
              }
            />
          )}
        </div>
      ) : (
        <div>
          <div className="image_div" onClick={triggerFileSelect}>
            <Input
              type="file"
              accept="audio/*"
              className="hidden"
              ref={fileInputRef}
              onChange={handleFileSelection}
            />
            {!isUploading ? (
              <Image
                src="/icons/upload-image.svg"
                width={40}
                height={40}
                alt="upload"
              />
            ) : (
              <div className="text-16 flex-center font-medium text-white-1">
                Uploading...
                <Loader size={20} className="animate-spin ml-2" />
              </div>
            )}

            <div className="flex flex-col items-center gap-1">
              <h2 className="text-12 font-bold text-primary-1">
                Click to upload audio
              </h2>
              <p className="text-12 font-normal text-gray-1">
                format: MP3, WAV (max. 2000KB)
              </p>
            </div>
          </div>

          {fileUrl && (
            <audio
              controls
              src={fileUrl}
              className="mt-5"
              onLoadedMetadata={(e) =>
                setAudioDuration(e.currentTarget.duration)
              }
            />
          )}
        </div>
      )}
    </>
  );
};

export default GeneratePodcast;
