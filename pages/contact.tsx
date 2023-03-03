import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const ContactPage = () => {
  const [ref, isView] = useInView();
  const [ref2, isView2] = useInView();
  const [ref3, isView3] = useInView();
  const [ref4, isView4] = useInView();

  const [mainHeading, setMainHeading] = useState(false);
  const [subHeading, setSubHeading] = useState(false);

  const [firstComp, setFirstComp] = useState(false);
  const [secondComp, setSecComp] = useState(false);
  const [firstComp1, setFirstComp1] = useState(false);
  const [secondComp1, setSecComp1] = useState(false);

  useEffect(() => {
    if (isView) {
      setMainHeading(true);
    }
    if (isView2) {
      setFirstComp(true);
      setSecComp(true);
    }
    if (isView3) {
      setSubHeading(true);
    }
    if (isView4) {
      setFirstComp1(true);
      setSecComp1(true);
    }
  }, [isView, isView2, isView3, isView4]);

  return (
    <div className="pt-12 font-fira-code">
      <div
        ref={ref}
        className={`relative transition-all duration-500 ease-in-out ${
          mainHeading ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <h2 className="font-semibold text-[32px] ">
          <span className="text-primary">/</span>contacts
        </h2>
        <p className="pt-1">Get in touch</p>
      </div>

      <div
        ref={ref2}
        className="pt-24 flex justify-center align-middle items-start flex-wrap gap-8 lg:justify-between"
      >
        <div
          className={`w-full sm:max-w-[505px] relative transition-all duration-500 ease-in-out ${
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
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer pb-2 hover:text-white fill-secondary hover:fill-white">
            <IoIosMail className="fill-inherit cursor-pointer w-8 h-auto" />
            random@gmail.com
          </div>
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <AiFillLinkedin className="fill-inherit cursor-pointer w-8 h-auto" />
            !Elias#3519
          </div>
        </div>
      </div>

      <div ref={ref3} className="pt-24 font-semibold text-[32px] pb-8">
        <h2
          className={`text-center md:text-left relative transition-all duration-500 ease-in-out ${
            subHeading ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <span className="text-primary">#</span>all-media
        </h2>
      </div>

      <div
        ref={ref4}
        className="flex justify-center align-middle items-center lg:justify-between gap-4"
      >
        <div
          className={`text-secondary flex justify-center align-middle items-center gap-4 w-full md:max-w-[605px] xl:max-w-[780px] flex-wrap lg:justify-start relative transition-all duration-500 ease-in-out ${
            firstComp1
              ? "scale-100 opacity-100 md:-translate-x-0"
              : "scale-0 opacity-0 md:-translate-x-full"
          }`}
        >
          <div className="flex justify-center align-middle items-center gap-2 flex-wrap px-4 py-2 border border-secondary w-fit cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <AiFillGithub className="fill-inherit cursor-pointer w-8 h-auto" />
            random-name-id
          </div>
          <div className="flex justify-center align-middle items-center gap-2 flex-wrap px-4 py-2 border border-secondary w-fit cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <AiFillLinkedin className="fill-inherit cursor-pointer w-8 h-auto" />
            random-name
          </div>
          <div className="flex justify-center align-middle items-center gap-2 flex-wrap px-4 py-2 border border-secondary w-fit cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <IoIosMail className="fill-inherit cursor-pointer w-8 h-auto" />
            random@gmail.com
          </div>
        </div>
        <div
          className={`hidden lg:block relative transition-all duration-500 ease-in-out ${
            secondComp1
              ? "scale-100 opacity-100 md:translate-x-0"
              : "scale-0 opacity-0 md:translate-x-full"
          }`}
        >
          <img
            className="w-full h-auto"
            src="/patterns/Group 36.png"
            alt="image"
          />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
