import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "Their work allowed us to project ourselves into our future backyard. We now have a stunning modern retreat! Highly recommened.",
      name: "Sofia Martinez",
      location: "Valencia, Spain",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      text: "I was hesitant about a purely online service, but the designs were spot on. It probably saved us thousands in potential landscaping mistakes.",
      name: "Michael Thompson",
      location: "Manchester, UK",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=200&h=200"
    },
    {
      text: "The attention to detail and professional approach exceeded our expectations. Our garden is now our favorite space at home.",
      name: "Lukas Schmidt",
      location: "Berlin, Germany",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=200&h=200"
    }
  ];

  return (
    <section className="py-24 bg-white/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-gsd-black mb-4">Client Stories</h2>
          <div className="w-16 h-0.5 bg-gsd-olive mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="flex flex-col items-center text-center">

              <div className="flex flex-col items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mb-4 grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
                />
                <cite className="not-italic block font-sans text-xs font-bold uppercase tracking-widest text-gsd-black mb-1">
                  {testimonial.name}
                </cite>
                <span className="block font-sans text-xs text-gsd-grey uppercase tracking-wide opacity-70">
                  {testimonial.location}
                </span>
              </div>

              <div className="mb-6">
                {/* Optional: Star rating, minimalist */}
                <div className="flex justify-center gap-1 text-gsd-olive mb-4 opacity-60">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <blockquote className="font-serif italic text-xl text-gsd-black mb-6 leading-relaxed opacity-90">
                "{testimonial.text}"
              </blockquote>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
