import React from 'react';
import paypalQr from '../assets/paypal-qr-code.png';

interface CheckoutProps {
    plan: {
        title: string;
        price: string;
        features: string[];
    };
    onClose: () => void;
}

const Checkout: React.FC<CheckoutProps> = ({ plan, onClose }) => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal Card */}
            <div className="relative w-full max-w-4xl bg-[#0a0a0a] border border-white/10 rounded-3xl shadow-2xl overflow-hidden flex flex-col md:flex-row">

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 text-white/50 hover:text-white transition-colors z-10"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* Left Column: Order Summary */}
                <div className="w-full md:w-1/2 p-8 md:p-12 bg-white/5 border-b md:border-b-0 md:border-r border-white/10">
                    <h2 className="text-3xl font-serif text-white mb-2">Order Summary</h2>
                    <p className="text-white/60 mb-8">Review your selected plan details.</p>

                    <div className="bg-white/5 rounded-2xl p-6 border border-white/10 mb-6">
                        <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                        <div className="text-4xl font-bold text-primary mb-4">{plan.price}</div>
                        <ul className="space-y-3">
                            {plan.features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3 text-white/80 text-sm">
                                    <svg className="w-5 h-5 text-primary shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                    {feature}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex items-center gap-2 text-white/40 text-sm">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        Secure Checkout
                    </div>
                </div>

                {/* Right Column: Payment */}
                <div className="w-full md:w-1/2 p-8 md:p-12 background-gradient-to-br from-black/50 to-black/20 flex flex-col items-center justify-center text-center">
                    <h2 className="text-2xl font-serif text-white mb-6">Payment Method</h2>

                    <div className="bg-white p-4 rounded-xl shadow-lg mb-6 max-w-[280px]">
                        <img src={paypalQr} alt="PayPal QR Code" className="w-full h-auto rounded-lg" />
                    </div>

                    <p className="text-white/80 mb-4 font-medium">
                        Scan to pay with PayPal
                    </p>

                    <p className="text-white/50 text-sm max-w-xs">
                        Open your PayPal app or banking app to scan the QR code and complete your purchase securely.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Checkout;
