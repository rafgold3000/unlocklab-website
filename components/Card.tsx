"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      transition={{ duration: 0.2 }}
      className={`bg-background-secondary border border-gray-800 rounded-xl p-6 ${
        hover ? "hover:border-primary/50 hover:shadow-xl hover:shadow-primary/10" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}
