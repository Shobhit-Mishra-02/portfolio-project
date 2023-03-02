import Link from "next/link";

const Header = () => {
  return (
    <div>
      <div className="pt-14 mg:pt-20 flex flex-wrap space-y-8 md:space-y-12 w-full justify-center align-middle items-center xl:justify-between">
        <div className="w-full sm:max-w-[625px] h-fit">
          <h2 className="text-[32px] md:text-5xl font-[600] pb-4 leading-[42px]">
            Elias is a <span className="text-primary">web designer</span> and{" "}
            <span className="text-primary">front-end developer</span>
          </h2>
          <p className="text-secondary md:text-[16px] tracking-wide md:tracking-wider leading-[21px] text-justify sm:text-left">
            He crafts responsive websites where technologies meet creativity
          </p>

          <div className="pt-6 md:pt-8 flex justify-center align-middle items-center sm:justify-start">
            <Link href={"/contact"}>
              <button className="text-[16px] px-[16px] py-[8px] border border-primary hover:bg-lightPurple">
                Contact me !!
              </button>
            </Link>
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

      <div className="pt-8 flex justify-end flex-col align-middle items-end w-full md:max-w-[712px] md:mx-auto">
        <div className="relative text-xl font-semibold border border-secondary px-8 py-6">
          <svg
            className="absolute -top-4 left-2"
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="#282C33"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="41.472" height="28.704" />
            <path
              d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
              fill="#ABB2BF"
            />
          </svg>
          With great power comes great electricity bill
          <svg
            className="absolute -bottom-3 right-2"
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="#282C33"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="41.472" height="28.704" />
            <path
              d="M18.56 19.616C18.56 21.0453 18.0373 22.2507 16.992 23.232C15.968 24.2133 14.72 24.704 13.248 24.704C11.7333 24.704 10.4747 24.2133 9.472 23.232C8.49067 22.2507 8 21.0453 8 19.616C8 18.9333 8.096 18.208 8.288 17.44C8.48 16.672 8.864 15.68 9.44 14.464L14.4 4H19.2L16.544 15.584C17.1413 16.0107 17.6213 16.576 17.984 17.28C18.368 17.9627 18.56 18.7413 18.56 19.616ZM32.8 19.616C32.8 21.0453 32.2773 22.2507 31.232 23.232C30.1867 24.2133 28.9387 24.704 27.488 24.704C26.016 24.704 24.768 24.2133 23.744 23.232C22.7413 22.2507 22.24 21.0453 22.24 19.616C22.24 18.9333 22.336 18.208 22.528 17.44C22.72 16.672 23.1147 15.68 23.712 14.464L28.704 4H33.472L30.784 15.584C31.4027 16.0107 31.8933 16.576 32.256 17.28C32.6187 17.9627 32.8 18.7413 32.8 19.616Z"
              fill="#ABB2BF"
            />
          </svg>
        </div>
        <div className="text-xl border border-secondary px-4 py-2 w-fit">
          - Dr. Who
        </div>
      </div>
    </div>
  );
};

export default Header;
