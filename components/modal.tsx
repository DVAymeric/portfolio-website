"use client";

import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/theme-context";
import Image from "next/image";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  tags: ReadonlyArray<string>;
  imageUrl: string;
  competencies: ReadonlyArray<string>;
};

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  title,
  description,
  tags,
  imageUrl,
  competencies,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      onClose();
    }
  };

  if (!isOpen) return null;

  const isDarkTheme = theme === "dark";

  return ReactDOM.createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 flex items-center justify-center z-50 px-4 sm:px-6"
          onClick={handleBackgroundClick}
          style={{
            backgroundColor: isDarkTheme
              ? "rgba(0, 0, 0, 0.75)"
              : "rgba(0, 0, 0, 0.25)",
          }}
        >
          <motion.div
            ref={modalRef}
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 500 }}
            className={`w-full max-w-3xl rounded-2xl overflow-hidden shadow-2xl ${
              isDarkTheme ? "bg-gray-800 text-white" : "bg-white text-gray-800"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col h-full max-h-[90vh]">
              <div className="flex justify-between items-center p-6 border-b border-opacity-20 border-gray-600">
                <h2 className="text-3xl font-bold">{title}</h2>
                <button
                  onClick={onClose}
                  className={`text-3xl ${
                    isDarkTheme
                      ? "text-gray-400 hover:text-gray-200"
                      : "text-gray-600 hover:text-gray-800"
                  } transition-colors`}
                >
                  &times;
                </button>
              </div>
              <div className="flex-grow overflow-y-auto p-6 space-y-6">
                <div className="w-full h-64 relative rounded-lg overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt={`Screenshot of ${title} project`}
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                  />
                </div>
                <p className="text-lg">{description}</p>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Technologies utilisées
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        whileHover={{ scale: 1.05 }}
                        className={`px-3 py-1 text-sm rounded-full ${
                          isDarkTheme
                            ? "bg-gray-700 text-gray-200"
                            : "bg-gray-200 text-gray-800"
                        }`}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">
                    Compétences développées
                  </h3>
                  <ul className="list-disc pl-5 space-y-1">
                    {competencies.map((competency, index) => (
                      <motion.li
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                      >
                        {competency}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

export default Modal;
