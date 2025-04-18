import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className=" footer border z-10 border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container mx-auto py-20 flex justify-between items-center">
        <Image
          src="/images/my-logo.png"
          alt="my image"
          className="  rounded-full"
          width={100}
          height={100}
        />
        <p className="text-slate-300">All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
