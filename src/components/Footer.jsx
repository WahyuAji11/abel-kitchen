import React from "react";
import { BsFacebook } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div className=" bg-black text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">Abel&apos;s Kitchen.</h1>
          <p className=" text-sm">
            menyajikan street food autentik dan minuman segar, menghadirkan citarasa jalanan yang nikmat, memikat selera pelanggan.
          </p>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Links</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/about"
            >
              Tentang Kami
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/review"
            >
              Reviews
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/dishes"
            >
              Makanan
            </a>
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="/minuman"
            >
              Minuman
            </a>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Kontak Kami</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://abel-kitchen.vercel.app/"
            >
              Abel&apos;s Kitchen
            </a>
            <a
              className="hover:text-brightColor transition-all cursor-pointer"
              href="https://wa.me/+6285174368446"
              target="_blank"
              rel="noopener noreferrer"
            >
              +6285174368446
            </a>

            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://www.instagram.com/abels_kitchensitubondo?igsh=bWJtcHJiNmxkenJs"
            >
              Abel&apos;s Kitchen Instagram
            </a>
          </nav>
        </div>
      </div>
      <div>
        <p>
          <p className=" text-center py-4">
            @copyright developed by
            <span className=" text-brightColor"> Aji </span> |
            All rights reserved
          </p>
        </p>
      </div>
    </div>
  );
};

export default Footer;
