import { Transition } from "@headlessui/react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Hamburger from "./Hamburger";
import Navbar from "./Navbar";
import NavButtons from "./NavButtons";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="flex items-center z-50 justify-between my-3 mx-2 sm:mx-4 ">
      <div className="flex w-auto lg:w-64 items-center space-x-2 mr-5">
        <Link to="/">
          <img
            className="border-2 w-10 lg:w-12 cursor-pointer border-[#28A0F0] rounded-full px-1 py-1.5"
            src="./assets/icons/logo.svg"
            alt="logo"
          />
        </Link>
      </div>

      <div className="hidden md:block">
        <Navbar setIsOpen={setIsOpen} />
      </div>
      <div className="hidden md:block">
        <NavButtons setIsOpen={setIsOpen} />
      </div>

      <div className="md:hidden">
        <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
      </div>

      <Transition
        show={isOpen}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
        className="fixed top-0 h-screen right-0 space-y-4 left-0 bg-[#111111] px-4 py-2 z-40 md:hidden"
      >
        <div className="relative overflow-hidden">
          <div className="fixed top-0 right-0 left-0 space-y-6 px-4 z-50">
            <Hamburger isOpen={isOpen} setIsOpen={setIsOpen} />
            <h1 className="text-center font-semibold text-2xl pt-8">Menu</h1>
            <Navbar setIsOpen={setIsOpen} />
            <NavButtons setIsOpen={setIsOpen} />
          </div>
          <div className="fixed top-0 right-0 z-0 overflow-hidden">
            <img src="./assets/images/wave.png" alt="wave" />
          </div>
        </div>
      </Transition>
    </div>
  );
};

export default Header;
