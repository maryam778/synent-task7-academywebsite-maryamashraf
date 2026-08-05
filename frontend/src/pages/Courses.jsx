import primaryClass from "../assets/images/primaryClass.png";
import middleClass from "../assets/images/middleClass.png";
import matricClass from "../assets/images/matricClass.png";
import collegeClass from "../assets/images/collegeClass.png";
import exams from "../assets/images/exams.png";
import lab from "../assets/images/lab.png";
import { motion } from "framer-motion";
import {
  FaBookOpen,
  FaPen,
  FaClipboardCheck,
  FaTrophy,
} from "react-icons/fa";


const Courses = () => {

  const courses = [
    {
      image: primaryClass,
      badge: "Classes 1–5",
      title: "Primary Education",
      description:
        "Build a strong academic foundation through engaging lessons, interactive activities, and concept-based learning in Mathematics and Science.",
    },
    {
      image: middleClass,
      badge: "Classes 6–8",
      title: "Middle School Program",
      description:
        "Strengthen Mathematics and Science concepts through practical learning, experienced teachers, and regular classroom assessments.",
    },
    {
      image: matricClass,
      badge: "Classes 9–10",
      title: "Matric Excellence",
      description:
        "Prepare for board examinations with comprehensive study plans, revision sessions, and expert academic guidance.",
    },
    {
      image: collegeClass,
      badge: "Classes 11–12",
      title: "Intermediate Program",
      description:
        "Advanced Mathematics and Science education designed to help students excel in board exams and higher studies.",
    },
    {
      image: lab,
      badge: "Special Program",
      title: "Concept Building",
      description:
        "Develop strong conceptual understanding through modern teaching methods, practical examples, and personalized mentoring.",
    },
    {
      image: exams,
      badge: "Assessment Program",
      title: "Weekly Tests & Exam Preparation",
      description:
        "Improve performance with weekly tests, mock examinations, detailed feedback, and smart revision strategies.",
    },
  ];

  const steps = [
    {
      icon: <FaBookOpen />,
      title: "Concept Learning",
      description:
        "Students build strong concepts through experienced teachers and easy-to-understand explanations.",
    },
    {
      icon: <FaPen />,
      title: "Regular Practice",
      description:
        "Continuous practice helps students improve their skills and confidence.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Assessment & Feedback",
      description:
        "Weekly tests and feedback help students track their academic progress.",
    },
    {
      icon: <FaTrophy />,
      title: "Better Results",
      description:
        "Focused preparation helps students achieve better results and academic success.",
    },
  ];

  return (
    <>
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
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120]/80 via-transparent to-transparent"></div>

                  {/* Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 rounded-full bg-[#FF0033] text-white text-sm font-semibold">
                      {course.badge}
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

      <section className="py-20 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center text-4xl md:text-5xl font-extrabold text-white"
          >
            How We Help Students{" "}
            <span className="text-[#FF0033]">
              Succeed
            </span>
          </motion.h2>


          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-5 max-w-3xl mx-auto text-center text-slate-300"
          >
            Our learning approach focuses on concepts, practice, assessment, and
            continuous improvement.
          </motion.p>

          <div className="relative mt-16">
            {/* Line */}
            <div className=" hidden lg:block absolute top-10 right-20 left-20  h-[2px] bg-[#FF0033]/30">
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.15
                  }}
                  className="text-center">
                  {/* Number Circle */}
                  <div className="mx-auto w-20 h-20 rounded-full bg-[#FF0033] flex items-center justify-center text-white text-2xl font-semibold
 shadow-lg">
                    0{index + 1}
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-white">
                    {step.title}
                  </h3>
                  <p className="text-slate-300 mt-3 leading">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
};

export default Courses;