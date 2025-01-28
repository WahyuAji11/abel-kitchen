import img from "../assets/img/takoyaki.webp";
import Button from "../layouts/Button";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row justify-center items-center lg:px-32 px-5">
      <img src={img} alt="img" />

      <div className=" space-y-4 lg:pt-14 lg:ml-14 sm: mt-5">
        <h1 className=" font-semibold text-4xl text-center md:text-start">
          Mengapa Memilih Abel&apos;s Kitchen
        </h1>
        <p>
          Nikmati beragam pilihan makanan dan minuman yang memanjakan selera Anda! Mulai dari takoyaki dengan beragam rasa khas seperti bulgogi, Korean, spicy, original, hingga lada hitam, hingga sempol ayam yang lembut di dalam dan renyah di luar. Ada juga sosis bakar dan pentol bakar yang tersedia dalam varian pedas atau tidak pedas, cocok untuk segala selera.
        </p>
        <p>
          Untuk minuman, kami hadirkan es teh jumbo yang segar, es coklat yang creamy, serta es limun dengan pilihan rasa unik seperti salak, kopi, jeruk, nanas, dan stroberi. Setiap sajian dibuat dengan cinta untuk memberikan pengalaman kuliner yang istimewa.
        </p>
        <p>
          Kami tidak hanya menawarkan rasa, tetapi juga pengalaman. Jadikan momen makan Anda lebih berkesan dengan pilihan terbaik dari kami. 😊
        </p>
        <div className="flex justify-center lg:justify-start">
          <a
            href="https://www.instagram.com/abels_kitchensitubondo?igsh=bWJtcHJiNmxkenJs"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button title="Ikuti Instagram Kami" />
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;
