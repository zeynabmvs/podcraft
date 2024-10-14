import { useState, useRef } from "react";
import { useToast } from "@/hooks/use-toast";
import { useMutation } from "convex/react";
import { useUploadFiles } from "@xixixao/uploadstuff/react";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel"

interface UploadResult {
  storageId: string;
  url: string;
}

interface UseFileUploadProps {
  onUploadSuccess?: (result: UploadResult) => void;
  onUploadError?: (error: Error) => void;
}

const useFileUpload = ({ onUploadSuccess, onUploadError }: UseFileUploadProps) => {
  const [isUploading, setIsUploading] = useState(false);
  const [fileUrl, setFileUrl] = useState<string | null>(null);
  const [fileStorageId, setFileStorageId] = useState<Id<"_storage"> | null>(null)

  const fileInputRef = useRef<HTMLInputElement>(null);

  const generateUploadUrl = useMutation(api.files.generateUploadUrl);
  const { startUpload } = useUploadFiles(generateUploadUrl);
  const getFileUrl = useMutation(api.podcasts.getUrl);
  const { toast } = useToast();

  const handleFileUpload = async (file: File, fileName: string) => {
    setIsUploading(true);
    try {
      const blob = await file.arrayBuffer().then((ab) => new Blob([ab]));

      const fileToUpload = new File([blob], fileName, { type: file.type });
      const uploaded = await startUpload([fileToUpload]);
      const storageId = (uploaded[0].response as any).storageId;
      
      const url = await getFileUrl({ storageId });
      setFileUrl(url!);
      setFileStorageId(storageId)
      setIsUploading(false);

      toast({ title: "File uploaded successfully" });
      
      // Trigger success callback
      if (onUploadSuccess) {
        onUploadSuccess({ storageId, url: url! });
      }
    } catch (error) {
      console.error(error);
      setIsUploading(false);
      toast({ title: "Error uploading file", variant: "destructive" });

      // Trigger error callback
      if (onUploadError) {
        onUploadError(error as Error);
      }
    }
  };

  const handleFileSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const file = files[0];
    handleFileUpload(file, file.name);
  };

  const triggerFileSelect = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return {
    fileInputRef,
    fileUrl,
    isUploading,
    fileStorageId,
    triggerFileSelect,
    handleFileSelection,
  };
};

export default useFileUpload;
