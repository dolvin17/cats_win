"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { ImMenu } from "react-icons/im";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const LINKS = (
    <Fragment>
				 
	<w3m-connect-button />
    </Fragment>
  );

  return (
    <section className="fixed w-full  flex flex-col lg:flex-row justify-center top-4 z-[1]">
      <nav className="!z-50  w-full items-center shadow-xl justify-between border drop-shadow-lg bg-black backdrop-blur-lg border-black h-[100px]  px-8 rounded-xl flex lg:max-w-[54rem]">
        <Link className="flex-shrink-0 max-w-[6rem]" href="/">
          <Image
            src="/logom.png"
            alt=""
            width={100}
            height={100}
            className="w-[16rem] mx-auto h-[4rem]"
          />
        </Link>
        <div className="items-center gap-16 justify-end hidden lg:flex">
          {LINKS}
        </div>
        <button
          type="button"
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <ImMenu className="text-xl text-arena-orange fill-current" />
        </button>
      </nav>
      <section
        className={`flex-col  py-4 [&_button]:underline [&_button]:underline-offset-8 rounded-xl drop-shadow-lg bg-arena-cyan/10 backdrop-blur-lg border-white  gap-2 lg:hidden ${
          isOpen ? "flex" : "hidden"
        }`}
      >
        {LINKS}
      </section>
    </section>
  );
}