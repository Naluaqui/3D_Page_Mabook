"use client";

import * as THREE from "three";
import { useEffect, useRef } from "react";
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

    useEffect(() => {
        if (!groupRef.current || !topRef.current || !bottomRef.current) return;
        console.log("Rotação inicial:", groupRef.current.rotation);

        gsap.set(groupRef.current.rotation, { x: -Math.PI / 2, y: 0, z: 0 }); 
        console.log("Depois do set:", groupRef.current.rotation.x);

        const tl = gsap.timeline({
        scrollTrigger: {
            trigger: "#section1",
            start: "top+=1 bottom", 
            end: "bottom top",
            scrub: true,
            invalidateOnRefresh: true, 
        },
        });

        tl.to(groupRef.current.rotation, {
        x: Math.PI, 
        ease: "power2.inOut",
        immediateRender: false, 
        });

        ScrollTrigger.refresh(); 

        return () => {
        tl.scrollTrigger?.kill(); 
        tl.kill(); 
        };
    }, []); 

    return (
        <group ref={groupRef} position={[0, -0.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <mesh ref={topRef}>
            <primitive object={(topModel as any).nodes.macBook_TopPart} />
        </mesh>

        <mesh ref={bottomRef}>
            <primitive object={(bottomModel as any).nodes.macBook_BottomPart} />
        </mesh>
        </group>
    );
}