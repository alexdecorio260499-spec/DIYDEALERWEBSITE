import React from 'react';

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      text: "DIY DEALER DESIGNS allowed us to project ourselves into our future backyard. We now have a stunning modern retreat!",
      name: "Sarah Jenkins",
      location: "Surrey, UK"
    },
    {
      text: "I was hesitant about a purely online service, but the designs were spot on. It probably saved us thousands in potential landscaping mistakes.",
      name: "Michael Thompson",
      location: "Manchester, UK"
    },
    {
      text: "The attention to detail and professional approach exceeded our expectations. Our garden is now our favorite space at home.",
      name: "Emma Wilson",
      location: "Bristol, UK"
    }
  ];

  return (
    <section className="py-20 bg-accent/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-4xl text-primary mb-12">
          Stories from our <span className="italic text-secondary">Sanctuaries</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-left">
              <p className="text-gray-800 mb-6 italic leading-relaxed">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <strong className="block text-primary font-serif">{testimonial.name}</strong>
                  <span className="text-xs text-gray-600 uppercase tracking-wide">{testimonial.location}</span>
                </div>
                <div className="flex gap-1 text-secondary">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
