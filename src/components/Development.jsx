import React, { Suspense } from "react";
import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Atom from "./Atom";
import styled from "styled-components";

const Description = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  top: 300px;
  right: 100px;
  color: #000;
  font-size: 14px;
  font-weight: 300;
  @media only screen and (max-width: 770px) {
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
  }
`;

const Development = () => {
  return (
    <>
      <Canvas camera={{ position: [0, 0, 10] }}>
        <Suspense fallback={null}>
          <Atom />
          <OrbitControls enableZoom={false} autoRotate />
        </Suspense>
      </Canvas>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, facilis?
      </Description>
    </>
  );
};

export default Development;
