"use client";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useState } from "react";
import { ImMenu } from "react-icons/im";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const LINKS = (
    <Fragment>
		<button className="text-red-500 hover:bg-blue-500 hover:text-black bg-slate-800 border-red-500 px-4 border-[1px]">
			Who
		</button>
		<button className="text-red-500 hover:bg-blue-500 hover:text-black bg-slate-800 border-red-500 px-4 border-[1px]">
			Why
		</button>
		<button className="text-red-500 hover:bg-blue-500 hover:text-black bg-slate-800 border-red-500 px-4 border-[1px]">
			When
		</button>
	<w3m-connect-button />
    </Fragment>
  );

  return (
    <section className="fixed w-full  flex flex-col lg:flex-row justify-center top-4 z-[1]">
      <nav className="!z-50  w-full items-center shadow-xl justify-between border drop-shadow-lg bg-black backdrop-blur-lg border-black h-[120px]  px-8 rounded-xl flex lg:max-w-[54rem]">
        <Link className="flex-shrink-0 max-w-[9rem]" href="/">
          <Image
            src="/logom.png"
            alt=""
            width={200}
            height={200}
            className="w-[16rem] mx-auto h-[8rem]"
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