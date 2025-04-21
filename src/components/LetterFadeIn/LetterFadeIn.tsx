import React from "react";
import { motion } from "framer-motion";

const LetterFadeIn: React.FC<{ text: string; delay?: number }> = ({ text, delay = 0 }) => {
  const letters = text.split("");

  // Parent variant to delay the entire sequence
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: delay,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.5,
      },
    }),
  };

  return (
    <motion.div
      className="flex"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {letters.map((letter, index) => (
        <motion.span
          key={index}
          variants={letterVariants}
          custom={index}
          className="inline-block"
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  );
};

export default LetterFadeIn;