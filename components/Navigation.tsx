import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { IoLogoFigma } from "react-icons/io5";
import { useInView } from "react-intersection-observer";

const Navigation = () => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);
  const [ref, isView] = useInView();
  const [navComp, setNavComp] = useState(false);

  useEffect(() => {
    if (isView) {
      setNavComp(true);
    }
  }, [isView]);

  const onToggleMenu = () =>
    isMenuOpen ? toggleMenu(false) : toggleMenu(true);

  return (
    <nav
      ref={ref}
      className=" bg-ternary text-white relative z-10 font-fira-code"
    >
      {/* navbar for mobile  */}
      <div
        className={`px-[6px] sm:hidden flex justify-between align-middle items-center py-2 bg-ternary mt-0 relative ${
          navComp ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all ease-in-out duration-500 `}
      >
        <Link href={"/"}>
          <svg
            className="w-10 h-auto cursor-pointer"
            width="52"
            height="52"
            viewBox="0 0 52 52"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule={"evenodd"}
              d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
            />
          </svg>
        </Link>

        {isMenuOpen ? (
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#D9D9D9"
            xmlns="http://www.w3.org/2000/svg"
            onClick={onToggleMenu}
            className="w-8 h-auto cursor-pointer"
          >
            <rect width="1" height="1" transform="matrix(1 0 0 -1 11 12)" />
            <rect
              x="3"
              y="19.9706"
              width="24"
              height="2"
              transform="rotate(-45 3 19.9706)"
            />
            <rect
              x="4"
              y="3"
              width="24"
              height="2"
              transform="rotate(45 4 3)"
            />
          </svg>
        ) : (
          <svg
            onClick={onToggleMenu}
            className="w-8 h-auto cursor-pointer"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#D9D9D9"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="5" width="24" height="2" />
            <rect x="9" y="12" width="15" height="2" />
          </svg>
        )}

        <div
          className={`list-none absolute bg-ternary border-b border-secondary ${
            isMenuOpen ? "top-12" : "-top-[500px]"
          } right-0 left-0 w-full space-y-5 px-4 pt-8 pb-6 -z-10  transition-all ease-in-out duration-700`}
        >
          <li className="text-2xl w-full cursor-pointer text-secondary hover:text-white pt-6">
            <Link href={"/"}>
              <div className="w-full">
                <span className="text-primary">#</span>home
              </div>
            </Link>
          </li>

          <li className="text-2xl w-full cursor-pointer text-secondary hover:text-white">
            <Link href={"/projects"}>
              <div className="w-full">
                <span className="text-primary">#</span>works
              </div>
            </Link>
          </li>

          <li className="text-2xl w-full cursor-pointer text-secondary hover:text-white">
            <Link href={"/about"}>
              <div className="w-full">
                <span className="text-primary">#</span>about-me
              </div>
            </Link>
          </li>
          <li className="text-2xl w-full cursor-pointer text-secondary hover:text-white">
            <Link href={"/contact"}>
              <div className="w-full">
                <span className="text-primary">#</span>contacts
              </div>
            </Link>
          </li>

          <div className="w-full flex flex-row justify-center pt-12 space-x-6">
            <AiFillGithub className="h-auto w-[42px] fill-secondary hover:fill-white cursor-pointer" />

            <AiFillLinkedin className="h-auto w-[42px] fill-secondary hover:fill-white cursor-pointer" />

            <IoLogoFigma className="h-auto w-[42px] fill-secondary hover:fill-white cursor-pointer" />
          </div>
        </div>
      </div>

      {/* navbar for big devices  */}
      <div
        className={`hidden sm:block relative ${
          navComp ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
        } transition-all ease-in-out duration-500`}
      >
        <div className="sm:px-[18px] md:px-[64px] lg:px-[128px] 2xl:px-[168px] flex justify-between align-middle items-center py-4 md:py-8">
          <Link href={"/"}>
            <svg
              className="w-10 h-auto cursor-pointer"
              width="52"
              height="52"
              viewBox="0 0 52 52"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule={"evenodd"}
                d="M39 0H26V13H13H0V26V39V52H13H26V39H39H52V26V13V0H39ZM13 39H26V26H39V13H26V26H13V39Z"
              />
            </svg>
          </Link>

          <div className="list-none flex justify-center align-middle flex-row space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-14">
            <Link href={"/"}>
              <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white">
                <span className="text-primary">#</span>home
              </li>
            </Link>
            <Link href={"/projects"}>
              <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white">
                <span className="text-primary">#</span>works
              </li>
            </Link>
            <Link href={"/about"}>
              <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white whitespace-nowrap">
                <span className="text-primary">#</span>about-me
              </li>
            </Link>
            <Link href={"/contact"}>
              <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white">
                <span className="text-primary">#</span>contacts
              </li>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
