import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-row justify-between items-center lg:px-32 px-5 bg-[url('./assets/img/heroo.jpg')] bg-cover bg-no-repeat ">
      <div className=" w-full lg:w-2/3 space-y-5">
        <h1 className=" text-backgroundColor font-semibold text-6xl">
          Abel&apos;s Kitchen.
        </h1>
        <p className=" text-backgroundColor">
          Abel&apos;s Kitchen menyajikan street food autentik dan minuman segar, menghadirkan citarasa jalanan yang nikmat, memikat selera pelanggan.
        </p>
        <div className=" lg:pl-44">
          <a href="https://wa.me/+6285174368446">
            <Button title="Pesan Sekarang!" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
