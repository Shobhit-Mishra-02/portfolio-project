import { useInView } from "react-intersection-observer";
import { useState, useEffect } from "react";

const Card = () => {
  const [cardComp, setCardComp] = useState<boolean>(false);
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView) {
      setCardComp(true);
    }
  }, [isView]);

  return (
    <div
      ref={ref}
      className={`w-[330px] h-auto border border-secondary relative transition-all duration-500 ease-in-out ${
        cardComp ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <img
        className="h-auto w-full border-b border-secondary"
        src="/images/Card-Banner-1.png"
        alt="card image"
      />
      <div className="px-2 py-2  border-b border-secondary text-secondary">
        <p>HTML CSS Python Flask</p>
      </div>
      <div className="px-2 pt-2">
        <h3 className="text-[24px] font-semibold pb-3">Chert Nodes</h3>
        <p className="pb-4 text-secondary">Minecraft servers hosting </p>
        <div className="pb-4 space-x-4">
          <button className="text-[16px] px-[16px] py-[8px] border border-primary hover:bg-lightPurple">
            Live {"<~>"}
          </button>
          <button className="text-[16px] px-[16px] py-[8px] border border-secondary hover:bg-offWhite">
            Code {"</>"}
          </button>
        </div>
      </div>
    </div>
  );
};

const SmallCard = () => {
  const [cardComp, setCardComp] = useState<boolean>(false);
  const [ref, isView] = useInView();

  useEffect(() => {
    if (isView) {
      setCardComp(true);
    }
  }, [isView]);
  return (
    <div
      ref={ref}
      className={`w-[300px] border border-secondary relative transition-all duration-500 ease-in-out ${
        cardComp ? "scale-100 opacity-100" : "scale-0 opacity-0"
      }`}
    >
      <div className="border-b border-secondary px-2 py-2">
        <p className="text-secondary">Discord.js TS JS</p>
      </div>
      <div className="px-4 py-2">
        <h2 className="text-[24px] font-semibold text-white pb-2 pt-2">
          Bot boilerplate
        </h2>
        <p className="text-justify text-secondary">
          Start creating scalable discord.js bot with typescript in seconds
        </p>
        <div className="pt-8 pb-2">
          <button className="text-[16px] px-[16px] py-[8px] border border-primary hover:bg-lightPurple">
            Github {"</>"}
          </button>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [ref, isView] = useInView();
  const [ref2, isView2] = useInView();
  const [ref3, isView3] = useInView();
  const [mainHeading, setMainHeading] = useState(false);
  const [subHeading, setSubHeading] = useState(false);
  const [subHeading2, setSubHeading2] = useState(false);

  useEffect(() => {
    if (isView) {
      setMainHeading(true);
    }
    if (isView2) {
      setSubHeading(true);
    }
  }, [isView, isView2]);

  useEffect(() => {
    if (isView3) {
      setSubHeading2(true);
    }
  }, [isView3]);

  return (
    <div ref={ref} className="pt-12 font-fira-code">
      <div
        className={`relative transition-all duration-500 ease-in-out ${
          mainHeading ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
      >
        <h2 className="font-semibold text-[32px] ">
          <span className="text-primary">/</span>projects
        </h2>
        <p className="pt-1">List of projects</p>
      </div>

      <div ref={ref2} className="pt-24 font-semibold text-[32px] pb-8">
        <h2
          className={`text-center md:text-left relative transition-all duration-500 ease-in-out ${
            subHeading ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <span className="text-primary">#</span>complete-app
        </h2>
      </div>
      <div className="flex justify-center align-middle items-center flex-wrap gap-4">
        <Card />
        <Card />
        <Card />
      </div>

      <div className="pt-24 font-semibold text-[32px] pb-8">
        <h2
          ref={ref3}
          className={`text-center md:text-left relative transition-all duration-500 ease-in-out ${
            subHeading2 ? "scale-100 opacity-100" : "scale-0 opacity-0"
          }`}
        >
          <span className="text-primary">#</span>Small projects
        </h2>
      </div>

      <div className="flex justify-center align-middle items-center flex-wrap gap-4">
        <SmallCard />
        <SmallCard />
        <SmallCard />
      </div>
    </div>
  );
};

export default ProjectsPage;
