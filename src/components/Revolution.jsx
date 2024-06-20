"use client";
import { SectionWrapper } from "../hoc";
import { motion } from "framer-motion";
import { textVariant, fadeIn } from "../utils/motion";
import { styles } from "../app/style";
import { piechart } from '../assets/index'

const Revolution = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>Change in The Revolution.</h2>
        <p className={styles.sectionSubText}>
          The future is now! AI serves as the central technology catalyst & has
          reached a tipping point, but most organisations aren’t ready for it.
        </p>
      </motion.div>

      <div className="w-full h-full flex items-between justify-center">
        <div className="w-[30%] h-full">
          <motion.div
            variants={fadeIn("right", "spring", 0.7, 1.5)}
            className="mt-[80px] h-[100px] w-[100%] border-4 border-gray-900 rounded-t-[20px] flex justify-center items-center text-center sm:text-[16px] text-[12px]"
          >
            2 in 3 occupations could be partially automated by AI.
          </motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 1, 1.5)}
            className="h-[100px] w-[100%] border-4 border-gray-900 flex justify-center items-center text-center sm:text-[16px] text-[12px]"
          >
            5 days' time it took for chatgpt to reach 100 milllion users.
          </motion.div>
          <motion.div
            variants={fadeIn("right", "spring", 1.3, 1.5)}
            className="h-[100px] w-[100%] border-4 border-gray-900 flex justify-center items-center text-center sm:text-[16px] text-[12px]"
          >
            2 in 3 occupations could be partially automated by AI.
          </motion.div>
          <motion.div
            variants={fadeIn("left", "spring", 1.6, 1.5)}
            className="h-[100px] w-[100%] border-4 border-gray-900 rounded-b-[20px] flex justify-center items-center text-center sm:text-[16px] text-[12px]"
          >
            2 in 3 occupations could be partially automated by AI.
          </motion.div>
        </div>
        <div className="w-[70%] h-full flex justify-center items-center mt-[30px]">
            <motion.div variants={fadeIn("left", "spring", 1.8, 1.5)} className="border-[10px] border-gray-900 rounded-[20px] w-[90%] h-[90%]">
                <img src={piechart.src} className="w-full h-full rounded-[10px]"></img>
            </motion.div>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Revolution, "revolution");
