import React, { useEffect } from 'react';

const Privacy: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="bg-[#1a2e1a] text-white py-[3px] px-6 mb-2">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-2xl md:text-4xl font-serif mb-2">Privacy Policy</h1>
                    <p className="text-base text-white/80 max-w-2xl mx-auto">
                        Last updated: 09/02/2026
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-grow py-8 px-6">
                <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed bg-white/95 p-8 md:p-12 rounded-xl shadow-lg backdrop-blur-sm">
                    <p>
                        We respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, and protect any information you provide when using this website.
                    </p>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Information We Collect</h2>
                        <p>When you use our website or contact us, we may collect:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Your name</li>
                            <li>Your email address</li>
                            <li>Any information you voluntarily provide about your garden or project</li>
                        </ul>
                        <p className="mt-2">
                            We only collect information that is necessary to provide our services or respond to enquiries.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">How We Use Your Information</h2>
                        <p>We use your information to:</p>
                        <ul className="list-disc pl-5 mt-2 space-y-1">
                            <li>Respond to enquiries and requests</li>
                            <li>Provide garden design or revamp services</li>
                            <li>Communicate about your project</li>
                            <li>Improve our services and website</li>
                        </ul>
                        <p className="mt-2 text-gray-900 font-medium">
                            We do not sell, rent, or share your personal information with third parties for marketing purposes.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Data Storage & Security</h2>
                        <p>
                            We take reasonable steps to protect your information from unauthorised access, disclosure, or misuse. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Cookies</h2>
                        <p>
                            This website may use basic cookies or analytics tools to understand how visitors use the site and to improve functionality. These cookies do not collect personal information.
                        </p>
                        <p className="mt-2">
                            You can choose to disable cookies through your browser settings.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Third-Party Services</h2>
                        <p>
                            We may use third-party tools (such as website hosting, analytics, or form providers) to operate this website. These services may process limited data on our behalf and are required to handle it responsibly.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Your Rights</h2>
                        <p>
                            You may request access to, correction of, or deletion of your personal data at any time by contacting us directly.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-xl font-bold text-[#1a2e1a] mb-2">Contact</h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us via the details provided on this website.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Privacy;
