import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import CarShowcaseSlider from "./components/CarShowcaseSlider";

// Load Porsche model
function CarModel() {
  const { scene } = useGLTF("/porsche_911.glb"); // make sure this file is inside /public
  return (
    <primitive
      object={scene}
      scale={0.01} // scale down if model is too big
      position={[0, -1, 0]} // move down a bit so it sits on "ground"
    />
  );
}

export default function App() {
  return (
    // <div className="w-screen h-screen bg-gray-900">
    //   <CarShowcase
    //     car={{
    //       name: "Porsche 911 GT3 RS",
    //       subtitle: "Track-ready performance",
    //       price: 374900,
    //       location: "Miami, FL",
    //       year: 2016,
    //       mileage: "2,650 miles",
    //       hp: "520 hp",
    //       image: "/images/gt3rs.png", // make sure this is in /public/images
    //       gradient: "from-pink-100 to-white", // Tailwind gradient
    //     }}
    //   />

    //   <CarShowcase
    //     car={{
    //       name: "Porsche 911 993 Carrera RS Clubsport",
    //       subtitle: "Rare air-cooled performance",
    //       price: 407000,
    //       location: "San Diego, CA",
    //       year: 1995,
    //       mileage: "6,686 miles",
    //       hp: "300 HP",
    //       image: "/images/carrera.png", // make sure this image is in /public/images
    //       gradient: "from-yellow-100 to-white",
    //     }}
    //   />
    //   <CarShowcase
    //     car={{
    //       name: "Porsche 918 Spyder Martini",
    //       subtitle: "Hybrid hypercar legend",
    //       price: 1495000,
    //       location: "Las Vegas, NV",
    //       year: 2015,
    //       mileage: "1,744 miles",
    //       hp: "887 HP",
    //       image: "/images/spyder.png",
    //       gradient: "from-gray-200 to-white",
    //     }}
    //   />
    // </div>

    <CarShowcaseSlider />
  );
}
