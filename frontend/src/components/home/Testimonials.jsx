import { FaQuoteLeft, FaStar, FaUserCircle } from "react-icons/fa";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

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

  const prevTestimonial = () => {
    setCurrent((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

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
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
            <span className="text-[#FF0033] text-lg">✦</span>

            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              Testimonials
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
        >
          What Our

          <span className="block text-[#FF0033]">
            Students Say
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300"
        >
          Our students' success stories reflect our commitment to quality
          education, concept-based learning, and continuous academic growth.
        </motion.p>

        <div className="mt-16 max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -40, scale: 0.95 }}
              transition={{ duration: 0.5 }}
              className="relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-md px-8 py-14 md:px-16 text-center"
            >
              {/* Glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-72 h-72 rounded-full bg-[#FF0033]/10 blur-3xl"></div>

              <div className="relative z-10">

                {/* Stars */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="flex justify-center gap-2 mb-8"
                >
                  {[...Array(5)].map((_, index) => (
                    <FaStar
                      key={index}
                      className="text-yellow-400 text-xl"
                    />
                  ))}
                </motion.div>

                {/* Quote */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.3 }}
                  className="flex justify-center mb-8"
                >
                  <div className="w-16 h-16 rounded-full bg-[#FF0033]/10 flex items-center justify-center">
                    <FaQuoteLeft className="text-[#FF0033] text-2xl" />
                  </div>
                </motion.div>

                {/* Review */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="text-lg md:text-xl italic text-slate-300 leading-9 max-w-2xl mx-auto"
                >
                  "{testimonial.review}"
                </motion.p>

                {/* Avatar */}
                <motion.div
                  initial={{ scale: 0.8 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mt-10 flex justify-center"
                >
                  <FaUserCircle className="text-6xl text-[#FF0033]" />
                </motion.div>

                {/* Name */}
                <motion.h3
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-5 text-2xl font-bold text-white"
                >
                  {testimonial.name}
                </motion.h3>

                {/* Class */}
                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.7 }}
                  className="mt-2 text-[#FF0033] font-medium"
                >
                  {testimonial.class}
                </motion.p>

              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-10 flex justify-center items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-[#FF0033] transition"
            >
              ←
            </motion.button>

            <div className="flex gap-3">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setCurrent(index)}
                  className={`h-3 rounded-full transition-all ${current === index
                      ? "w-8 bg-[#FF0033]"
                      : "w-3 bg-white/30"
                    }`}
                />
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-white/10 text-white hover:bg-[#FF0033] transition"
            >
              →
            </motion.button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;