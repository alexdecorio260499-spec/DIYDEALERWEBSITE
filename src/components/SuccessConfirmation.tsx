import React from 'react';

interface SuccessConfirmationProps {
    onNavigate: (page: 'home') => void;
}

const SuccessConfirmation: React.FC<SuccessConfirmationProps> = ({ onNavigate }) => {
    return (
        <div className="min-h-screen flex items-center justify-center px-4 py-12">
            <div className="max-w-2xl w-full">
                {/* Success Card */}
                <div className="bg-gradient-to-br from-[#1A3C28] via-[#244F35] to-[#2E6142] rounded-2xl shadow-2xl border border-[#5cb25d]/30 p-8 md:p-12 text-center">
                    {/* Animated Checkmark */}
                    <div className="mb-8 flex justify-center">
                        <div className="relative">
                            {/* Outer circle with pulse animation */}
                            <div className="absolute inset-0 bg-green-400/20 rounded-full animate-ping" />

                            {/* Main checkmark circle */}
                            <div className="relative bg-gradient-to-br from-green-400 to-green-500 rounded-full p-6 shadow-lg">
                                <svg
                                    className="w-16 h-16 text-white animate-[scale-in_0.5s_ease-out]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M5 13l4 4L19 7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Success Message */}
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Success!
                    </h1>

                    <p className="text-xl text-green-100 mb-8">
                        Your information has been submitted successfully
                    </p>

                    {/* Details */}
                    <div className="bg-black/20 rounded-xl p-6 mb-8 backdrop-blur-sm border border-white/10">
                        <p className="text-white/90 text-lg leading-relaxed">
                            Thank you for your submission! We've received your information and pictures.
                            Our team will review your garden transformation request and contact you within
                            <span className="font-semibold text-green-300"> 24-48 hours</span> to discuss the next steps.
                        </p>
                    </div>

                    {/* What's Next */}
                    <div className="mb-8 text-left">
                        <h2 className="text-2xl font-semibold text-white mb-4 text-center">What happens next?</h2>
                        <ul className="space-y-3 text-white/80">
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>We'll review your garden pictures and style preferences</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>Our design team will start working on your personalized concepts</span>
                            </li>
                            <li className="flex items-start">
                                <svg className="w-6 h-6 text-green-400 mr-3 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                </svg>
                                <span>You'll receive an email confirmation with project timeline details</span>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-white/5 rounded-lg p-4 mb-8 border border-white/10">
                        <p className="text-white/70 text-sm">
                            Questions? Contact us at{' '}
                            <a
                                href="mailto:yourdiydealer@gmail.com"
                                className="text-green-300 hover:text-green-200 underline transition-colors"
                            >
                                yourdiydealer@gmail.com
                            </a>
                        </p>
                    </div>

                    {/* Return Home Button */}
                    <button
                        onClick={() => onNavigate('home')}
                        className="w-full md:w-auto px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
                    >
                        Return to Home
                    </button>
                </div>
            </div>

            {/* Custom animation keyframes */}
            <style>{`
                @keyframes scale-in {
                    0% {
                        transform: scale(0);
                        opacity: 0;
                    }
                    50% {
                        transform: scale(1.1);
                    }
                    100% {
                        transform: scale(1);
                        opacity: 1;
                    }
                }
            `}</style>
        </div>
    );
};

export default SuccessConfirmation;
