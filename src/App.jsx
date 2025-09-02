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
    <CarShowcaseSlider />
  );
}
