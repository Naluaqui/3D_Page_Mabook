"use client";

import { Canvas } from "@react-three/fiber";
import { useEffect } from "react";
import { MacBook } from "./MacBook";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function Scene() {
    useEffect(() => {
        const section1Inner = document.querySelector("#section1 .featureInner");
        const section1Title = document.querySelector("#section1 .featureTitle");
        const section1Desc = document.querySelector("#section1 .featureDesc");

        const section2Inner = document.querySelector("#section2 .featureInner");
        const section2Title = document.querySelector("#section2 .featureTitle");
        const section2Desc = document.querySelector("#section2 .featureDesc");

        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {

            gsap.set(section1Inner, { opacity: 0, y: 60, scale: 0.96 });
            gsap.set(section1Title, { opacity: 0, y: 30 });
            gsap.set(section1Desc, { opacity: 0, y: 20 });

            gsap.set(section2Inner, { opacity: 0, y: 60, scale: 0.96 });
            gsap.set(section2Title, { opacity: 0, y: 30 });
            gsap.set(section2Desc, { opacity: 0, y: 20 });

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#section1",
                    start: "top 40%",
                    end: "top 8%",
                    toggleActions: "play reverse play reverse",
                },
            })
            .to(section1Inner, {
                opacity: 1,
                y: -160,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
            }, 0)
            .to(section1Title, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power4.out",
            }, 0.15)
            .to(section1Desc, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }, 0.3);

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top 70%",
                    end: "bottom 10%",
                    toggleActions: "play reverse play reverse",
                },
            })
            .to(section2Inner, {
                opacity: 1,
                y: -160,
                scale: 1,
                duration: 1.2,
                ease: "power3.out",
            }, 0)
            .to(section2Title, {
                opacity: 1,
                y: 0,
                duration: 0.9,
                ease: "power4.out",
            }, 0.15)
            .to(section2Desc, {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power2.out",
            }, 0.12);
        });

        mm.add("(max-width: 768px)", () => {
            gsap.set([section1Inner, section2Inner], {
                autoAlpha: 0,
                y: 24,
                scale: 1,
            });

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#section1",
                    start: "top 10%",
                    end: "bottom 35%",
                    scrub: true,
                },
            })
            .to(section1Inner, {
                autoAlpha: 1,
                y: 0,
                duration: 0.2,
                ease: "none",
            }, 0)
            .to(section1Inner, {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "none",
            }, 0.2)
            .to(section1Inner, {
                autoAlpha: 0,
                y: -18,
                duration: 0.2,
                ease: "none",
            }, 0.7);

            gsap.timeline({
                scrollTrigger: {
                    trigger: "#section2",
                    start: "top 70%",
                    end: "bottom 15%",
                    scrub: true,
                },
            })
            .to(section2Inner, {
                autoAlpha: 1,
                y: 0,
                duration: 0.2,
                ease: "none",
            }, 0)
            .to(section2Inner, {
                autoAlpha: 1,
                y: 0,
                duration: 0.45,
                ease: "none",
            }, 0.2)
            .to(section2Inner, {
                autoAlpha: 0,
                y: -18,
                duration: 0.2,
                ease: "none",
            }, 0.7);
        });
        return () => {
            mm.revert();
        };
        }, []);
    

    return(
        <div className="fixed inset-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
                <directionalLight intensity={2} position={[1, 1, 2]} />
                <MacBook />
            </Canvas>
        </div>
    );
}