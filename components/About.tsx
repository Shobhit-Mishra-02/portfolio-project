import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const About = () => {
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
      <div className="pb-4">
        <h2
          ref={ref}
          className={`text-[32px] text-center sm:text-left lg:flex lg:justify-start lg:align-middle lg:items-center lg:gap-4 relative transition-all duration-500 ease-in-out ${
            headingComp ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <span className="text-primary">#</span>about-me
          <div className="hidden lg:block w-[300px] h-[1px] bg-primary"></div>
        </h2>
      </div>

      <div
        ref={ref2}
        className="flex justify-center align-middle items-center flex-wrap lg:justify-between lg:flex-nowrap gap-10"
      >
        <div
          className={`w-full sm:max-w-[415px] xl:max-w-[515px] h-auto relative transition-all duration-500 ease-in-out ${
            firstComp
              ? "scale-100 opacity-100 lg:-translate-x-0"
              : "scale-0 opacity-0 lg:-translate-x-full"
          }`}
        >
          <p className="text-secondary pb-8 text-justify">
            Hello, i’m Elias!
            <br />
            <br />
            I’m a self-taught front-end developer based in Kyiv, Ukraine. I can
            develop responsive websites from scratch and raise them into modern
            user-friendly web experiences.
            <br />
            <br />
            Transforming my creativityand knowledge into a websites has been my
            passion for over a year. I have been helping various clients to
            establish their presence online. I always strive to learn about the
            newest technologies and frameworks.
          </p>
          <div className="flex justify-center align-middle items-center lg:justify-start">
            <Link href={"/about"}>
              <button className="text-[16px] px-[16px] py-[8px] border border-primary hover:bg-lightPurple">
                Read more {"~~>"}
              </button>
            </Link>
          </div>
        </div>

        <div
          className={` relative transition-all duration-500 ease-in-out ${
            secondComp
              ? "scale-100 opacity-100 lg:translate-x-0"
              : "scale-0 opacity-0 lg:translate-x-full"
          }`}
        >
          <img src="/images/Hero-2.png" alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default About;
