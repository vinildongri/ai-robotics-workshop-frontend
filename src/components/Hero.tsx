'use client';

import React from 'react';
// FIX: Removed Clock and GraduationCap because they were unused
import { Rocket, ArrowRight } from 'lucide-react';

export default function HeroSection() {

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Update URL path without triggering reload or #
            window.history.replaceState(null, '', `/${id}`);
        }
    };

    return (
        <div id="hero" className="flex flex-col min-h-[calc(100vh-80px)] bg-blue-50 md:bg-slate-50">
            {/* Hero Container */}
            <main className="relative flex-grow flex items-center justify-center overflow-hidden">

                {/* Background Image - Hidden on mobile, visible on lg screens and up */}
                <div
                    className="hidden md:block absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                    style={{
                        backgroundImage: "url('/images/hero.png')"
                    }}
                />

                {/* Main Content */}
                <div className="container mx-auto px-6 py-12 md:py-24 z-10 relative flex flex-col lg:flex-row items-center gap-12">

                    {/* Text & CTAs */}
                    <div className="flex-1 w-full max-w-2xl">

                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100/80 text-blue-700 font-semibold text-sm mb-6 border border-blue-200/50 shadow-sm">
                            <Rocket className="w-4 h-4" /> Summer 2026 Admissions Open
                        </div>

                        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight text-slate-900 tracking-tight mb-6">
                            AI & Robotics <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                                Summer Workshop
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed mb-10">
                            A fun 4-week online program for children aged{' '}
                            <strong className="text-indigo-600 font-bold">8–14 years</strong>{' '}
                            to explore Artificial Intelligence, Robotics, Coding and Problem Solving.
                        </p>
                        <p className="text-lg md:text-xl text-slate-600 max-w-xl font-medium leading-relaxed mb-10">
                            Unlock a world of innovation where your child transitions from a consumer of technology to a creator. We provide an encouraging, expert-led environment to foster curiosity and build a strong foundation in STEM.
                        </p>

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 mb-12"> {/* Added bottom margin for spacing from the new boxes */}
                            <button
                                onClick={() => scrollToSection('registration')}
                                className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-xl shadow-blue-600/20 hover:shadow-blue-600/40 group">
                                Enroll Now
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                            <button
                                onClick={() => scrollToSection('workshop-details')}
                                className="flex items-center justify-center gap-2 bg-white/80 backdrop-blur-sm border-2 border-slate-200 text-slate-700 hover:border-blue-600 hover:text-blue-600 px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 group">
                                View Details
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>

                    </div>

                    {/* Image Spacer / Placeholder for Desktop Layout */}
                    <div className="hidden lg:block flex-1 w-full h-[600px]"></div>
                </div>
            </main>
        </div>
    );
}