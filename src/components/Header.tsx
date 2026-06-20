'use client';

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeProvider';
import { Sun, Moon, Menu, X, Bot } from 'lucide-react'; // Added X icon

export default function Header() {
    const { theme, toggleTheme } = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            // Update URL path without triggering reload or #
            window.history.replaceState(null, '', `/${id}`);
        }
    };

    // Helper to scroll and close the mobile menu at the same time
    const handleNavClick = (id: string) => {
        scrollToSection(id);
        setIsMobileMenuOpen(false);
    };

    return (
        <nav className="w-full bg-white/80 dark:bg-gray-950/80 backdrop-blur-md sticky top-0 z-50 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">

                {/* Logo */}
                <div
                    className="flex items-center gap-2 cursor-pointer"
                    onClick={() => scrollToSection('hero')}
                >
                    <Bot className="w-8 h-8 text-blue-600 dark:text-blue-400" />
                    <span className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        <span className="text-blue-600 dark:text-blue-400">KID</span>ROVE
                    </span>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8 font-medium text-gray-700 dark:text-gray-300">
                    <button onClick={() => scrollToSection('hero')} className="hover:text-blue-600 dark:hover:text-blue-400 transition">Home</button>
                    <button onClick={() => scrollToSection('workshop-details')} className="hover:text-blue-600 dark:hover:text-blue-400 transition">Details</button>
                    <button onClick={() => scrollToSection('learning-outcomes')} className="hover:text-blue-600 dark:hover:text-blue-400 transition">What to Expect</button>
                    <button onClick={() => scrollToSection('faq')} className="hover:text-blue-600 dark:hover:text-blue-400 transition">FAQ</button>
                    <button onClick={() => scrollToSection('registration')} className="hover:text-blue-600 dark:hover:text-blue-400 transition">Contact</button>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={toggleTheme}
                        className="p-2 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-800 transition"
                        aria-label="Toggle Dark Mode"
                    >
                        {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                    </button>
                    <button
                        onClick={() => scrollToSection('registration')}
                        className="hidden md:block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2.5 rounded-full font-semibold transition shadow-lg shadow-blue-500/30 cursor-pointer"
                    >
                        Enroll Now
                    </button>

                    {/* Mobile Menu Toggle Button */}
                    <button
                        className="md:hidden p-2 text-gray-700 dark:text-gray-300"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

            </div>

            {/* Mobile Navigation Dropdown */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-lg py-4 px-6 flex flex-col gap-4 transition-colors duration-300">
                    <button onClick={() => handleNavClick('hero')} className="text-left font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</button>
                    <button onClick={() => handleNavClick('workshop-details')} className="text-left font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Details</button>
                    <button onClick={() => handleNavClick('learning-outcomes')} className="text-left font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">What to Expect</button>
                    <button onClick={() => handleNavClick('faq')} className="text-left font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">FAQ</button>
                    <button onClick={() => handleNavClick('registration')} className="text-left font-medium text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</button>
                    <button
                        onClick={() => handleNavClick('registration')}
                        className="mt-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition text-center shadow-md"
                    >
                        Enroll Now
                    </button>
                </div>
            )}
        </nav>
    );
}