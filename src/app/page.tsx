"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";
import Link from "next/link";
import { TextGenerateEffect } from "../ui/text-generate-effect";
import { useEffect, useState } from "react";

function Navbar() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Triggering the fade in effect
    setFadeIn(true);
  }, []);

  return (
    <nav
      className={`text-white pt-5 z-20 ${
        fadeIn ? "opacity-100 transition-opacity duration-1000" : "opacity-0"
      }`}
      style={{ transitionDelay: `${fadeIn ? "0.2s" : "0s"}` }}
    >
      <ul className="flex justify-center">
        <li className="mr-4">
          <Link href="/about">About</Link>
        </li>
        <li className="mr-4">
          <Link href="/projects">Projects</Link>
        </li>
        <li className="mr-4">
          <Link href="/blog">Blog</Link>
        </li>
      </ul>
    </nav>
  );
}

export default function Home() {
  return (
    <div className="h-[40rem] relative w-full bg-black flex flex-col items-center justify-center overflow-hidden min-h-screen">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={100}
          className="w-full h-full"
          particleColor="#FFFFFF"
        />
      </div>

      <TextGenerateEffect
        words="Sonny Taylor"
        className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20"
      />
      <Navbar />
    </div>
  );
}
