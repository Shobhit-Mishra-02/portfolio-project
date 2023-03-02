import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="bg-ternary text-white font-fira-code px-[6px] sm:px-[18px] md:px-[64px] lg:px-[128px] 2xl:px-[168px] mt-36 md:mt-44 lg:mt-64 border-t border-secondary">
      <div className="flex justify-between align-middle items-center pt-16">
        <div className="flex justify-start items-start align-middle gap-4 flex-wrap w-[200px] sm:w-[250px] lg:w-[400px]">
          <svg
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="white"
            className="w-8 h-auto"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
            />
          </svg>
          <p className="">Elias, a web developer</p>
        </div>
        <div>
          <h2 className="text-xl font-semibold pb-4">Media</h2>
          <div className="flex justify-center align-middle items-center space-x-4">
            <AiFillGithub className="fill-secondary hover:fill-white cursor-pointer w-8 h-auto" />
            <AiFillLinkedin className="fill-secondary hover:fill-white cursor-pointer w-8 h-auto" />
            <IoIosMail className="fill-secondary hover:fill-white cursor-pointer w-8 h-auto" />
          </div>
        </div>
      </div>

      <div className="pt-12 pb-8">
        <p className="text-center text-secondary">
          © Copyright 2022. Made by Elias
        </p>
      </div>
    </div>
  );
};

export default Footer;
