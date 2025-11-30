"use client";

import Image from "next/image";
import Magnetic from "./Magnetic";

export default function Hero() {
  return (
    <section className="w-full min-h-[85vh] flex items-center justify-center relative overflow-hidden px-6" id="home">

      {/* ===== LEFT RED LINE ===== */}
      <div className="absolute left-0 top-[28%] w-40 h-[2px] bg-accent"></div>

      <div className="max-w-6xl w-full mx-auto flex flex-col md:flex-row items-center gap-16 z-[10]">

        {/* ----------------- TEXT ----------------- */}
        <div className="flex-1 space-y-3">
          <p className="text-gray-300 text-xl flex items-center gap-1">
            Hello<span className="text-accent">.</span>
          </p>

          <h1 className="text-5xl font-extrabold text-white">I'm Ajit Kumar</h1>

          <h2 className="text-4xl font-bold text-white">Data Analytics</h2>

          <div className="flex gap-4 pt-6">
            <Magnetic>
            <button className="bg-accent px-6 py-3 font-semibold rounded-md text-black hover:shadow-[0_0_20px_#ff5050]">
              Got a project?
            </button>
            </Magnetic>
            <Magnetic>
            <button className="border border-accent px-6 py-3 rounded-md hover:bg-accent/20">
              My resume
            </button>
            </Magnetic>
          </div>
        </div>

        {/* ----------------- IMAGE SECTION ----------------- */}
        <div className="relative flex items-center justify-center">

          {/* ===== OUTLINED CIRCLE ===== */}
          <div className="absolute w-[350px] h-[350px] rounded-full border-[6px] border-accent/70"></div>

          {/* ===== OUTLINED < > SHAPES ===== */}
          <div className="absolute -left-24 text-accent/60 text-5xl font-bold select-none">{`<`}</div>
          <div className="absolute -right-24 text-accent/60 text-5xl font-bold select-none">{`>`}</div>

          {/* ===== PROFILE IMAGE ===== */}
          <Image
            src="https://png.pngtree.com/png-clipart/20230508/original/pngtree-tiger-walking-wildlife-scene-transparent-background-png-image_9153495.png"
            width={260}
            height={260}
            alt="hero"
            className="rounded-xl relative z-[10]"
          />
        </div>
      </div>
    </section>
  );
}
