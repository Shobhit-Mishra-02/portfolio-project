import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { IoLogoFigma } from "react-icons/io5";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [mediaComp, setMediaComp] = useState<boolean>(false);
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView) {
      setMediaComp(true);
    }
  }, [isView]);

  return (
    <div className="bg-ternary relative">
      <div className="hidden lg:block">
        <div
          ref={ref}
          className={`flex justify-center align-middle items-center w-fit flex-col fixed top-0 left-6 gap-6  transition-all ease-in-out duration-500 ${
            mediaComp ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <div className="bg-secondary w-[1px] h-[320px]"></div>

          <div className="w-fit flex justify-center align-middle items-center flex-col space-y-3">
            <IoLogoFigma className="w-8 h-auto fill-secondary hover:fill-white hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer" />
            <IoIosMail className="w-8 h-auto fill-secondary hover:fill-white hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer" />
            <AiFillGithub className="w-8 h-auto fill-secondary hover:fill-white hover:scale-110 transition-all ease-in-out duration-150 cursor-pointer" />
          </div>
        </div>
      </div>
      <Navigation />
      <div className="font-fira-code px-[6px] sm:px-[18px] md:px-[64px] lg:px-[128px] 2xl:px-[168px] bg-ternary min-h-screen text-white">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
