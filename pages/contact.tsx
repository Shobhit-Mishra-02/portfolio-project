import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoIosMail } from "react-icons/io";

const ContactPage = () => {
  return (
    <div className="pt-12 font-fira-code">
      <div>
        <h2 className="font-semibold text-[32px] ">
          <span className="text-primary">/</span>contacts
        </h2>
        <p className="pt-1">Get in touch</p>
      </div>

      <div className="pt-24 flex justify-center align-middle items-start flex-wrap gap-8 lg:justify-between">
        <div className="w-full sm:max-w-[505px]">
          <p className="text-secondary text-justify">
            I’m interested in freelance opportunities. However, if you have
            other request or question, don’t hesitate to contact me
          </p>
        </div>

        <div className="h-auto w-fit border border-secondary px-6 py-6 flex justify-start align-middle items-start flex-col text-secondary">
          <h3 className="font-semibold pb-4 text-white">Message me here</h3>
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer pb-2 hover:text-white fill-secondary hover:fill-white">
            <IoIosMail className="fill-inherit cursor-pointer w-8 h-auto" />
            random@gmail.com
          </div>
          <div className="flex justify-start align-middle items-center gap-2 cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <AiFillLinkedin className="fill-inherit cursor-pointer w-8 h-auto" />
            !Elias#3519
          </div>
        </div>
      </div>

      <div className="pt-24 font-semibold text-[32px] pb-8">
        <h2 className="text-center md:text-left">
          <span className="text-primary">#</span>all-media
        </h2>
      </div>

      <div className="flex justify-center align-middle items-center lg:justify-between gap-4">
        <div className="text-secondary flex justify-center align-middle items-center gap-4 w-full md:max-w-[605px] xl:max-w-[780px] flex-wrap lg:justify-start">
          <div className="flex justify-center align-middle items-center gap-2 flex-wrap px-4 py-2 border border-secondary w-fit cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <AiFillGithub className="fill-inherit cursor-pointer w-8 h-auto" />
            random-name-id
          </div>
          <div className="flex justify-center align-middle items-center gap-2 flex-wrap px-4 py-2 border border-secondary w-fit cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <AiFillLinkedin className="fill-inherit cursor-pointer w-8 h-auto" />
            random-name
          </div>
          <div className="flex justify-center align-middle items-center gap-2 flex-wrap px-4 py-2 border border-secondary w-fit cursor-pointer hover:text-white fill-secondary hover:fill-white">
            <IoIosMail className="fill-inherit cursor-pointer w-8 h-auto" />
            random@gmail.com
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

export default ContactPage;
