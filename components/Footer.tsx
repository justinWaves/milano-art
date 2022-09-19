import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <div className="bg-slate-200 flex flex-col w-screen absolute bottom-0">
      <div>
        <div className=" bg-black flex flex-col">
          <div className="p-5 md:p-10 pt-20 flex flex-col md:flex-row justify-between ">
            <div className="flex flex-col "></div>
            <hr className="mt-10 mb-10" />
            <div className=" flex flex-row justify-between ">
              <div>
                <Link href="/">
                  <h1>test</h1>
                </Link>
                <div className="text-slate-300 ">
                  <Link href="/about">
                    <h2 className="hover:text-sky-300 cursor-pointer">About</h2>
                  </Link>
                  <h2>Contact</h2>
                  <h2>Mixes</h2>
                  <h2>Shows</h2>
                  <h2>Shop</h2>
                </div>
              </div>
              <Link href="/">
                <h1>test</h1>
              </Link>
            </div>
          </div>
        </div>
        <div className=" px-2 p-2  flex flex-row justify-between bg-black text-slate-600 text-xs">
          <p>
            Design and build by{" "}
            <a
              href="https://justinwaves.github.io/jw-portfolio-2021/"
              className="text-sky-300"
            >
              Justin Weisberg
            </a>
          </p>
          <p>© 2022</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
