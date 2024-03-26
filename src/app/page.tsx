"use client";
import {useEffect, useState} from "react";
import {SparklesCore} from "@/components/ui/sparkles";
import Link from "next/link";
import {TextGenerateEffect} from "@/components/ui/text-generate-effect";

function Navbar() {
    const [fadeIn, setFadeIn] = useState(false);

    useEffect(() => {
        // Triggering the fade in effect
        setFadeIn(true);
    }, []);

    return (
        <>
            <nav
                className={`dark:text-white pt-5 z-20 ${
                    fadeIn ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
                }`}
                style={{transitionDelay: `${fadeIn ? "0.2s" : "0s"}`}}
            >
                <ul className="flex justify-center">
                    <li className="mr-4 hover:text-gray-400">
                        <Link href="/about">About Me</Link>
                    </li>
                    <li className="mr-4 hover:text-gray-400">
                        <Link href="/projects">Projects</Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export function Footer() {
    return <footer className="dark:text-white absolute bottom-0 w-full text-center p-4 text-xs">
        <p>
            Made with ❤️, {" "}
            <a
                href="https://ui.aceternity.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                Acternity
            </a>{" "}
            &{" "}
            <a
                href="https://ui.shadcn.com/"
                target="_blank"
                rel="noopener noreferrer"
            >
                shadcn
            </a>/ui
        </p>
    </footer>;
}

export default function Home() {
    const [particleColor, setParticleColor] = useState("#FFFFFF");

    useEffect(() => {
        // Check if the user's system is in light mode
        const isLightMode = window.matchMedia(
            "(prefers-color-scheme: light)"
        ).matches;

        // Set particle color based on system mode
        setParticleColor(isLightMode ? "#000000" : "#FFFFFF");
    }, []);

    return (
        <div
            className="h-[40rem] relative w-full dark:bg-black flex flex-col items-center justify-center overflow-hidden min-h-screen">
            <div className="absolute inset-0 w-full h-screen">
                <SparklesCore
                    id="tsparticlesfullpage"
                    background="transparent"
                    minSize={0.6}
                    maxSize={1.4}
                    particleDensity={100}
                    className="w-full h-full"
                    particleColor={particleColor}
                />
            </div>

            <TextGenerateEffect
                words="Sonny Taylor"
                className="relative z-20 text-3xl font-bold text-center text-white md:text-7xl lg:text-6xl"
            />
            <Navbar/>

            <Footer/>
        </div>
    );
}
