"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden px-4">

      {/* Flowing Energy Background */}
      <motion.div
        animate={{
          backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 bg-[length:300%_300%] 
        bg-gradient-to-br from-blue-100 via-pink-100 to-blue-200"
      />

      <motion.div className="relative flex flex-col items-center">

        {/* Energy Waves */}
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{
              duration: 18 + i * 6,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute w-64 h-64 rounded-full border border-blue-400/20"
          />
        ))}

        {/* DNA Arcs */}
        {[0, 180].map((deg, i) => (
          <motion.div
            key={i}
            animate={{ rotate: [deg, deg + 360] }}
            transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
            className="absolute w-52 h-52 rounded-full border-2 border-dashed 
            border-pink-400/40"
          />
        ))}

        {/* Pulse Core */}
        <motion.div
          animate={{ scale: [1, 1.25, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute w-40 h-40 rounded-full bg-gradient-to-r 
          from-blue-400 to-pink-400 blur-2xl opacity-40"
        />

        {/* Logo 3D Card */}
        <motion.div
          animate={{
            y: [0, -14, 0],
            rotateX: [0, 10, -10, 0],
            rotateY: [0, -10, 10, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-10 w-24 h-24 sm:w-28 sm:h-28 
          rounded-2xl bg-white/75 backdrop-blur-xl 
          shadow-[0_30px_80px_rgba(236,72,153,0.45)] 
          flex items-center justify-center"
        >
          <Image
            src="/assets/logo/logo.png"
            alt="LifeCare Hub Logo"
            width={60}
            height={60}
            priority
          />
        </motion.div>

        {/* Shimmer Brand */}
        <motion.h2
          animate={{ backgroundPosition: ["0%", "200%"] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="mt-7 text-2xl sm:text-3xl font-extrabold 
          bg-[length:200%] bg-gradient-to-r 
          from-blue-600 via-pink-500 to-blue-600 
          bg-clip-text text-transparent"
        >
          LifeCare Hub
        </motion.h2>

        {/* Heartbeat Text */}
        <motion.p
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="mt-2 text-sm text-gray-600 text-center"
        >
          Caring energy in motion
        </motion.p>

        {/* Heartbeat Sparks */}
        <div className="mt-5 flex gap-2">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.span
              key={i}
              animate={{ scale: [0.5, 1.3, 0.5] }}
              transition={{ duration: 1.1, repeat: Infinity, delay: i * 0.12 }}
              className="w-2.5 h-2.5 rounded-full bg-gradient-to-r 
              from-blue-500 to-pink-500"
            />
          ))}
        </div>

      </motion.div>
    </div>
  );
}
