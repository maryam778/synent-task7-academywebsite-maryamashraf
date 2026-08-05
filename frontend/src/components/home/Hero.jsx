
import studImg from "../../assets/images/students.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section
      className="
      relative overflow-hidden
      bg-gradient-to-br
      from-[#0B1120]
      via-[#131C31]
      to-[#1A1F3A]
      pt-8 sm:pt-10 lg:pt-14
      pb-12 sm:pb-16
      "
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-10
          lg:gap-16
          items-center
          min-h-[calc(100vh-90px)]
          "
        >

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6 text-center lg:text-left"
          >

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="
              inline-flex
              items-center
              justify-center
              lg:justify-start
              gap-2
              px-4
              sm:px-5
              py-2
              rounded-full
              bg-[#FF0033]/10
              border
              border-[#FF0033]/30
              max-w-full
              "
            >
              <span className="text-[#FF0033] text-sm">✦</span>

              <span
                className="
                text-[10px]
                xs:text-xs
                sm:text-sm
                uppercase
                font-semibold
                tracking-wide
                text-[#FF0033]
                break-words
                "
              >
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
              font-extrabold
              text-white
              leading-tight

              text-[38px]
              sm:text-[48px]
              md:text-[56px]
              lg:text-[60px]
              xl:text-[68px]
              "
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
              className="
              max-w-xl
              mx-auto
              lg:mx-0

              text-slate-300

              text-base
              sm:text-lg

              leading-7
              sm:leading-8
              "
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
              className="
              flex
              flex-col
              sm:flex-row
              gap-4
              justify-center
              lg:justify-start
              "
            >
              <button
                className="
                w-full
                sm:w-auto
                bg-[#FF0033]
                text-white
                px-8
                py-3.5
                rounded-full
                font-semibold
                hover:scale-105
                transition-all
                "
              >
                Get Admission
              </button>

              <button
                className="
                w-full
                sm:w-auto
                border
                border-white/20
                bg-white/5
                backdrop-blur-md
                text-white
                px-8
                py-3.5
                rounded-full
                font-semibold
                hover:bg-white
                hover:text-[#0B1120]
                transition-all
                "
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
              className="
              grid
              grid-cols-3
              gap-4
              sm:gap-8
              pt-4
              text-center
              lg:text-left
              "
            >
              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  500+
                </h2>

                <p className="text-slate-400 text-sm sm:text-base">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  25+
                </h2>

                <p className="text-slate-400 text-sm sm:text-base">
                  Teachers
                </p>
              </div>

              <div>
                <h2 className="text-2xl sm:text-3xl font-bold text-white">
                  98%
                </h2>

                <p className="text-slate-400 text-sm sm:text-base">
                  Success
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
            relative
            flex
            justify-center
            items-center
            mt-10
            lg:mt-0
            "
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
              className="
              absolute
              w-[250px]
              h-[250px]
              sm:w-[320px]
              sm:h-[320px]
              md:w-[380px]
              md:h-[380px]
              rounded-full
              bg-gradient-to-br
              from-[#FF0033]/30
              via-[#7C3AED]/20
              to-[#2563EB]/20
              blur-3xl
              "
            />

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="
              relative
              z-10
              overflow-hidden
              rounded-[30px]
              border
              border-white/10
              shadow-2xl

              w-full
              max-w-[320px]

              sm:max-w-[380px]

              md:max-w-[430px]

              lg:max-w-[450px]
              "
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
                className="
                w-full
                h-[380px]
                sm:h-[450px]
                md:h-[520px]
                lg:h-[560px]
                object-cover
                "
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;