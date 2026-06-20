'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqsData: FAQItem[] = [
    {
        id: 1,
        question: "Do students need prior coding experience?",
        answer: "No. The workshop is completely beginner-friendly. We start from the absolute basics and guide them step-by-step."
    },
    {
        id: 2,
        question: "Is the workshop completely online?",
        answer: "Yes. All sessions are conducted 100% online through interactive, live virtual classrooms."
    },
    {
        id: 3,
        question: "Will students receive a certificate?",
        answer: "Yes. A verified Certificate of Completion is provided to every student upon finishing the workshop."
    },
    {
        id: 4,
        question: "Are recordings available?",
        answer: "Yes. Session recordings are shared after each class so students can review the material or catch up if they miss a day."
    },
    {
        id: 5,
        question: "What software is required?",
        answer: "No heavy software is needed! Only a laptop/computer with a standard web browser and a stable internet connection."
    }
];

export default function FAQSection() {
    // State to track which accordion is currently open
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section
            id="faq"
            className="py-24 px-6 lg:px-8 bg-[#F8F9FA] dark:bg-[#0A0D14] transition-colors duration-300 font-sans"
        >
            <div className="container mx-auto max-w-4xl">

                {/* Section Header - Matching Previous Yandu Architecture */}
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <p className="text-violet-600 dark:text-violet-500 font-extrabold tracking-[0.2em] uppercase text-[10px] mb-4">
                        Got Questions?
                    </p>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 dark:text-white mb-6 tracking-tight">
                        Frequently Asked Questions.
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-medium leading-relaxed max-w-2xl mx-auto">
                        Everything you need to know about the workshop, scheduling, and what your child will need to succeed.
                    </p>
                </div>

                {/* FAQ Accordion Container */}
                <div className="space-y-4">
                    {faqsData.map((faq, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={faq.id}
                                className={`group relative bg-white dark:bg-[#131620] rounded-[1.5rem] border transition-all duration-300 overflow-hidden
                                    ${isOpen ? 'border-gray-200 dark:border-[#2A2E40] shadow-lg' : 'border-gray-100 dark:border-[#1F2332] shadow-sm hover:shadow-md'}`}
                            >
                                {/* Active State Left Highlight Pill */}
                                <div className={`absolute left-0 top-0 bottom-0 w-1.5 bg-violet-500 transition-all duration-300 ease-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}></div>

                                <button
                                    onClick={() => toggleAccordion(index)}
                                    className="w-full flex items-center justify-between p-6 md:p-8 text-left focus:outline-none relative z-10"
                                    aria-expanded={isOpen}
                                >
                                    <span className={`text-xl font-extrabold pr-6 transition-colors duration-300 tracking-tight
                                        ${isOpen ? 'text-gray-900 dark:text-white' : 'text-gray-700 dark:text-gray-300 group-hover:text-violet-500 dark:group-hover:text-violet-400'}`}
                                    >
                                        {faq.question}
                                    </span>

                                    <div className={`flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-xl transition-all duration-300 
                                        ${isOpen ? 'bg-violet-50 dark:bg-violet-500/10 text-violet-600 dark:text-violet-400 rotate-180' : 'bg-gray-50 dark:bg-white/5 text-gray-400 group-hover:bg-violet-50 dark:group-hover:bg-violet-500/10 group-hover:text-violet-500 rotate-0'}`}
                                    >
                                        <ChevronDown className="w-5 h-5 stroke-[2.5]" />
                                    </div>
                                </button>

                                {/* Animated Content Panel using Grid trick */}
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
                                >
                                    <div className="overflow-hidden">
                                        <p className="p-6 md:p-8 pt-0 pl-6 md:pl-8 text-base text-gray-500 dark:text-gray-400 leading-relaxed font-medium">
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>

            </div>
        </section>
    );
}