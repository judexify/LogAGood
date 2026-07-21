"use client";

import { motion } from "motion/react";
import { SideNavigationProps } from "../types";
import Logo from "./Logo";
import LogOut from "./LogOut";

const fadeVariants = {
  hidden: { opacity: 0, y: -8 },
  show: { opacity: 1, y: 0 },
};

function SideNavigation({ children }: SideNavigationProps) {
  return (
    <div className="bg-brand-secondary h-full pt-6 px-2 flex flex-col">
      <motion.div variants={fadeVariants} initial="hidden" animate="show">
        <Logo />
      </motion.div>
      <nav>{children}</nav>
      <motion.div
        variants={fadeVariants}
        initial="hidden"
        animate="show"
        className="mt-auto"
      >
        <LogOut />
      </motion.div>
    </div>
  );
}

export default SideNavigation;
