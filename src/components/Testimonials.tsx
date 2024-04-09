import React, { useState } from 'react';
import { UsersIcon } from '@heroicons/react/24/solid';
import { testimonials } from './database';

const Testimonials: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="bg-gray-900 py-20">
      <div className="container mx-auto text-center">
        <UsersIcon className="w-10 inline-block mb-4 text-white" />
        <h1 className="text-4xl font-medium text-white mb-12">Testimonials</h1>
        <div className="flex flex-wrap justify-center -m-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="p-4 w-full md:w-1/2 lg:w-1/3"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className="bg-gray-800 p-6 rounded-lg"
                style={{
                  transform: hoveredIndex === index ? 'translateY(-5px)' : 'translateY(0)',
                  transition: 'transform 0.3s ease',
                }}
              >
                {/* Display the testimonial title with bold font weight */}
                <p className="text-white font-medium text-lg mb-3 font-bold">{testimonial.title}</p>
                {/* Display the testimonial description */}
                <p className="text-white leading-relaxed mb-6">{testimonial.description}</p>
                {/* Link to view the testimonial */}
                <div className="flex items-center justify-center">
                  <a
                    href={testimonial.file}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white font-medium underline hover:text-blue-300"
                  >
                    View Testimonial
                  </a>
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
