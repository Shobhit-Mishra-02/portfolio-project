const About = () => {
  return (
    <div className="pt-36 md:pt-44 lg:pt-64 pb-4">
      <div className="pb-8 md:pb-10 ">
        <h2 className="text-[32px] text-center sm:text-left lg:flex lg:justify-start lg:align-middle lg:items-center lg:gap-4">
          <span className="text-primary">#</span>about-me
          <div className="hidden lg:block w-[300px] h-[1px] bg-primary"></div>
        </h2>
      </div>

      <div className="flex justify-center align-middle items-center flex-wrap lg:justify-between">
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
          <div className="flex justify-center align-middle items-center lg:justify-start">
            <button className="text-[16px] px-[16px] py-[8px] border border-primary hover:bg-lightPurple">
              Read more {"~~>"}
            </button>
          </div>
        </div>

        <div>
          <img src="/images/Hero-2.png" alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default About;
