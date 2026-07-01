"use client";
import React from "react";
import { motion } from "framer-motion";

export function AnimatedTitleFM({ open }: { open: boolean }) {
  if (!open) return null;
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
      }}
    >
      <span style={{ color: "white", fontSize: "1.5rem", fontWeight: 500, fontFamily: "Inter, sans-serif" }}>
        The operating system for highway enforcement
      </span>
      <span style={{ color: "#7b61ff", fontSize: "1.5rem", fontWeight: 500, fontFamily: "Inter, sans-serif", letterSpacing: "0.15em" }}>
        BHAARNETRA
      </span>
    </motion.div>
  );
}
