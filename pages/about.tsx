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

const AboutPage = () => {
  return (
    <div className="pt-12 font-fira-code">
      <div>
        <h2 className="font-semibold text-[32px] ">
          <span className="text-primary">/</span>about-me
        </h2>
        <p className="pt-1">who am I ?</p>
      </div>

      <div className="flex justify-center align-middle items-center flex-wrap xl:justify-between lg:gap-6">
        <div className="w-full sm:max-w-[515px]">
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
        </div>

        <div>
          <img src="/images/Hero-2.png" alt="hero image" />
        </div>
      </div>

      <div className="pt-24 font-semibold text-[32px] pb-8">
        <h2 className="text-center md:text-left">
          <span className="text-primary">#</span>Skills
        </h2>
      </div>

      <div className="flex justify-center align-middle items-center flex-wrap gap-6">
        <Container title="Languages" text="Typescript CSS HTML Python" />
        <Container title="Databases" text="SQLite PostgreSQL Mongo" />
        <Container title="Other" text="HTML CSS EJS SCSS REST Jinja" />
        <Container
          title="Tools"
          text="VSCode Neovim Linux Figma XFCE Arch Git Font Awesome"
        />
        <Container
          title="Frameworks"
          text="React Vue Disnake Discord.js Flask Express.js"
        />
      </div>

      <div className="pt-24 font-semibold text-[32px] pb-8">
        <h2 className="text-center md:text-left">
          <span className="text-primary">#</span>my-fun-facts
        </h2>
      </div>

      <div className="flex justify-center align-middle items-center lg:justify-between gap-4">
        <div className="text-secondary flex justify-center align-middle items-center gap-4 w-full md:max-w-[605px] xl:max-w-[780px] flex-wrap lg:justify-start">
          <div className="px-4 py-2 border border-secondary w-fit">
            I like winter more than summer
          </div>
          <div className="px-4 py-2 border border-secondary w-fit">
            I often bike with my friends
          </div>
          <div className="px-4 py-2 border border-secondary w-fit">
            I like pizza and pasta
          </div>
          <div className="px-4 py-2 border border-secondary w-fit">
            I was in Egypt, Poland and Turkey
          </div>
          <div className="px-4 py-2 border border-secondary w-fit">
            My favorite movie is The Green Mile
          </div>
          <div className="px-4 py-2 border border-secondary w-fit">
            I am still in school
          </div>
          <div className="px-4 py-2 border border-secondary w-fit">
            I don’t have any siblings
          </div>
        </div>
        <div className="hidden lg:block">
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

export default AboutPage;
