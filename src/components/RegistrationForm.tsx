'use client';

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Loader2, CheckCircle2, Rocket, ShieldCheck, Phone, User, ArrowRight, Calendar, MessageSquare, Mail } from 'lucide-react';

// Replaced Zod schema with a simple standard TypeScript Interface
interface IFormInput {
    name: string;
    age: number;
    email: string;
    phone: string;
    message?: string;
}

export default function RegistrationForm() {
    const [isSuccess, setIsSuccess] = useState(false);
    const [serverError, setServerError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: { isSubmitting } // Removed 'errors' since we aren't tracking them on the frontend
    } = useForm<IFormInput>();

    const onSubmit: SubmitHandler<IFormInput> = async (data) => {
        setServerError(null);
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/enquiry`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                setIsSuccess(true);
                reset();
                setTimeout(() => setIsSuccess(false), 8000);
            } else {
                // This is where your backend Mongoose errors will be displayed!
                setServerError(result.message || "Failed to submit form. Please try again.");
            }
        } catch (error) {
            console.error("Submission error:", error);
            setServerError("Could not connect to the server. Ensure the backend is running.");
        }
    };

    return (
        <section
            id="registration"
            className="py-24 px-4 sm:px-6 lg:px-8 bg-[#F8F9FA] dark:bg-[#0A0D14] transition-colors duration-300 relative overflow-hidden font-sans"
        >
            <div className="container mx-auto max-w-6xl relative z-10">

                <div className="bg-white dark:bg-[#131620] rounded-[2rem] border border-gray-100 dark:border-[#1F2332] shadow-2xl dark:shadow-none overflow-hidden flex flex-col lg:flex-row">

                    {/* Left Column: Branding */}
                    <div className="lg:w-5/12 bg-gradient-to-br from-violet-900 via-[#1A1525] to-[#0A0D14] p-10 md:p-14 lg:p-16 text-white flex flex-col justify-between relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
                        <div className="absolute bottom-0 left-0 w-72 h-72 bg-fuchsia-500/10 rounded-full blur-[80px] translate-y-1/3 -translate-x-1/3 pointer-events-none"></div>

                        <div className="relative z-10">
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-md rounded-full text-xs font-bold tracking-widest uppercase border border-white/10 mb-8 text-violet-300">
                                <Rocket className="w-4 h-4" /> Limited Seats
                            </div>
                            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight leading-[1.1]">
                                Secure Your <br /> Spot Today.
                            </h2>
                            <p className="text-gray-400 text-lg mb-10 leading-relaxed font-medium max-w-sm">
                                Join the next generation of innovators. Fill out the form and our admissions team will contact you shortly.
                            </p>
                        </div>

                        <div className="relative z-10 space-y-5 border-t border-white/10 pt-8">
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center border border-emerald-500/20">
                                    <ShieldCheck className="w-5 h-5 text-emerald-400" />
                                </div>
                                <span className="font-bold text-gray-300 tracking-wide">100% Secure Registration</span>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-violet-500/10 flex items-center justify-center border border-violet-500/20">
                                    <CheckCircle2 className="w-5 h-5 text-violet-400" />
                                </div>
                                <span className="font-bold text-gray-300 tracking-wide">Instant Confirmation</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Form */}
                    <div className="lg:w-7/12 p-10 md:p-14 lg:p-16 flex items-center bg-white dark:bg-[#131620]">
                        <div className="w-full max-w-md mx-auto">

                            {isSuccess ? (
                                <div className="text-center py-10 animate-fade-in" role="alert" aria-live="polite">
                                    <div className="w-20 h-20 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/20 text-emerald-600 dark:text-emerald-400 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-[0_0_30px_rgba(52,211,153,0.2)]">
                                        <CheckCircle2 className="w-10 h-10" />
                                    </div>
                                    <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4 tracking-tight">Application Received!</h3>
                                    <p className="text-gray-500 dark:text-gray-400 font-medium leading-relaxed mb-8">
                                        Thank you for enrolling. Our team will contact you shortly with the next steps.
                                    </p>
                                    <button
                                        onClick={() => setIsSuccess(false)}
                                        className="text-violet-600 dark:text-violet-400 font-bold hover:text-violet-700 dark:hover:text-violet-300 transition-colors flex items-center gap-2 mx-auto group"
                                    >
                                        Submit another response
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
                                    <div className="mb-10">
                                        <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-2 tracking-tight">Enroll Now</h3>
                                        <p className="text-gray-500 dark:text-gray-400 font-medium">Please fill in the student details to continue.</p>
                                    </div>

                                    {/* Mongoose Backend Errors Display Here */}
                                    {serverError && (
                                        <div role="alert" className="p-4 mb-6 text-sm text-red-500 bg-red-50 dark:bg-red-500/10 border border-red-200 dark:border-red-500/20 rounded-xl font-medium">
                                            {serverError}
                                        </div>
                                    )}

                                    {/* Name Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="name" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                            <User className="w-3.5 h-3.5" /> Student Name
                                        </label>
                                        <input
                                            id="name"
                                            type="text"
                                            placeholder="John Doe"
                                            className="w-full px-5 py-4 rounded-xl border bg-gray-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-medium focus:ring-0 focus:outline-none transition-all duration-300 border-gray-200 dark:border-[#2A2E40] focus:border-violet-500"
                                            {...register("name")}
                                        />
                                    </div>

                                    {/* Email Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="email" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                            <Mail className="w-3.5 h-3.5" /> Email Address
                                        </label>
                                        <input
                                            id="email"
                                            type="email"
                                            placeholder="john@example.com"
                                            className="w-full px-5 py-4 rounded-xl border bg-gray-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-medium focus:ring-0 focus:outline-none transition-all duration-300 border-gray-200 dark:border-[#2A2E40] focus:border-violet-500"
                                            {...register("email")}
                                        />
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Age Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="age" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                <Calendar className="w-3.5 h-3.5" /> Age
                                            </label>
                                            <input
                                                id="age"
                                                type="number"
                                                placeholder="e.g. 12"
                                                className="w-full px-5 py-4 rounded-xl border bg-gray-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-medium focus:ring-0 focus:outline-none transition-all duration-300 border-gray-200 dark:border-[#2A2E40] focus:border-violet-500"
                                                {...register("age", { valueAsNumber: true })}
                                            />
                                        </div>

                                        {/* Phone Input */}
                                        <div className="space-y-2">
                                            <label htmlFor="phone" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                                <Phone className="w-3.5 h-3.5" /> Phone
                                            </label>
                                            <input
                                                id="phone"
                                                type="tel"
                                                placeholder="9876543210"
                                                className="w-full px-5 py-4 rounded-xl border bg-gray-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-medium focus:ring-0 focus:outline-none transition-all duration-300 border-gray-200 dark:border-[#2A2E40] focus:border-violet-500"
                                                {...register("phone")}
                                            />
                                        </div>
                                    </div>

                                    {/* Message Input */}
                                    <div className="space-y-2">
                                        <label htmlFor="message" className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-widest flex items-center gap-2">
                                            <MessageSquare className="w-3.5 h-3.5" /> Questions / Message
                                        </label>
                                        <textarea
                                            id="message"
                                            placeholder="Any questions about the workshop?"
                                            rows={3}
                                            className="w-full px-5 py-4 rounded-xl border bg-gray-50 dark:bg-[#0A0D14] text-gray-900 dark:text-white font-medium focus:ring-0 focus:outline-none transition-all duration-300 resize-none border-gray-200 dark:border-[#2A2E40] focus:border-violet-500"
                                            {...register("message")}
                                        />
                                    </div>

                                    {/* Submit Button */}
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-violet-600 hover:bg-violet-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-3 group mt-8"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <Loader2 className="w-5 h-5 animate-spin" />
                                                Processing...
                                            </>
                                        ) : (
                                            <>
                                                Complete Registration
                                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}