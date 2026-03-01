"use client";

import * as THREE from "three";
import { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function MacBook() {
  const topModel = useGLTF("/assets/MacBookPro_top.glb"); 
  const bottomModel = useGLTF("/assets/MacBookPro_bottom.glb"); 

  const groupRef = useRef<THREE.Group>(null);
  const topRef = useRef<THREE.Mesh>(null); 
  const bottomRef = useRef<THREE.Mesh>(null); 

  return (
    <group
      ref={groupRef}
      position={[0, -0.7, 0]}
      rotation={[Math.PI / 2, 0, 0]}
      scale={1}
    >
      <mesh ref={topRef}>
        <primitive object={(topModel as any).nodes.macBook_TopPart} /> 
      </mesh>

      <mesh ref={bottomRef}>
        <primitive object={(bottomModel as any).nodes.macBook_BottomPart} /> 
      </mesh>
    </group>
  );
}