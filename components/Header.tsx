const Header = () => {
  return (
    <div className="pt-14 mg:pt-20 flex flex-wrap space-y-8 md:space-y-12 w-full justify-center align-middle items-center xl:justify-between">
      <div className="w-full sm:max-w-[537px] h-fit">
        <h2 className="text-[32px] md:text-5xl font-[600] pb-4 leading-[42px]">
          Elias is a <span className="text-primary">web designer</span> and{" "}
          <span className="text-primary">front-end developer</span>
        </h2>
        <p className="text-secondary md:text-[16px] tracking-wide md:tracking-wider leading-[21px]">
          He crafts responsive websites where technologies meet creativity
        </p>

        <div className="pt-6 md:pt-8">
          <button className="text-[16px] px-[16px] py-[8px] border border-primary hover:bg-offWhite">
            Contact me !!
          </button>
        </div>
      </div>

      <div className="flex justify-center align-middle items-center flex-col w-full sm:max-w-[469px] xl:pb-[140px]">
        <img
          className="w-full sm:max-w-[469px]"
          src="/images/Hero.png"
          alt="Hero image"
        />

        <div className="flex justify-center align-middle items-center border border-secondary w-full py-2 px-2 space-x-2">
          <div className="w-[16px] h-[16px] bg-primary"></div>
          <p className="text-secondary">
            Currently working on{" "}
            <span className="text-white font-semibold">Portfolio</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Header;
