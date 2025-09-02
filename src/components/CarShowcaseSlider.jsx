import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";


const cars = [
  {
    name: "Porsche 911 993 Carrera RS Clubsport",
    subtitle: "Rare air-cooled performance",
    price: 407000,
    location: "San Diego, CA",
    year: 1995,
    mileage: "6,687 miles",
    hp: "300 HP",
    image: "/public/images/carrera.png",
    gradient: "from-yellow-100 to-white",
  },
  {
    name: "Porsche 911 GT3 RS",
    subtitle: "Track-ready performance",
    price: 374900,
    location: "Miami, FL",
    year: 2016,
    mileage: "2,650 miles",
    hp: "520 HP",
    image: "/public/images/gt3rs.png",
    gradient: "from-pink-100 to-white",
  },
  {
    name: "Porsche 918 Spyder Martini",
    subtitle: "Hybrid hypercar legend",
    price: 1495000,
    location: "Las Vegas, NV",
    year: 2015,
    mileage: "1,744 miles",
    hp: "887 HP",
    image: "/public/images/spyder.png",
    gradient: "from-gray-200 to-white",
  },
];

export default function CarShowcaseSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % cars.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const car = cars[index];

  return (
     <div
      className={`relative w-screen h-screen bg-gradient-to-b ${car.gradient} flex items-center justify-center overflow-hidden`}
      style={{ perspective: "1200px" }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={car.image}
          initial={{ opacity: 0, rotateY: 90 }}
          animate={{ opacity: 1, rotateY: 0 }}
          exit={{ opacity: 0, rotateY: -90 }}
          transition={{ duration: 0.6 }}
          className="absolute right-10 top-1/2 transform -translate-y-1/2"
          style={{ transformStyle: "preserve-3d" }}
        >
          <img
            src={car.image}
            alt={car.name}
            className="max-h-[70%] object-contain drop-shadow-2xl"
          />
        </motion.div>
      </AnimatePresence>

      <motion.div
        key={car.name}
        initial={{ opacity: 0, rotateY: -90 }}
        animate={{ opacity: 1, rotateY: 0 }}
        exit={{ opacity: 0, rotateY: 90 }}
        transition={{ duration: 0.6 }}
        className="absolute left-10 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-md"
        style={{ transformStyle: "preserve-3d" }}
      >
        <h1 className="text-4xl font-bold">{car.name}</h1>
        <p className="text-gray-500 text-lg">{car.subtitle}</p>
        <div className="text-2xl font-semibold mt-2">${car.price.toLocaleString()}</div>
        <p className="text-sm text-gray-600">{car.location}</p>

        <div className="flex justify-between mt-4 text-sm text-gray-700">
          <span>{car.year} Year</span>
          <span>{car.mileage} Mileage</span>
          <span>{car.hp} HP</span>
        </div>

        <button className="mt-6 px-5 py-2 rounded-xl bg-black text-white hover:bg-gray-800 transition">
          Full details →
        </button>
      </motion.div>
    </div>
  );
}
