import React from "react";
import ReviewCard from "../layouts/ReviewCard";
import img1 from "../assets/img/pic1.png";
import img2 from "../assets/img/pic2.png";
import img3 from "../assets/img/pic3.png";

const Review = () => {
  return (
    <div className=" min-h-screen flex flex-col items-center justify-center md:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-16 pt-24 pb-10">
        Review Customer
      </h1>
      <div className=" flex flex-col md:flex-row gap-5 mt-5">
        <ReviewCard img={img1} name="Aji" desc={"Sempol ayam dan sosis bakarnya juara. Apalagi kalau pesan yang pedas, bumbunya benar-benar terasa. Es tehnya juga segar banget. Porsinya pas, harganya juga ramah di kantong."} />
        <ReviewCard img={img2} name="Fhyno" desc={"Takoyakinya enak banget, terutama yang rasa bulgogi. Lembut di dalam, garing di luar, dan rasanya pas. Es limunnya juga seger banget, apalagi yang rasa stroberi. Cocok buat ngemil sambil ngerjain tugas"} />
        <ReviewCard img={img3} name="Deva Aulia" desc={"Saya suka banget sama takoyaki di sini, terutama yang spicy. Rasanya gak kalah sama yang di restoran Jepang. Es coklatnya juga creamy dan gak terlalu manis, pas banget buat nemenin kerja."} />
      </div>
    </div>
  );
};

export default Review;
