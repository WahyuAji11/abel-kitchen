import { Link } from "react-scroll";

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
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
            >
              Tentang Kami
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="review"
              spy={true}
              smooth={true}
              duration={500}
            >
              Reviews
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Menu</h1>
          <nav className=" flex flex-col gap-2">
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="dishes"
              spy={true}
              smooth={true}
              duration={500}
            >
              Makanan
            </Link>
            <Link
              className=" hover:text-brightColor transition-all cursor-pointer"
              to="menu"
              spy={true}
              smooth={true}
              duration={500}
            >
              Minuman
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Kontak Kami</h1>
          <nav className=" flex flex-col gap-2">
            <a
              className=" hover:text-brightColor transition-all cursor-pointer"
              href="https://maps.app.goo.gl/G2titkNciFyBd1aY6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Klik untuk melihat lokasi kami
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
              target="_blank"
              rel="noopener noreferrer"
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
