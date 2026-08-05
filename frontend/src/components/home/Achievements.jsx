import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaSchool,
} from "react-icons/fa";

import { motion } from "framer-motion";

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

const Achievements = () => {
  const achievements = [
    {
      icon: <FaUserGraduate />,
      number: "500+",
      title: "Happy Students",
    },
    {
      icon: <FaChalkboardTeacher />,
      number: "25+",
      title: "Expert Teachers",
    },
    {
      icon: <FaAward />,
      number: "98%",
      title: "Success Rate",
    },
    {
      icon: <FaSchool />,
      number: "10+",
      title: "Years of Excellence",
    },
  ];

  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">

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
              Our Achievements
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
          className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight"
        >
          Excellence In

          <span className="block text-[#FF0033]">
            Numbers
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg text-slate-300 leading-8"
        >
          We are proud of our journey and the achievements of our students.
          Our commitment to quality education continues to inspire academic
          excellence every year.
        </motion.p>
              </div>

      {/* Achievement Cards */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group bg-white/5 border border-white/10 rounded-3xl p-8 text-center hover:border-[#FF0033]/50 hover:bg-white/10 transition-all duration-500"
            >
              {/* Icon */}
              <motion.div
                whileHover={{ rotate: 10, scale: 1.15 }}
                transition={{ duration: 0.3 }}
                className="w-16 h-16 rounded-2xl mx-auto bg-[#FF0033]/10 flex items-center justify-center text-[#FF0033] text-3xl"
              >
                {achievement.icon}
              </motion.div>

              {/* Number */}
              <motion.h3
                initial={{ scale: 0.8 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.2,
                }}
                className="mt-6 text-5xl font-extrabold text-white group-hover:text-[#FF0033] transition-colors"
              >
                {achievement.number}
              </motion.h3>

              {/* Title */}
              <p className="mt-3 text-lg font-medium text-slate-300">
                {achievement.title}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;