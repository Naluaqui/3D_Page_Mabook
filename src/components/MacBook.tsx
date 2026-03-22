"use client";

import * as THREE from "three";
import { useLayoutEffect, useRef } from "react"; 
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

    useLayoutEffect(() => { 
        if (!groupRef.current || !topRef.current || !bottomRef.current) return;

        const group = groupRef.current; 
        const state = { 
            x: 1.5, 
            y: 0, 
            z: 0,

            px: 0,
            py: -0.7,
            pz: 0,

            sx: 1,
            sy: 1,
            sz: 1,
        
        }; 

        group.rotation.set(state.x, state.y, state.z);
        group.position.set(state.px, state.py, state.pz);
        group.scale.set(state.sx, state.sy, state.sz);

        const top = topRef.current;

        const topState = {
            x: 0,
            y: 0,
            z: 0,

            px: 0,
            py: 0,
            pz: 0,
        };

        top.rotation.set(topState.x, topState.y, topState.z);


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#section1",
                start: "top top", 
                end: "bottom top",
                scrub: 1.6, 
                invalidateOnRefresh: true,
            },
        });
        tl.to(state, {
            x: 0.057755,
            y: 0,
            z: 0,
            ease: "none", 
            duration: 0.1,
            onUpdate: () => { 
                group.rotation.set(state.x, state.y, state.z);
                group.position.set(state.px, state.py, state.pz);
                group.scale.set(state.sx, state.sy, state.sz);
            },
        });

        tl.to(state, {
            y: Math.PI,
            px: 1,
            sx: 0.6,
            sy: 0.6,
            sz: 0.6,
            ease: "none", 
            duration: 0.1,
            onUpdate: () => { 
                group.rotation.set(state.x, state.y, state.z);
                group.position.set(state.px, state.py, state.pz);
                group.scale.set(state.sx, state.sy, state.sz);
            },
        });

        tl.to(topState, {
            x: Math.PI / 2.5,
            py: -0.1,
            ease: "none",
            duration: 0.1,
            onUpdate: () => {
                top.rotation.set(topState.x, topState.y, topState.z);
                top.position.set(topState.px, topState.py, topState.pz);
            },
        }, "<");

        ScrollTrigger.refresh();

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, []);

    return (
        <group ref={groupRef} position={[0, -0.7, 0]}> 
            <mesh ref={topRef}>
                <primitive object={(topModel as any).nodes.macBook_TopPart} />
            </mesh>

            <mesh ref={bottomRef}>
                <primitive object={(bottomModel as any).nodes.macBook_BottomPart} />
            </mesh>
        </group>
    );
}