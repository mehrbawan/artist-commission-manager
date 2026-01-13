"use client";

import Hero from "@/components/landing/Hero";
import CTA from "@/components/landing/CTA";
import Art from "@/components/landing/ArtExamples";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";

const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex flex-col items-center pt-[11vh] gap-10 py-10">
        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Hero />
        </motion.div>

        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Art />
        </motion.div>

        <motion.div
          className="w-full flex justify-center"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <CTA />
        </motion.div>

        <Footer />
      </main>
    </div>
  );
}
