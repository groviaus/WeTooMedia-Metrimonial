"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export default function Accordion({ faqs }) {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {faqs.map((faq, idx) => (
        <div
          key={idx}
          className="bg-white/90 border border-pink-100 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 overflow-hidden"
        >
          <button
            className="w-full flex justify-between items-center px-6 pt-5 text-left font-semibold text-gray-900 text-base sm:text-lg focus:outline-none  focus:ring-pink-2 group"
            onClick={() => handleToggle(idx)}
            aria-expanded={openIndex === idx}
            aria-controls={`faq-panel-${idx}`}
            id={`faq-header-${idx}`}
          >
            <span>{faq.question}</span>
            <ChevronDown
              className={`ml-4 h-5 w-5 transition-transform duration-300 ${
                openIndex === idx
                  ? "rotate-180 text-pink-500"
                  : "text-gray-400 group-hover:text-pink-400"
              }`}
              aria-hidden="true"
            />
          </button>
          <div
            id={`faq-panel-${idx}`}
            role="region"
            aria-labelledby={`faq-header-${idx}`}
            className={`px-6 pb-5 text-gray-600 text-sm sm:text-base transition-all duration-300 ${
              openIndex === idx ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
            }`}
            style={{ overflow: "hidden" }}
          >
            {openIndex === idx && <div>{faq.answer}</div>}
          </div>
        </div>
      ))}
    </div>
  );
}
