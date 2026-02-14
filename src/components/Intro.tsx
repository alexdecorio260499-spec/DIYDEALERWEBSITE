import React from 'react';

const Intro: React.FC = () => {
    return (
        <section className="py-10 bg-gsd-cream text-center">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="font-serif text-3xl md:text-5xl text-gsd-black mb-8 leading-tight">
                    Why homeowners plan <br className="hidden md:block" /> before building
                </h2>

                <p className="font-sans text-lg md:text-xl text-gsd-grey font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    Most garden mistakes happen because you can't see the finished result until it's too late. We change that.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                    <div className="p-6 border-l border-gsd-olive/30">
                        <h3 className="font-serif text-xl text-gsd-black mb-3">Finally feel proud</h3>
                        <p className="text-sm text-gsd-grey">Stop looking at a messy garden. Create a space that you actively want to show off.</p>
                    </div>
                    <div className="p-6 border-l border-gsd-olive/30">
                        <h3 className="font-serif text-xl text-gsd-black mb-3">Stop second-guessing</h3>
                        <p className="text-sm text-gsd-grey">Know exactly where everything goes. No more "I hope this looks right" moments.</p>
                    </div>
                    <div className="p-6 border-l border-gsd-olive/30">
                        <h3 className="font-serif text-xl text-gsd-black mb-3">Visualize first</h3>
                        <p className="text-sm text-gsd-grey">See your investment before you spend a penny on construction or plants.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Intro;
