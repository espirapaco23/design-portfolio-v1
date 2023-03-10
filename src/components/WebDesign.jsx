import { OrbitControls, Stage } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import Mac from "./Mac";
import styled from "styled-components";

const Description = styled.div`
  width: 200px;
  height: 70px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  position: absolute;
  top: 100px;
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

const WebDesign = () => {
  return (
    <>
      <Canvas>
        <Stage environment="city" intensity={0.6}>
          <Mac />
        </Stage>
        <OrbitControls enableZoom={false} />
      </Canvas>
      <Description>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. At, facilis?
      </Description>
    </>
  );
};

export default WebDesign;
