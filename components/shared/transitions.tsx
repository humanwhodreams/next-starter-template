"use client";

import * as React from "react";

import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export function Transition({ children }: Props) {
  return (
    <motion.div
      initial={{ z: 10, opacity: 0 }}
      animate={{ z: 0, opacity: 1 }}
      transition={{ ease: "easeOut", duration: 0.55 }}
    >
      {children}
    </motion.div>
  );
}
