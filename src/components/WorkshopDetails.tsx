'use client';

import React from 'react';
import { Users, Clock, MonitorPlay, Calendar, Sparkles, CheckCircle2 } from 'lucide-react';

export default function WorkshopInformation() {
    return (
        <section id="workshop-details" className="py-24 px-6 lg:px-8 bg-[#F8F9FA] dark:bg-[#0A0D14] transition-colors duration-300 font-sans">
            <div className="max-w-7xl mx-auto">

                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-20">
                    <p className="text-violet-600 dark:text-violet-400 font-bold tracking-[0.2em] uppercase text-xs mb-4">
                        The Details
                    </p>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
                        Workshop Information
                    </h2>
                </div>

                {/* Main Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">

                    {/* 1. Age Group */}
                    <div className="group relative bg-white dark:bg-[#131620] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none overflow-hidden flex flex-col justify-between min-h-[280px]">
                        <div>
                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Age Group</p>
                            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-none">8–14<span className="text-lg text-gray-500 ml-1">Yrs</span></h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                                Tailored curriculum designed for young minds to grasp complex tech concepts easily.
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 mt-6 group-hover:text-violet-500 transition-colors">
                            <Users className="w-6 h-6" />
                        </div>
                        {/* Signature bottom highlight line */}
                        <div className="absolute bottom-0 left-8 w-12 h-1.5 bg-violet-500 rounded-t-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>

                    {/* 2. Duration */}
                    <div className="group relative bg-white dark:bg-[#131620] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none overflow-hidden flex flex-col justify-between min-h-[280px]">
                        <div>
                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Duration</p>
                            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-none">4<span className="text-lg text-gray-500 ml-1">Weeks</span></h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                                Project-driven modules spread across a month of immersive, hands-on learning.
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 mt-6 group-hover:text-violet-500 transition-colors">
                            <Clock className="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-0 left-8 w-12 h-1.5 bg-violet-500 rounded-t-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>

                    {/* 3. Mode */}
                    <div className="group relative bg-white dark:bg-[#131620] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none overflow-hidden flex flex-col justify-between min-h-[280px]">
                        <div>
                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Mode</p>
                            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-none">Online</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                                Interactive, real-time virtual classrooms ensuring personalized mentorship.
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 mt-6 group-hover:text-violet-500 transition-colors">
                            <MonitorPlay className="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-0 left-8 w-12 h-1.5 bg-violet-500 rounded-t-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>

                    {/* 4. Start Date */}
                    <div className="group relative bg-white dark:bg-[#131620] rounded-3xl p-8 border border-gray-100 dark:border-white/5 hover:border-violet-500 dark:hover:border-violet-500 transition-all duration-300 shadow-sm hover:shadow-md dark:shadow-none overflow-hidden flex flex-col justify-between min-h-[280px]">
                        <div>
                            <p className="text-xs font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest mb-4">Start Date</p>
                            <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white leading-none">15 July</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400 mt-4 leading-relaxed">
                                Kickstart your child's tech journey this summer 2026.
                            </p>
                        </div>
                        <div className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 flex items-center justify-center text-gray-600 dark:text-gray-400 mt-6 group-hover:text-violet-500 transition-colors">
                            <Calendar className="w-6 h-6" />
                        </div>
                        <div className="absolute bottom-0 left-8 w-12 h-1.5 bg-violet-500 rounded-t-full transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                    </div>

                </div>

                {/* Highlighted Pricing & Enrollment Card */}
                <div className="relative rounded-[2rem] p-[2px] bg-gradient-to-r from-violet-600 via-fuchsia-600 to-cyan-500 overflow-hidden shadow-2xl mt-8">
                    <div className="bg-white dark:bg-[#0A0D14] rounded-[calc(2rem-2px)] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 h-full">

                        <div className="space-y-4 text-center md:text-left flex-1">
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-500/10 text-violet-700 dark:text-violet-300 text-xs font-bold tracking-wide border border-violet-200 dark:border-violet-500/20">
                                <Sparkles className="w-3.5 h-3.5" />
                                Admissions Open
                            </div>
                            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
                                ₹2,999 <span className="text-xl text-gray-500 font-medium line-through ml-2">₹5,999</span>
                            </h3>
                            <ul className="flex flex-col sm:flex-row gap-3 sm:gap-6 pt-2">
                                <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-violet-500" /> Hands-on Projects
                                </li>
                                <li className="flex items-center justify-center md:justify-start gap-2 text-sm text-gray-600 dark:text-gray-400 font-medium">
                                    <CheckCircle2 className="w-4 h-4 text-violet-500" /> Certificate Included
                                </li>
                            </ul>
                        </div>

                        <div className="w-full md:w-auto">
                            <button className="w-full md:w-auto px-8 py-4 bg-gray-900 hover:bg-gray-800 dark:bg-white dark:hover:bg-gray-100 text-white dark:text-gray-900 font-bold rounded-full transition-all duration-300 shadow-xl shadow-gray-900/20 dark:shadow-white/10 hover:scale-105">
                                Enroll Student Now
                            </button>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
}