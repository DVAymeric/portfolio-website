"use client";

import React from "react";
import { FaPaperPlane } from "react-icons/fa";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { motion } from "framer-motion";

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="group flex items-center justify-center gap-2 h-[3rem] w-[8rem] bg-gray-900 text-white rounded-full outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 dark:bg-white dark:bg-opacity-10 disabled:scale-100 disabled:bg-opacity-65"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Envoyer
          <motion.div
            className="text-xs opacity-70 transition-all"
            whileHover={{ x: 5, y: -5, rotate: -15 }} // Animation au survol
            whileTap={{ x: 100, y: -100, rotate: -45, opacity: 0 }} // Animation au clic
            transition={{ type: "spring", stiffness: 300 }}
          >
            <FaPaperPlane />
          </motion.div>
        </>
      )}
    </button>
  );
}
