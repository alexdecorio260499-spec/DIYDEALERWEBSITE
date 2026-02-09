import React, { useEffect } from 'react';

const About: React.FC = () => {
    // Scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen flex flex-col pt-20 md:pt-24">
            {/* Hero Section */}
            <section className="bg-[#1a2e1a] text-white py-[3px] px-6 mb-2">
                <div className="max-w-4xl mx-auto text-center">
                    <h1 className="text-3xl md:text-5xl font-serif mb-4">Our Story</h1>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto">
                        From DIY enthusiasts to garden design professionals.
                    </p>
                </div>
            </section>

            {/* Content Section */}
            <section className="flex-grow py-8 px-6">
                <div className="max-w-3xl mx-auto space-y-8 text-lg text-gray-700 leading-relaxed bg-white/95 p-8 md:p-12 rounded-xl shadow-lg backdrop-blur-sm">
                    <p>
                        We didn’t plan on getting into garden design — it kind of found us.
                    </p>

                    <p>
                        Our background is in design, where we spent years learning how layouts, flow, and small details can
                        completely change how a space feels. When we turned that mindset toward our own garden, we realised
                        the same rules apply outdoors too.
                    </p>

                    <p>
                        Like most people, we started with a messy, underused garden and a lot of “we’ll deal with it later”
                        energy. One DIY revamp led to another, and before we knew it, we were spending weekends designing,
                        building, adjusting, and learning what actually works in real gardens — not just in magazines.
                    </p>

                    <p>
                        When we shared our backyard transformation online, the response surprised us. Messages started
                        rolling in from people asking if we could help with their own gardens. Different sizes, different
                        budgets, same problem: they knew their garden could be better, but didn’t know where to start.
                    </p>

                    <div className="border-l-4 border-[#1a2e1a] pl-6 py-2 my-10 italic text-[#1a2e1a] font-serif text-2xl">
                        That’s why we do what we do now.
                    </div>

                    <p>
                        We help people turn messy or forgotten gardens into spaces they actually enjoy using — with clear
                        design ideas, practical revamp plans, and solutions that feel achievable. No overcomplicated designs,
                        no pressure to hire contractors, just thoughtful guidance and realistic results.
                    </p>

                    <p className="font-bold text-[#1a2e1a]">
                        If you’re looking for a garden that works for your life (not the other way around), you’re in the right place.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
