const Container = ({ title, text }: { title: string; text: string }) => {
  return (
    <div className="w-[230px] border border-secondary">
      <h2 className="text-[16px] font-semibold border-b border-secondary px-2 py-2">
        {title}
      </h2>
      <div className="text-secondary px-2 py-2">{text}</div>
    </div>
  );
};

const Skills = () => {
  return (
    <div className="pt-36 md:pt-44 lg:pt-64 pb-4">
      <div className="pb-8 md:pb-16 ">
        <h2 className="text-[32px] text-center sm:text-left lg:flex lg:justify-start lg:align-middle lg:items-center lg:gap-4">
          <span className="text-primary">#</span>Skills
          <div className="hidden lg:block w-[300px] h-[1px] bg-primary"></div>
        </h2>
      </div>

      <div className="flex justify-center align-middle items-center flex-wrap gap-4 2xl:justify-between">
        <div className="hidden 2xl:block">
          <img
            className="w-full sm:max-w-[400px]"
            src="/patterns/Group 36.png"
            alt="pattern"
          />
        </div>

        <div className="md:flex md:justify-center md:flex-wrap md:align-middle md:gap-2">
          <div>
            <Container title="Languages" text="Typescript CSS HTML Python" />
          </div>
          <div className="space-y-2">
            <Container title="Databases" text="SQLite PostgreSQL Mongo" />
            <Container title="Other" text="HTML CSS EJS SCSS REST Jinja" />
          </div>
          <div className="space-y-2">
            <Container
              title="Tools"
              text="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
            />
            <Container
              title="Frameworks"
              text="React Vue Disnake Discord.js Flask Express.js"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
