import React, { useEffect } from 'react';

const Terms: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="bg-[#1a2e1a] text-white py-[3px] px-6 mb-8">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-serif mb-1">Terms & Conditions</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        Last updated: 09/02/2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-grow py-20 px-6">
                <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed bg-white/95 p-8 md:p-12 rounded-xl shadow-lg backdrop-blur-sm">
                    <p className="font-bold">
                        By using this website, you agree to the following Terms & Conditions. If you do not agree, please do not use the site.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Services</h2>
                        <p>
                            We provide garden design ideas, revamp concepts, and planning guidance. All services are provided remotely unless otherwise agreed.
                        </p>
                        <p className="mt-2">
                            Our services do not replace professional engineering, construction, or landscaping advice. Any work carried out based on our designs is done at your own discretion and risk.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">No Guarantees</h2>
                        <p>
                            While we aim to provide high-quality, thoughtful designs and guidance, we do not guarantee specific outcomes, results, or financial savings. Every garden, budget, and execution is different.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">User Responsibility</h2>
                        <p>You are responsible for:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Ensuring measurements, photos, and information you provide are accurate</li>
                            <li>Confirming that any work carried out complies with local regulations</li>
                            <li>Hiring qualified professionals where required</li>
                        </ul>
                        <p className="mt-2">
                            We are not responsible for errors resulting from incorrect information supplied by you.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Intellectual Property</h2>
                        <p>
                            All content on this website, including text, images, videos, designs, and branding, is our intellectual property and may not be copied, reproduced, or distributed without permission.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Payments & Refunds</h2>
                        <p>
                            Payment terms, deliverables, and refund policies (if applicable) will be clearly communicated before any service begins. Due to the personalised nature of our services, refunds may be limited once work has started.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Limitation of Liability</h2>
                        <p>
                            To the fullest extent permitted by law, we are not liable for any loss, damage, or injury arising from the use of our website or services.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Changes to These Terms</h2>
                        <p>
                            We may update these Terms & Conditions from time to time. Continued use of the website after changes are posted constitutes acceptance of the updated terms.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Governing Law</h2>
                        <p>
                            These terms are governed by the laws applicable in your country or region of operation.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Contact</h2>
                        <p>
                            If you have any questions regarding these Terms & Conditions, please contact us through the website.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Terms;
