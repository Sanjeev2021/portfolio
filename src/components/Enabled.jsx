"use client"
import { SectionWrapper } from "../hoc/index";
import { motion } from "framer-motion";
import { textVariant, fadeIn, zoomIn } from "../utils/motion";
import { styles } from "../app/style";
import { stages } from '../assets/index'

const Enabled = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={styles.sectionHeadText}>How do you make your product <span className="inline-block">ai-enabled?</span></h2>
        <p className={styles.sectionSubText}>
        At swabhav.ai, we combine exceptional subject matter experts, in-depth industry insights, business-technology consulting, talent and ai solutions, platform and product partnerships to achieve value creation.
        </p>
        <p className={`${styles.sectionSubText} mt-[20px]`}>
        Each stage of our model marks a vital step in integrating AI into an organization's core operations and strategies, setting the foundation for genuine transformative results.
        </p>
      </motion.div>

      <motion.div variants={fadeIn("up", "spring", 1, 1.5)}>
        <div className="w-full h-full flex justify-center items-center mt-[50px]">
            <div className="w-[60%] h-[60%] border-[10px] border-gray-900 rounded-[20px] flex justify-center items-center">
                <img src={stages.src} className="w-full h-full rounded-[10px]" />
            </div>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(Enabled, "enabled");
