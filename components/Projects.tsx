import Link from "next/link";

const Card = () => (
  <div className="w-[330px] h-auto border border-secondary">
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

const Projects = () => {
  return (
    <div className="pt-36 md:pt-44 lg:pt-64 pb-4">
      <div className="pb-8 md:pb-16 md:flex md:justify-between">
        <h2 className="text-[32px] text-center sm:text-left lg:flex lg:justify-start lg:align-middle lg:items-center lg:gap-4">
          <span className="text-primary">#</span>projects
          <div className="hidden lg:block w-[300px] h-[1px] bg-primary"></div>
        </h2>

        <h3 className="text-center sm:text-left cursor-pointer">
          <Link href={"/projects"}>View all ~~{">"} </Link>
        </h3>
      </div>

      <div className="flex justify-center align-middle items-center flex-wrap gap-4">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Projects;
