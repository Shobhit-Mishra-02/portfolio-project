import { IoIosMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";
import { ExpandAnimation } from "./LoadingAnimation";

const Contact = () => {
  const [headingComp, setHeadingComp] = useState<boolean>(false);
  const [firstComp, setFirstComp] = useState<boolean>(false);
  const [secondComp, setSecComp] = useState<boolean>(false);
  const [ref, isView] = useInView();
  const [ref2, isView2] = useInView();

  useEffect(() => {
    if (isView) {
      setHeadingComp(true);
    }
  }, [isView]);

  useEffect(() => {
    if (isView2) {
      setFirstComp(true);
      setSecComp(true);
    }
  }, [isView2]);

  return (
    <div className="pt-36 md:pt-44 lg:pt-64 pb-4">
      <ExpandAnimation>
        <div className="pb-8 md:pb-10 ">
          <h2
            className={`text-[32px] text-center sm:text-left lg:flex lg:justify-start lg:align-middle lg:items-center lg:gap-4`}
          >
            <span className="text-primary">#</span>contacts
            <div className="hidden lg:block w-[300px] h-[1px] bg-primary"></div>
          </h2>
        </div>
      </ExpandAnimation>

      <div
        ref={ref2}
        className="flex justify-center align-middle items-start flex-wrap gap-8 md:justify-between"
      >
        <div
          className={`w-full sm:max-w-[405px] lg:max-w-[505px] relative transition-all duration-500 ease-in-out ${
            firstComp
              ? "scale-100 opacity-100 md:-translate-x-0"
              : "scale-0 opacity-0 md:-translate-x-full"
          }`}
        >
          <p className="text-secondary text-justify">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>

        <div
          className={`h-auto w-fit border border-secondary px-6 py-6 flex justify-start align-middle items-start flex-col text-secondary relative transition-all duration-500 ease-in-out ${
            secondComp
              ? "scale-100 opacity-100 md:translate-x-0"
              : "scale-0 opacity-0 md:translate-x-full"
          }`}
        >
          <h3 className="font-semibold pb-4 text-white">Message me here</h3>
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer pb-2 fill-secondary hover:text-white hover:fill-white">
            <IoIosMail className="fill-inherit cursor-pointer w-8 h-auto" />
            random@gmail.com
          </div>
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer fill-secondary hover:fill-white hover:text-white">
            <AiFillLinkedin className="fill-inherit cursor-pointer w-8 h-auto" />
            !Elias#3519
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
