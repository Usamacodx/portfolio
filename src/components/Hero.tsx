"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { FaReact, FaNodeJs, FaWordpress, FaShieldAlt } from "react-icons/fa";

const letterContainer = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const crazyLetterAnim = {
  initial: {
    opacity: 0,
    scale: 5,
    y: -100,
    x: Math.random() * 1000 - 500,
    rotate: Math.random() * 360,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    x: 0,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
      duration: 1,
    },
  },
};

const nameLetterAnim = {
  initial: {
    opacity: 0,
    scale: 0,
    y: 100,
    rotateX: 180,
  },
  animate: {
    opacity: 1,
    scale: 1,
    y: 0,
    rotateX: 0,
    transition: {
      type: "spring",
      damping: 8,
      stiffness: 100,
    },
  },
};

const roleAnimation = {
  initial: { 
    opacity: 0,
    x: -100,
    scale: 0.5,
    rotate: -20,
  },
  animate: { 
    opacity: 1,
    x: 0,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

const floatingAnimation = {
  animate: {
    y: [-5, 5, -5],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const particleContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const particle = {
  initial: { opacity: 0, scale: 0 },
  animate: {
    opacity: [0, 1, 0],
    scale: [0, 1, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const techIconContainer = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 1,
    },
  },
};

const techIcon = {
  initial: { opacity: 0, scale: 0, rotate: -180 },
  animate: {
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      damping: 12,
      stiffness: 100,
    },
  },
};

export default function Hero() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgroundRef.current) {
      gsap.to(backgroundRef.current, {
        backgroundPosition: "100% 100%",
        duration: 20,
        repeat: -1,
        ease: "none",
      });
    }

    // Create particles
    if (particlesRef.current) {
      const particles = Array.from({ length: 50 }, (_, i) => {
        const particle = document.createElement("div");
        particle.className = "absolute w-1 h-1 bg-blue-400/20 dark:bg-blue-200/20 rounded-full";
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particlesRef.current?.appendChild(particle);
        return particle;
      });

      particles.forEach((particle) => {
        gsap.to(particle, {
          x: Math.random() * 200 - 100,
          y: Math.random() * 200 - 100,
          duration: Math.random() * 5 + 5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      });
    }
  }, []);

  const greeting = "Hi, I am".split("");
  const name = "M Usama".split("");

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden perspective-1000">
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-100 dark:from-gray-900 dark:via-indigo-950 dark:to-purple-950 bg-[length:400%_400%]"
      />
      
      <div ref={particlesRef} className="absolute inset-0" />
      
      <div className="relative z-10 text-center px-4">
        <motion.div
          variants={techIconContainer}
          initial="initial"
          animate="animate"
          className="absolute top-0 left-0 w-full h-full pointer-events-none"
        >
          <motion.div variants={techIcon} className="absolute top-1/4 left-1/4">
            <FaReact className="text-4xl text-blue-400/30 dark:text-blue-500/30" />
          </motion.div>
          <motion.div variants={techIcon} className="absolute top-1/3 right-1/4">
            <FaNodeJs className="text-4xl text-green-400/30 dark:text-green-500/30" />
          </motion.div>
          <motion.div variants={techIcon} className="absolute bottom-1/4 left-1/3">
            <FaWordpress className="text-4xl text-blue-400/30 dark:text-blue-500/30" />
          </motion.div>
          <motion.div variants={techIcon} className="absolute bottom-1/3 right-1/3">
            <FaShieldAlt className="text-4xl text-red-400/30 dark:text-red-500/30" />
          </motion.div>
        </motion.div>

        <div className="text-4xl md:text-6xl font-bold mb-6 overflow-visible">
          <motion.div
            variants={letterContainer}
            initial="initial"
            animate="animate"
            className="flex items-center justify-center gap-[0.2em] mb-4 perspective-1000"
          >
            {greeting.map((letter, index) => (
              <motion.span
                key={index}
                variants={crazyLetterAnim}
                animate={{
                  ...crazyLetterAnim.animate,
                  ...floatingAnimation.animate,
                }}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 text-transparent bg-clip-text inline-block transform-style-3d"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
          <motion.div
            variants={letterContainer}
            initial="initial"
            animate="animate"
            className="mt-2 flex items-center justify-center gap-[0.1em] perspective-1000"
          >
            {name.map((letter, index) => (
              <motion.span
                key={index}
                variants={nameLetterAnim}
                className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 text-transparent bg-clip-text inline-block transform-style-3d"
              >
                {letter === " " ? "\u00A0" : letter}
              </motion.span>
            ))}
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 1.5 }}
          className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 flex flex-wrap justify-center items-center gap-2"
        >
          <motion.span
            variants={roleAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 1.8 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text"
          >
            Full Stack Developer
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2 }}
            className="inline-block"
          >
            •
          </motion.span>
          <motion.span
            variants={roleAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.2 }}
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text"
          >
            Wordpress Specialist
          </motion.span>
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ delay: 2.4 }}
            className="inline-block"
          >
            •
          </motion.span>
          <motion.span
            variants={roleAnimation}
            initial="initial"
            animate="animate"
            transition={{ delay: 2.6 }}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 text-transparent bg-clip-text"
          >
            Penetration Tester
          </motion.span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          className="flex justify-center gap-4"
        >
          <motion.a
            whileHover={{ 
              scale: 1.1,
              rotate: 5,
              boxShadow: "0 10px 20px rgba(0,0,0,0.2)"
            }}
            whileTap={{ scale: 0.9 }}
            href="#projects"
            className="px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all transform-gpu"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ 
              scale: 1.1,
              rotate: -5,
              boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
            }}
            whileTap={{ scale: 0.9 }}
            href="#contact"
            className="px-6 py-3 border-2 border-blue-600 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all transform-gpu"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 3.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div 
          animate={floatingAnimation.animate}
          className="text-4xl text-blue-600 dark:text-blue-400"
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
} 