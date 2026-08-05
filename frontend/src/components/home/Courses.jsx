import primaryClass from "../../assets/images/primaryClass.png";
import middleClass from "../../assets/images/middleClass.png";
import matricClass from "../../assets/images/matricClass.png";
import collegeClass from "../../assets/images/collegeClass.png";
import exams from "../../assets/images/exams.png";
import lab from "../../assets/images/lab.png";

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

const Courses = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const courses = [
    {
      images: primaryClass,
      Badge: "Classes 1–5",
      title: "Primary Education",
      description:
        "Build a strong academic foundation through engaging lessons and concept-based learning.",
    },
    {
      images: middleClass,
      Badge: "Classes 6–8",
      title: "Middle School Program",
      description:
        "Strengthen Mathematics and Science concepts with interactive learning and expert teachers.",
    },
    {
      images: matricClass,
      Badge: "Classes 9–10",
      title: "Matric Excellence",
      description:
        "Prepare for board exams with regular practice, revision sessions, and expert guidance.",
    },
    {
      images: collegeClass,
      Badge: "Classes 11–12",
      title: "Intermediate Program",
      description:
        "Advanced learning with specialized teaching and focused exam preparation.",
    },
    {
      images: lab,
      Badge: "Special Program",
      title: "Concept Building",
      description:
        "Develop strong concepts through interactive teaching and personalized guidance.",
    },
    {
      images: exams,
      Badge: "Assessment Program",
      title: "Weekly Tests & Exam Preparation",
      description:
        "Boost confidence with weekly assessments, mock exams, and smart revision strategies.",
    },
  ];

  return (
  <section className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
              <span className="text-[#FF0033] text-lg">✦</span>

              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
                Featured Courses
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight"
          >
            Explore Our

            <span className="block text-[#FF0033]">
              Popular Courses
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300"
          >
            Choose from our carefully designed courses that help students build
            strong concepts, improve academic performance, and prepare
            confidently for board examinations with expert teachers and modern
            teaching methods.
          </motion.p>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                }}
                className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#FF0033]/50 hover:shadow-[0_0_30px_rgba(255,0,51,0.25)]"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={course.images}
                    alt={course.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-[#FF0033] text-white text-sm font-semibold">
                      {course.Badge}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">
                    {course.title}
                  </h3>

                  <p className="mt-4 text-slate-300 leading-7">
                    {course.description}
                  </p>

                  <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#FF0033] px-6 py-3 text-white font-semibold transition hover:bg-[#e6002d]">
                    Learn More →
                  </button>
                </div>

              </motion.div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Courses;