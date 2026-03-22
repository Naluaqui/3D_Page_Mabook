"use client";

import * as THREE from "three";
import { Box, OrbitControls } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber"; 
import { useEffect, useRef } from "react";
import { MacBook } from "./MacBook";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
    useEffect(() => {
        const section1 = document.querySelector(".featureLeft");
        const section2 = document.querySelector(".featureRight");

        gsap.timeline({
            scrollTrigger: {
                trigger: "#section1",
                start: "top top",
                end: "5% bottom",
                scrub: true,
            }
        })
        .to(section1, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0)

        gsap.timeline({
            scrollTrigger: {
                trigger: "#section2",
                start: "top top",
                end: "5% bottom",
                scrub: true,
            }
        })
        .to(section2, { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }, 0)
    }, []);

    return(
        <div className="fixed inset-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60}}>
                <directionalLight intensity={2} position={[1, 1, 2]}/>
                <MacBook />
               
            </Canvas>
        </div>
    );
}