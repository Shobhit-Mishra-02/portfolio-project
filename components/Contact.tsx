import { IoIosMail } from "react-icons/io";
import { AiFillLinkedin } from "react-icons/ai";

const Contact = () => {
  return (
    <div className="pt-36 md:pt-44 lg:pt-64 pb-4">
      <div className="pb-8 md:pb-10 ">
        <h2 className="text-[32px] text-center sm:text-left lg:flex lg:justify-start lg:align-middle lg:items-center lg:gap-4">
          <span className="text-primary">#</span>contacts
          <div className="hidden lg:block w-[300px] h-[1px] bg-primary"></div>
        </h2>
      </div>

      <div className="flex justify-center align-middle items-start flex-wrap gap-8 md:justify-between">
        <div className="w-full sm:max-w-[405px] lg:max-w-[505px]">
          <p className="text-secondary text-justify">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>

        <div className="h-auto w-fit border border-secondary px-6 py-6 flex justify-start align-middle items-start flex-col text-secondary">
          <h3 className="font-semibold pb-4 text-white">Message me here</h3>
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer pb-2 fill-secondary hover:text-white hover:fill-white">
            <IoIosMail className="fill-inherit cursor-pointer w-8 h-auto" />
            random@gmail.com
          </div>
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer fill-secondary hover:fill-white hover:text-white">
            <AiFillLinkedin className="fill-inherit cursor-pointer w-8 h-auto" />
            !Elias#3519
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
