"use client";

import * as THREE from "three";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber"; 
import { useRef } from "react";
import { MacBook } from "./MacBook";

export function Scene() {
    return(
        <div className="fixed inset-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60}}>
                <directionalLight intensity={2} position={[1, 1, 2]}/>
                <MacBook />
               
            </Canvas>
        </div>
    );
}