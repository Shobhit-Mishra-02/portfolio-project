import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div className="bg-ternary relative">
      <Navigation />
      <div className="font-fira-code px-[6px] sm:px-[18px] md:px-[64px] lg:px-[128px] 2xl:px-[168px] bg-ternary min-h-screen text-white">
        <Component {...pageProps} />
      </div>
      <Footer />
      <div className="hidden lg:block">
        <div className="flex justify-center align-middle items-center w-fit flex-col fixed top-0 left-6 gap-6">
          <div className="bg-secondary w-[1px] h-[350px]"></div>

          <div className="w-fit flex justify-center align-middle items-center flex-col space-y-3">
            <IoLogoFigma className="w-8 h-auto fill-secondary hover:fill-white hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer" />
            <IoIosMail className="w-8 h-auto fill-secondary hover:fill-white hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer" />
            <AiFillGithub className="w-8 h-auto fill-secondary hover:fill-white hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
}
