import { useState } from "react";

const Navigation = () => {
  const [isMenuOpen, toggleMenu] = useState<boolean>(false);

  const onToggleMenu = () =>
    isMenuOpen ? toggleMenu(false) : toggleMenu(true);

  return (
    <nav className=" bg-ternary text-white relative z-10 font-fira-code">
      {/* navbar for mobile  */}
      <div className=" px-[6px] sm:hidden flex justify-between align-middle items-center py-2 bg-ternary mt-0">
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
            <span className="text-primary">#</span>home
          </li>
          <li className="text-2xl w-full cursor-pointer text-secondary hover:text-white">
            <span className="text-primary">#</span>works
          </li>
          <li className="text-2xl w-full cursor-pointer text-secondary hover:text-white">
            <span className="text-primary">#</span>about-me
          </li>
          <li className="text-2xl w-full cursor-pointer text-secondary hover:text-white">
            <span className="text-primary">#</span>contacts
          </li>

          <div className="w-full flex flex-row justify-center pt-12 space-x-4">
            <svg
              className="h-auto w-[42px] hover:fill-white cursor-pointer"
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="#ABB2BF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15.5 6C9.69875 6 5 10.5882 5 16.2529C5 20.7899 8.00562 24.6219 12.1794 25.9804C12.7044 26.0701 12.9012 25.7625 12.9012 25.4934C12.9012 25.2499 12.8881 24.4425 12.8881 23.5838C10.25 24.058 9.5675 22.9558 9.3575 22.3791C9.23938 22.0843 8.7275 21.1743 8.28125 20.9308C7.91375 20.7386 7.38875 20.2644 8.26813 20.2516C9.095 20.2388 9.68563 20.9949 9.8825 21.3025C10.8275 22.8533 12.3369 22.4175 12.9406 22.1484C13.0325 21.4819 13.3081 21.0334 13.61 20.777C11.2737 20.5207 8.8325 19.6364 8.8325 15.7147C8.8325 14.5997 9.23938 13.6769 9.90875 12.9592C9.80375 12.7029 9.43625 11.6519 10.0138 10.2422C10.0138 10.2422 10.8931 9.97301 12.9012 11.2931C13.7413 11.0624 14.6338 10.947 15.5263 10.947C16.4188 10.947 17.3113 11.0624 18.1513 11.2931C20.1594 9.9602 21.0387 10.2422 21.0387 10.2422C21.6163 11.6519 21.2488 12.7029 21.1438 12.9592C21.8131 13.6769 22.22 14.5868 22.22 15.7147C22.22 19.6492 19.7656 20.5207 17.4294 20.777C17.81 21.0975 18.1381 21.7126 18.1381 22.6738C18.1381 24.0452 18.125 25.1474 18.125 25.4934C18.125 25.7625 18.3219 26.0829 18.8469 25.9804C20.9314 25.2935 22.7428 23.9854 24.026 22.2403C25.3092 20.4953 25.9996 18.4012 26 16.2529C26 10.5882 21.3013 6 15.5 6Z" />
            </svg>

            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="h-auto w-[42px] hover:fill-white cursor-pointer"
              fill="#ABB2BF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M4 5.719C4 4.7695 4.789 4 5.7625 4H26.2375C27.211 4 28 4.7695 28 5.719V26.281C28 27.2305 27.211 28 26.2375 28H5.7625C4.789 28 4 27.2305 4 26.281V5.719ZM11.4145 24.091V13.2535H7.813V24.091H11.4145ZM9.6145 11.773C10.87 11.773 11.6515 10.942 11.6515 9.901C11.629 8.8375 10.8715 8.029 9.6385 8.029C8.4055 8.029 7.6 8.839 7.6 9.901C7.6 10.942 8.3815 11.773 9.5905 11.773H9.6145ZM16.9765 24.091V18.0385C16.9765 17.7145 17.0005 17.3905 17.0965 17.1595C17.356 16.513 17.9485 15.8425 18.9445 15.8425C20.248 15.8425 20.7685 16.8355 20.7685 18.2935V24.091H24.37V17.875C24.37 14.545 22.594 12.997 20.224 12.997C18.313 12.997 17.4565 14.047 16.9765 14.7865V14.824H16.9525C16.9605 14.8115 16.9685 14.799 16.9765 14.7865V13.2535H13.3765C13.4215 14.2705 13.3765 24.091 13.3765 24.091H16.9765Z" />
            </svg>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="h-auto w-[42px] hover:fill-white cursor-pointer"
              fill="#ABB2BF"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M16 16C16 15.1159 16.3687 14.2681 17.0251 13.643C17.6815 13.0179 18.5717 12.6667 19.5 12.6667C20.4283 12.6667 21.3185 13.0179 21.9749 13.643C22.6313 14.2681 23 15.1159 23 16C23 16.8841 22.6313 17.7319 21.9749 18.357C21.3185 18.9821 20.4283 19.3333 19.5 19.3333C18.5717 19.3333 17.6815 18.9821 17.0251 18.357C16.3687 17.7319 16 16.8841 16 16ZM9 22.6667C9 21.7826 9.36875 20.9348 10.0251 20.3096C10.6815 19.6845 11.5717 19.3333 12.5 19.3333H16V22.6667C16 23.5507 15.6313 24.3986 14.9749 25.0237C14.3185 25.6488 13.4283 26 12.5 26C11.5717 26 10.6815 25.6488 10.0251 25.0237C9.36875 24.3986 9 23.5507 9 22.6667ZM16 6V12.6667H19.5C20.4283 12.6667 21.3185 12.3155 21.9749 11.6904C22.6313 11.0652 23 10.2174 23 9.33333C23 8.44928 22.6313 7.60143 21.9749 6.97631C21.3185 6.35119 20.4283 6 19.5 6H16ZM9 9.33333C9 10.2174 9.36875 11.0652 10.0251 11.6904C10.6815 12.3155 11.5717 12.6667 12.5 12.6667H16V6H12.5C11.5717 6 10.6815 6.35119 10.0251 6.97631C9.36875 7.60143 9 8.44928 9 9.33333ZM9 16C9 16.8841 9.36875 17.7319 10.0251 18.357C10.6815 18.9821 11.5717 19.3333 12.5 19.3333H16V12.6667H12.5C11.5717 12.6667 10.6815 13.0179 10.0251 13.643C9.36875 14.2681 9 15.1159 9 16Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* navbar for big devices  */}
      <div className="hidden sm:block">
        <div className="sm:px-[18px] md:px-[64px] lg:px-[128px] 2xl:px-[168px] flex justify-between align-middle items-center py-4 md:py-8">
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

          <div className="list-none flex justify-center align-middle flex-row space-x-6 md:space-x-8 lg:space-x-12 xl:space-x-14">
            <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white">
              <span className="text-primary">#</span>home
            </li>
            <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white">
              <span className="text-primary">#</span>works
            </li>
            <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white whitespace-nowrap">
              <span className="text-primary">#</span>about-me
            </li>
            <li className="text-[16px] lg:text-[18px] w-full cursor-pointer text-secondary hover:text-white">
              <span className="text-primary">#</span>contacts
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
