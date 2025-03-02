import { StepForward } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import PodcraftLogo from "@/components/partials/PodcraftLogo";
import { Button } from "@/components/ui/button";

function LandingPage() {
  return (
    <main className="bg-gradient-to-b from-[#15171c] to-[#392d69] h-full min-h-screen">
      <div className="container relative m-0 mx-auto py-10 md:px-10">
        <div className="max-width flex items-center justify-center lg:justify-between">
          <PodcraftLogo />
        </div>
        <div className="w-full px-4 pt pt-12 md:px-4 lg:px-8 xl:px-10 2xl:px-0">
          <div className="flex h-full w-full flex-col items-center justify-center">
            <span
              rel="noreferrer"
              className="bg-none hover:bg-white-1 mb-6 cursor-pointer rounded-2xl border border-black px-4 py-1 text-xs transition duration-300 ease-in-out hover:text-slate-700 sm:text-base text-center"
            >
              Powered by{" "}
              <a
                className="font-bold"
                target="_blank"
                href="https://convex.dev/"
              >
                Convex{" "}
              </a>
              and{" "}
              <a
                className="font-bold"
                target="_blank"
                href="https://www.openai.com/"
              >
                OpenAI ✨
              </a>
            </span>
            <h1 className="inline-block text-center text-4xl font-medium tracking-tighter text-dark lg:text-7xl">
              Your Podcast Journey Starts Here{" "}
              <br className="hidden lg:inline-block" />
              <span className="text-3xl tracking-normal">
                Open Source & AI-Powered
              </span>
            </h1>
            <h2 className="mt-8 text-center text-xl font-light tracking-tight lg:text-3xl">
              <span className="font-bold px-1">Create, share and discover</span>{" "}
              stories effortlessly with Podcraft.
              <br className="hidden lg:inline-block" />
              Whether you're a beginner or a pro, our platform makes podcasting
              simple and fun.
            </h2>
            <div className="mt-12 flex flex-col gap-4 items-center">
              <GetStartedButton />
              <GithubStarButton />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="flex items-center justify-center">
          {/* <Image
                alt="mobile"
                loading="lazy"
                width="500"
                height="600"
                className="z-10 max-w-[400px]"
                src={"/mobile.png"}
              /> */}
          <Image
            src="/screenshots/desktop.png"
            alt="laptop"
            loading="lazy"
            width="1000"
            height="500"
            data-nimg="1"
            className="h-full mt-10 hidden lg:flex"
          />
        </div>
      </div>
      <div className="flex items-center justify-center">
        <footer className="bottom-0 container mx-auto my-5 flex flex-col items-center justify-between space-y-3 space-x-4 px-3 pt-4 text-center sm:flex-row sm:pt-2 md:text-lg">
          <div>
            Powered by{" "}
            <a
              href="https://convex.dev"
              target="_blank"
              className="pr-1 font-bold transition hover:text-black/50"
            >
              Convex
            </a>
            and
            <a
              href="https://www.openai.com/"
              target="_blank"
              className="pl-1 font-bold transition hover:text-black/50"
            >
              OpenAI
            </a>
          </div>
          <div className="flex space-x-4 pb-4 sm:pb-0">
            <a
              className="group"
              aria-label="GitHub"
              target="_blank"
              href="https://github.com/zeynabmvs"
            >
              <svg aria-hidden="true" className="h-6 w-6 fill-white-1">
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
              </svg>
            </a>
          </div>
        </footer>
      </div>
    </main>
  );
}
function GetStartedButton() {
  return (
    <Button className="text-20 w-full bg-primary-1 font-medium px-8 py-4 h-fit">
      <Link href="/home" className="flex gap-1 items-center">
      <span>Get Started for free</span>        
        <StepForward />
      </Link>
    </Button>

    // <Link
    //   href="/home"
    //   className="flex items-center justify-center px-8 py-4 mb-2 me-2 overflow-hidden text-xl font-medium text-gray-100 rounded-xl group bg-gradient-to-br from-purple-600 to-orange-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-yellow-300"
    // >
    //   <span className="flex items-center gap-1">
    //     Get Started for free
    //     <StepForward />
    //   </span>
    // </Link>
  );
}

const GithubStarButton = () => {
  return (
    <Link
      href="https://github.com/zeynabmvs/podcraft/"
      className="flex overflow-hidden items-center text-sm font-medium focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-black text-white shadow hover:bg-black/90 h-10 px-4 py-2 max-w-52 whitespace-pre md:flex group relative w-full justify-center gap-2 rounded-md transition-all duration-300 ease-out hover:ring-2 hover:ring-black hover:ring-offset-2"
    >
      <span className="absolute right-0 -mt-12 h-32 w-8 translate-x-12 rotate-12 bg-white opacity-10 transition-all duration-1000 ease-out group-hover:-translate-x-40" />
      <div className="flex items-center">
        {/* prettier-ignore */}
        <svg className="w-4 h-4 fill-current" viewBox="0 0 438.549 438.549">
          <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8-33.598-19.607-70.277-29.408-110.063-29.408-39.781 0-76.472 9.804-110.063 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.854 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.419-1.996 2.475-2.282 3.711-5.14 3.711-8.562 0-.571-.049-5.708-.144-15.417a2549.81 2549.81 0 01-.144-25.406l-6.567 1.136c-4.187.767-9.469 1.092-15.846 1-6.374-.089-12.991-.757-19.842-1.999-6.854-1.231-13.229-4.086-19.13-8.559-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.899-9.233-8.992-14.559-4.093-5.331-8.232-8.945-12.419-10.848l-1.999-1.431c-1.332-.951-2.568-2.098-3.711-3.429-1.142-1.331-1.997-2.663-2.568-3.997-.572-1.335-.098-2.43 1.427-3.289 1.525-.859 4.281-1.276 8.28-1.276l5.708.853c3.807.763 8.516 3.042 14.133 6.851 5.614 3.806 10.229 8.754 13.846 14.842 4.38 7.806 9.657 13.754 15.846 17.847 6.184 4.093 12.419 6.136 18.699 6.136 6.28 0 11.704-.476 16.274-1.423 4.565-.952 8.848-2.383 12.847-4.285 1.713-12.758 6.377-22.559 13.988-29.41-10.848-1.14-20.601-2.857-29.264-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.979-3.901-12.374-5.852-26.648-5.852-42.826 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.379-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.283 18.794 7.952 23.84 10.994 5.046 3.041 9.089 5.618 12.135 7.708 17.705-4.947 35.976-7.421 54.818-7.421s37.117 2.474 54.823 7.421l10.849-6.849c7.419-4.57 16.18-8.758 26.262-12.565 10.088-3.805 17.802-4.853 23.134-3.138 8.562 21.509 9.325 40.922 2.279 58.24 15.036 16.18 22.559 35.787 22.559 58.817 0 16.178-1.958 30.497-5.853 42.966-3.9 12.471-8.941 22.457-15.125 29.979-6.191 7.521-13.901 13.85-23.131 18.986-9.232 5.14-18.182 8.85-26.84 11.136-8.662 2.286-18.415 4.004-29.263 5.146 9.894 8.562 14.842 22.077 14.842 40.539v60.237c0 3.422 1.19 6.279 3.572 8.562 2.379 2.279 6.136 2.95 11.276 1.995 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.161 41.825-81.126 41.825-128.906-.01-39.771-9.818-76.454-29.414-110.049z" />
        </svg>
        <span className="ml-1 text-white">Star on GitHub</span>
      </div>
      <div className="ml-2 flex items-center gap-1 text-sm md:flex">
        {/* prettier-ignore */}
        <svg className="w-4 h-4 text-gray-500 transition-all duration-300 group-hover:text-yellow-300" data-slot="icon" aria-hidden="true" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path clipRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" fillRule="evenodd" />
        </svg>
      </div>
    </Link>
  );
};

export default LandingPage;
