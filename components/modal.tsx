"use client";

import React from "react";
import ReactDOM from "react-dom";

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
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div
      className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50"
      onClick={onClose}
    >
      <div
        className="bg-white p-8 rounded-lg shadow-lg max-w-[60%] w-full h-[60%] relative overflow-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-2xl"
          onClick={onClose}
        >
          ×
        </button>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <img
          src={imageUrl}
          alt={`Screenshot of ${title} project`}
          className="w-full h-auto mb-4 rounded-lg"
        />
        <p className="mb-4">{description}</p>
        <ul className="mb-4 flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <li
              key={index}
              className="px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white bg-black/[0.7] rounded-full"
            >
              {tag}
            </li>
          ))}
        </ul>
        <ul className="list-disc pl-5">
          {competencies.map((competency, index) => (
            <li key={index}>{competency}</li>
          ))}
        </ul>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
