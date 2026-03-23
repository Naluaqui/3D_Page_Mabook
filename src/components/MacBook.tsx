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
            py: -1.7,
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

        const bottom = bottomRef.current;

        const bottomState = {
            x: 0,
            y: 0,
            z: 0,

            px: 0,
            py: 0,
            pz: 0,
        };

        bottom.rotation.set(bottomState.x, bottomState.y, bottomState.z);


        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "#hero",
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
            ease: "power2.out",
            duration: 2, 
            onUpdate: () => { 
                group.rotation.set(state.x, state.y, state.z);
                group.position.set(state.px, state.py, state.pz);
                group.scale.set(state.sx, state.sy, state.sz);
            },
        });

        tl.to(state, {
            y: Math.PI,
            x: 0.12,
            z: -0.08,
            px: 1,
            py: -0.5,
            pz: -0.15,
            sx: 0.6,
            sy: 0.6,
            sz: 0.6,
            ease: "power2.inOut",
            duration: 15, 
            onUpdate: () => { 
                group.rotation.set(state.x, state.y, state.z);
                group.position.set(state.px, state.py, state.pz);
                group.scale.set(state.sx, state.sy, state.sz);
            },
        });

        tl.to(topState, {
            x: Math.PI / 2.5,
            py: -0.06,
            pz: 0.02,
            ease: "power3.out",
            duration: 4,
            onUpdate: () => {
                top.rotation.set(topState.x, topState.y, topState.z);
                top.position.set(topState.px, topState.py, topState.pz);
            },
        }, "<2");

        tl.to(state, {
            y: Math.PI + 0.28,
            x: -0.08,
            z: 0.06,
            px: -0.85,
            py: -0.15,
            pz: 0.12,
            ease: "power2.inOut", 
            duration: 9,
            onUpdate: () => { 
                group.rotation.set(state.x, state.y, state.z);
                group.position.set(state.px, state.py, state.pz);
                group.scale.set(state.sx, state.sy, state.sz);
            },
        });

        tl.to(bottomState, {
            x: -Math.PI / 4,
            ease: "power2.out",
            duration: 4,
            onUpdate: () => {
                bottom.rotation.set(bottomState.x, bottomState.y, bottomState.z);
                bottom.position.set(bottomState.px, bottomState.py, bottomState.pz);
            },
        }, "<5");
        

        ScrollTrigger.refresh();

        return () => {
            tl.scrollTrigger?.kill();
            tl.kill();
        };
    }, []);

    return (
        <group ref={groupRef} position={[0, -1.7, 0]}> 
            <mesh ref={topRef}>
                <primitive object={(topModel as any).nodes.macBook_TopPart} />
            </mesh>

            <mesh ref={bottomRef}>
                <primitive object={(bottomModel as any).nodes.macBook_BottomPart} />
            </mesh>
        </group>
    );
}