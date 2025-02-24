"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface ParallaxCardProps {
  title: string;
    classes: string;
    image: string;
    offset: number;
}

const ParallaxCard = ({ title, classes, image, offset }: ParallaxCardProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [offset, -offset]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="relative w-72 md:w-96 h-96 overflow-hidden"
    >
      <img src={image} alt={title} className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
        <h2 className="text-white text-xl font-bold">{title}</h2>
        <p className="text-white">{classes} Classes</p>
      </div>
    </motion.div>
  );
};

export default function ParallaxGrid() {
  return (
    <div className="relative flex flex-col items-center gap-12 bg-black text-white py-20">
      <div className="absolute top-1/3 left-1/4">
        <ParallaxCard title="FIGHT" classes="9" image="/fight.jpg" offset={50} />
      </div>
      <div className="absolute top-1/4 right-1/4">
        <ParallaxCard title="AERIAL" classes="11" image="/aerial.jpg" offset={100} />
      </div>
      <div className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2">
        <ParallaxCard title="RIDE" classes="7" image="/ride.jpg" offset={70} />
      </div>
    </div>
  );
}