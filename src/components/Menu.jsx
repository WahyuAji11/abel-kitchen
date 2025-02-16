import DishesCard from "../layouts/DishesCard";
import menu1 from "../assets/img/es-teh-jumbo.webp";
import menu2 from "../assets/img/es-coklat.webp";
import menu3 from "../assets/img/es-limun.webp";

const Menu = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center lg:pt-8 pt-24 pb-10">
        Minuman
      </h1>

      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={menu1} title="Es teh jumbo" price="Rp 3000" />
        <DishesCard img={menu2} title="Es Coklat" price="Rp 5000" />
        <DishesCard img={menu3} title="Es Limun berbagai rasa" price="Rp 5000" />
      </div>
    </div>
  );
};

export default Menu;
