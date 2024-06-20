"use client";
import React from "react";
import { motion } from "framer-motion";
import { styles } from "../app/style";
import { ComputersCanvas, EarthCanvas } from "./canvas/index";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex fle-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h3 className={`${styles.heroHeadText} text-white`}>
            Transform Your Business with &nbsp;
            <span className="text-[#915eff]">AI-Driven</span>&nbsp; Insights and
            Solutions{" "}
          </h3>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Your Journey To Tomorrow <br className="sm:block hidden" />
            Begins Here !
          </p>
          <button className="mt-4 px-8 py-3 bg-[#915eff] text-white rounded-md hover:bg-[#7a48e0] transition duration-300 text-lg">
            See AI in Action
          </button>
        </div>
      </div>
      {/* <EarthCanvas /> */}
      {/* <ComputersCanvas /> */}

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
