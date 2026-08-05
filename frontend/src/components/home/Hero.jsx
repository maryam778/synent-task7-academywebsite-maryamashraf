import studImg from "../../assets/images/students.png";
import { motion } from "framer-motion";
const Hero = () => {
  return (
    <section
      className="relative overflow-hidden
      bg-gradient-to-br
      from-[#0B1120]
      via-[#131C31]
      to-[#1A1F3A]
      pt-4 lg:pt-8"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-80px)]">

          {/* Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-5"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-[#FF0033]/10
              border border-[#FF0033]/30"
            >
              <span className="text-[#FF0033]">✦</span>

              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
                Trusted Amir Math & Science Academy
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.7 }}
              className="
              text-4xl
              md:text-5xl
              lg:text-[60px]
              xl:text-[64px]
              font-extrabold
              leading-tight
              text-white"
            >
              Shape Your
              <br />

              Future With

              <span className="block text-[#FF0033]">
                Quality Education
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="max-w-xl
              text-base
              lg:text-lg
              leading-7
              text-slate-300"
            >
              Learn Mathematics and Science from experienced teachers
              in a modern learning environment designed to build
              confidence, improve academic performance, and prepare
              students for future success.
            </motion.p>

            {/* Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="flex flex-col sm:flex-row gap-4"
            >

              <button
                className="bg-[#FF0033]
                text-white
                px-8 py-3
                rounded-full
                font-semibold
                hover:scale-105
                transition-all"
              >
                Get Admission
              </button>

              <button
                className="border border-white/20
                bg-white/5
                backdrop-blur-md
                text-white
                px-8 py-3
                rounded-full
                font-semibold
                hover:bg-white
                hover:text-[#0B1120]
                transition-all"
              >
                Explore Courses
              </button>

            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.7 }}
              className="flex gap-10 pt-2"
            >

              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white">
                  500+
                </h2>

                <p className="text-slate-400">
                  Students
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white">
                  25+
                </h2>

                <p className="text-slate-400">
                  Teachers
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <h2 className="text-3xl font-bold text-white">
                  98%
                </h2>

                <p className="text-slate-400">
                  Success
                </p>
              </motion.div>

            </motion.div>

          </motion.div>

          {/* Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex justify-center items-center"
          >

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.5, 0.8, 0.5],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute
              w-[380px]
              h-[380px]
              rounded-full
              bg-gradient-to-br
              from-[#FF0033]/30
              via-[#7C3AED]/20
              to-[#2563EB]/20
              blur-3xl"
            />

            {/* Image */}
            <motion.div
              initial={{ scale: 0.85 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="relative z-10
              w-[400px]
              h-[460px]
              rounded-[35px]
              overflow-hidden
              border border-white/10
              shadow-2xl"
            >
              <motion.img
                src={studImg}
                alt="Student"
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-full h-full object-cover"
              />
            </motion.div>

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;