"use client";
import React from "react";
import { Tilt } from "react-next-tilt";
import { motion } from "framer-motion";

import { styles } from "../app/style";
import { services } from "../constants/index";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc/";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt>
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card border border-transparent"
        style={{ borderColor: '#E6892A' }}
      >
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col border border-transparent"
        >
          <img
            src={icon.src}
            alt={title}
            className="w-16 h-16 object-contain border border-transparent"
          />
          <h3 className="text-white text-[20px] font-bold text-center border border-transparent">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>
          Transform your workforce to achieve AI readiness.
        </h2>
        <p className={styles.sectionSubText}></p>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      ></motion.p>

      <div className="mt-20 grid grid-cols-12 gap-10 border border-transparent">
        {services.map((service, index) => (
          <div
            key={service.title}
            className="col-span-12 sm:col-span-6 lg:col-span-4 border border-transparent"
          >
            <ServiceCard
              index={index}
              title={service.title}
              icon={service.icon}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
