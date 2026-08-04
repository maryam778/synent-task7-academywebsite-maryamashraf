import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";
import { useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Ayesha Khan",
      class: "Matric Student",
      review:
        "The teachers explain every concept in a simple way. My Mathematics has improved a lot.",
    },
    {
      name: "Muhammad Ali",
      class: "Intermediate Student",
      review:
        "Weekly tests and regular guidance helped me gain confidence before my board exams.",
    },
    {
      name: "Fatima Noor",
      class: "Class 8 Student",
      review:
        "The learning environment is friendly, motivating, and focused on concept building.",
    },
  ];

  const [current, setCurrent] = useState(0);

  const testimonial = testimonials[current];

  // Previous Function
  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  // Next Function
  const nextTestimonial = () => {
    setCurrent((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  return (

    <section className="relative overflow-hidden py-24 bg-[#0B1120]">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-[#FF0033]/10 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
            <span className="text-[#FF0033] text-lg">✦</span>

            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              Testimonials
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          What Our
          <span className="block text-[#FF0033]">
            Students Say
          </span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300">
          Our students' success stories reflect our commitment to quality
          education, concept-based learning, and continuous academic growth.
        </p>

        {/* Testimonials */}
        <div className="mt-16 max-w-4xl mx-auto">

          {/* Testimonial Card */}
          <div className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md px-8 py-14 md:px-16 text-center">

            {/* Glow */}
            <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#FF0033]/10 blur-3xl"></div>

            <div className="relative z-10">

              {/* Stars */}
              <div className="flex justify-center gap-2 mb-8">
                {[...Array(5)].map((_, index) => (
                  <FaStar
                    key={index}
                    className="text-yellow-400 text-xl"
                  />
                ))}
              </div>
              {/* Quote */}
              <div className="flex justify-center mb-8">
                <div className="w-16 h-16 rounded-full bg-[#FF0033]/10 flex items-center justify-center">
                  <FaQuoteLeft className="text-[#FF0033] text-2xl" />
                </div>
              </div>
              {/* Review */}
              <p className="text-lg md:text-xl italic text-slate-300 leading-9 max-w-2xl mx-auto">
                "{testimonial.review}"
              </p>

              {/* Avatar */}
              <div className="mt-10 flex justify-center">
                <FaUserCircle className="text-6xl text-[#FF0033]" />
              </div>
              {/* Name */}
              <h3 className="mt-5 text-2xl font-bold text-white">
                {testimonial.name}
              </h3>

              {/* Class */}
              <p className="mt-2 text-[#FF0033] font-medium">
                {testimonial.class}
              </p>

            </div>

          </div>

          {/* 👇 Navigation Buttons */}
          <div className="mt-10 flex justify-center items-center gap-6">

            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF0033] transition"
            >
              ←
            </button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all ${current === index
                    ? "w-8 bg-[#FF0033]"
                    : "w-3 bg-white/30"
                    }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-[#FF0033] transition"
            >
              →
            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;