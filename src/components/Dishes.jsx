import React from "react";
import img1 from "../assets/img/takoyaki-original_.jpg";
import img2 from "../assets/img/takoyaki-spicy.jpg";
import img3 from "../assets/img/takoyaki-lada-hitam.jpg";
import img4 from "../assets/img/takoyaki-korean.jpg";
import img5 from "../assets/img/takoyaki-bulgogi.jpg";
import img6 from "../assets/img/sempol-ayam.jpeg";
import img7 from "../assets/img/sosis.jpg";
import img8 from "../assets/img/pentol-bakar.jpg";


import DishesCard from "../layouts/DishesCard";

const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Makanan
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={img1} title="Takoyaki Original" price="Rp 10.000" />
        <DishesCard img={img2} title="Takoyaki Spicy" price="Rp 10.000" />
        <DishesCard img={img3} title="Takoyaki Lada Hitam" price="Rp 10.000" />
        <DishesCard img={img4} title="Takoyaki Korean" price="Rp 10.000" />
        <DishesCard img={img5} title="Takoyaki Bulgogi" price="Rp 10.000" />
        <DishesCard img={img6} title="Sempol Ayam" price="Rp 1000/tusuk" />
        <DishesCard img={img7} title="Sosis Bakar" price="Rp 7000/tusuk" />
        <DishesCard img={img8} title="Pentol Bakar" price="Rp -" />
      </div>
    </div>
  );
};

export default Dishes;
