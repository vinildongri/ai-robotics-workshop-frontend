import React from "react";
// import Link from "next/link";
import {
    CheckCircle,
    BrainCircuit,
    Bot,
    Code2,
    Lightbulb,
    Sparkles,
    Rocket,
    Zap
} from "lucide-react";

// Helper for Section Headers
const SectionHeader = ({ title, subtitle }: { title: string; subtitle: string }) => (
    <div className="col-span-1 md:col-span-3 flex flex-col items-center justify-center text-center mt-20 mb-12">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#06b6d4] mb-2">{subtitle}</span>
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white">
            {title}
        </h2>
    </div>
);

const FutureAcademyOutcomes = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Update URL path without triggering reload or #
            window.history.replaceState(null, '', `/${id}`);
        }
    };
    return (
        <div id="learning-outcomes" className="min-h-screen bg-slate-50 dark:bg-[#1c1f26] font-sans pb-20">

            {/* ================= SECTION 1: HERO ================= */}
            <div className="w-full bg-[#111318] text-white relative overflow-hidden border-b border-slate-800">
                <div className="max-w-6xl mx-auto px-4 md:px-8 py-20 md:py-24 flex flex-col md:flex-row justify-between items-center relative z-10">

                    <div className="max-w-2xl text-center md:text-left">
                        <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Future Academy</span>
                            <div className="h-px w-12 bg-slate-700"></div>
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                            What Your Child Will
                            <br /><span className="text-[#06b6d4]">Learn & Achieve
                            </span>
                        </h1>
                        <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-lg mx-auto md:mx-0">
                            Our curriculum is designed to transform curiosity into capability, equipping students with future-ready skills in a fun environment.
                        </p>

                        <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
                            <button
                                onClick={() => scrollToSection('registration')}
                                className="px-8 py-3 bg-[#06b6d4] text-white text-xs font-bold rounded-full uppercase tracking-wider hover:bg-[#0891b2] transition-all transform hover:scale-105 shadow-[0_0_20px_rgba(6,182,212,0.4)] block w-fit"
                            >
                                START LEARNING
                            </button>
                        </div>
                    </div>

                    {/* Visual: Brain & Sparkles */}
                    <div className="hidden md:block relative z-10">
                        <div className="w-64 h-64 border border-slate-700 rounded-full flex items-center justify-center animate-[spin_20s_linear_infinite]">
                            <div className="w-40 h-40 border border-slate-600 rounded-full flex items-center justify-center animate-[spin_15s_linear_infinite_reverse]">
                                <BrainCircuit size={48} className="text-[#06b6d4]" />
                            </div>
                        </div>
                        <div className="absolute top-0 right-10 bg-[#06b6d4] p-3 rounded-full animate-bounce">
                            <Sparkles size={20} className="text-white fill-white" />
                        </div>
                    </div>
                </div>

                {/* Background Glow */}
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#06b6d4] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
            </div>


            {/* ================= SECTION 2: CORE OUTCOMES ================= */}
            <div className="max-w-6xl mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                <SectionHeader subtitle="Core Curriculum" title="What They Will Achieve" />

                {/* Outcome 1: AI Fundamentals (Text Focus) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col justify-center h-[360px] group relative overflow-hidden">
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-4 tracking-widest flex items-center gap-2">
                        <BrainCircuit size={14} className="text-[#06b6d4]" /> Foundation
                    </span>
                    <h2 className="text-4xl font-bold text-slate-900 dark:text-white leading-tight mb-6">
                        AI <br /> Fundamentals.
                    </h2>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Understand the basics of artificial intelligence and how smart algorithms learn from data.</p>
                    <div className="w-16 h-2 bg-[#06b6d4] rounded-full mt-auto"></div>
                </div>

                {/* Outcome 2: Robotics Basics (Visual Focus - CSS Robot) */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-between h-[360px] relative overflow-hidden group">
                    <div className="w-full flex justify-between items-start z-10">
                        <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">Hardware</span>
                        <Bot size={16} className="text-[#06b6d4]" />
                    </div>
                    <div className="text-center z-10 mt-2">
                        <h3 className="text-xl font-bold text-slate-900 dark:text-white">Robotics Basics</h3>
                        <p className="text-sm text-slate-500 mt-2 px-4">Build, wire, and program simple robots.</p>
                    </div>

                    {/* CSS Robot Illustration */}
                    <div className="relative flex flex-col items-center justify-center scale-110 group-hover:scale-125 transition-transform duration-500 mt-4">
                        <div className="w-2 h-2 bg-[#06b6d4] rounded-full mb-1 animate-pulse"></div>
                        <div className="w-1 h-4 bg-slate-500 mb-[-2px] z-0"></div>
                        <div className="w-20 h-14 bg-[#06b6d4] rounded-xl flex items-center justify-evenly shadow-lg relative z-10">
                            <div className="w-5 h-3 bg-white rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#111318] rounded-full"></div></div>
                            <div className="w-5 h-3 bg-white rounded-full flex items-center justify-center"><div className="w-1.5 h-1.5 bg-[#111318] rounded-full"></div></div>
                        </div>
                    </div>
                </div>

                {/* Outcome 3: Coding Skills (Icon/Tools Focus) */}
                <div className="bg-[#f4f4f5] dark:bg-[#23262f] border border-transparent dark:border-slate-700 transition-all duration-300 rounded-[2rem] p-8 flex flex-col items-center justify-center h-[360px] group relative overflow-hidden">
                    <div className="absolute top-8 left-8 text-xs font-bold text-slate-400 uppercase tracking-widest">Software</div>
                    <div className="text-center z-10 mb-8">
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">Coding Skills</h3>
                        <p className="text-sm text-slate-500 mt-2 max-w-[200px]">Develop strong logical thinking through block-based and text programming.</p>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#06b6d4] transition-colors"><Code2 size={24} /></div>
                        <div className="p-4 bg-white dark:bg-[#111318] rounded-2xl shadow-lg text-slate-400 group-hover:text-[#06b6d4] transition-colors"><Zap size={24} /></div>
                    </div>
                </div>


                {/* ================= SECTION 3: ADVANCED SKILLS ================= */}
                <SectionHeader subtitle="Skill Progression" title="Applied Knowledge" />

                {/* Outcome 4: Problem Solving */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-800 shadow-sm hover:border-[#06b6d4] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px]">
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-[#06b6d4]">
                        <Lightbulb size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Methodology</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Problem Solving</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
                        Tackle real-world challenges by breaking complex problems down into simple, manageable steps.
                    </p>
                    <ul className="space-y-4 mt-auto">
                        {["Algorithmic Thinking", "Debugging techniques", "Patience and persistence"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-400">
                                <CheckCircle size={16} className="text-[#06b6d4]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Outcome 5: Creative Thinking */}
                <div className="bg-white dark:bg-[#111318] border border-transparent dark:border-slate-700 shadow-xl hover:border-[#06b6d4] transition-all duration-300 rounded-[2rem] p-8 flex flex-col h-[380px] relative overflow-hidden">
                    <div className="absolute top-0 right-0 bg-[#06b6d4] text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl uppercase">Essential</div>
                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-[#06b6d4]">
                        <Sparkles size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-slate-400 mb-2 tracking-widest">Innovation</span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">Creative Thinking</h3>
                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-8">
                        Design innovative solutions, think outside the box, and bring unique ideas to life.
                    </p>
                    <ul className="space-y-4 mt-auto">
                        {["Brainstorming frameworks", "Design thinking basics", "Prototyping ideas"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-600 dark:text-slate-300">
                                <CheckCircle size={16} className="text-[#06b6d4]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Outcome 6: Build Real Projects */}
                <div className="bg-[#111318] dark:bg-[#1c1f26] border border-slate-800 dark:border-slate-700 rounded-[2rem] p-8 flex flex-col h-[380px] shadow-2xl text-white relative overflow-hidden hover:border-[#06b6d4] transition-all">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#06b6d4] to-blue-500"></div>
                    <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 text-[#06b6d4]">
                        <Rocket size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-bold text-[#06b6d4] mb-2 tracking-widest">Execution</span>
                    <h3 className="text-2xl font-bold text-white mb-4">Build Real Projects</h3>
                    <p className="text-sm text-slate-400 mb-8">
                        Apply new skills immediately by creating interactive games, smart apps, and moving robots.
                    </p>
                    <ul className="space-y-4 mt-auto">
                        {["Personal Project Portfolio", "Interactive Games", "Functional Smart Bots"].map((item, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm font-medium text-slate-300">
                                <CheckCircle size={16} className="text-[#06b6d4]" /> {item}
                            </li>
                        ))}
                    </ul>
                </div>



            </div>
        </div>
    );
}

export default FutureAcademyOutcomes;