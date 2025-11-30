"use client";
import Image from "next/image";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const projects = [
  { title:"AI Attendance System", img:"https://www.pockethrms.com/wp-content/uploads/2020/08/AI-based-Smart-Attendance-System-Blog-Banner-scaled.webp", tag:"Next.js + Flask + BLE + QR", desc:"3-factor attendance with PWA Offline support" },
  { title:"Portfolio Website", img:"https://storage.googleapis.com/webdesignledger.pub.network/WDL/Portfolios_Featured_Image_06.jpg", tag:"Next.js + Tailwind + Motion", desc:"UI you are currently viewing" },
  { title:"Gesture Media Controller", img:"https://tse2.mm.bing.net/th/id/OIP.jkTt1O2RqGCPD9Rj1u5-BAHaFj?pid=Api&P=0&h=180", tag:"Python + Mediapipe", desc:"Hand gestures to control playback" }
];

export default function Projects() {
  return (
    <section className="py-24 max-w-6xl mx-auto px-6" id="projects">
      <Reveal><h2 className="text-3xl font-bold mb-12 text-center">Projects</h2></Reveal>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((p,i)=>(
          <Reveal key={i}>
            <motion.div
              whileHover={{ scale: 1.05 }}
              transition={{ type:"spring", stiffness:120 }}
              className="rounded-xl overflow-hidden border border-white/10 bg-white/[0.04] shadow-[0_0_20px_#ffffff15]"
            >
              <div className="relative h-44 w-full overflow-hidden">
                <Image src={p.img} fill alt="project"
                  className="object-cover group-hover:scale-110 duration-500" />
              </div>

              <div className="p-5 space-y-2">
                <span className="text-xs px-2 py-1 bg-accent rounded-md">{p.tag}</span>
                <h3 className="text-xl font-semibold">{p.title}</h3>
                <p className="text-gray-300 text-sm">{p.desc}</p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
