import {
  FaChalkboardTeacher,
  FaTrophy,
  FaUserGraduate,
} from "react-icons/fa";
import { motion } from "framer-motion";
import AboutImg from "../../assets/images/aboutImg.png";

const fadeLeft = {
  hidden: { opacity: 0, x: -70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeRight = {
  hidden: { opacity: 0, x: 70 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7 },
  },
};

const About = () => {
  return (
    <section className="bg-[#0B1120] py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Side */}
          <motion.div
            variants={fadeLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative flex justify-center items-center order-2 lg:order-1"
          >

            {/* Glow */}
            <motion.div
              animate={{
                scale: [1, 1.08, 1],
                opacity: [0.4, 0.7, 0.4],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="
          absolute
          w-[220px]
          h-[220px]
          sm:w-[300px]
          sm:h-[300px]
          md:w-[360px]
          md:h-[360px]
          lg:w-[430px]
          lg:h-[430px]
          rounded-full
          bg-gradient-to-br
          from-[#FF0033]/25
          via-[#7C3AED]/20
          to-[#2563EB]/20
          blur-[120px]
          "
            />

            {/* Image */}
            <motion.div
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              whileHover={{ y: -8 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="
          relative
          z-10
          overflow-hidden
          rounded-[30px]
          border
          border-white/10
          shadow-2xl

          w-full
          max-w-[300px]

          sm:max-w-[360px]

          md:max-w-[420px]

          lg:max-w-[460px]
          "
            >
              <img
                src={AboutImg}
                alt="Students"
                className="
            w-full
            h-[380px]
            sm:h-[450px]
            md:h-[520px]
            lg:h-[560px]
            object-cover
            transition-transform
            duration-500
            hover:scale-105
            "
              />
            </motion.div>

            {/* Floating Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, -8, 0] }}
              transition={{
                opacity: { duration: 0.7 },
                x: { duration: 0.7 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              className="
          absolute
          left-0
          bottom-6

          sm:left-2

          lg:-left-6
          lg:bottom-10

          bg-[#111827]/90
          backdrop-blur-md
          border
          border-white/10
          rounded-2xl

          px-3
          py-3

          sm:px-5
          sm:py-4

          shadow-2xl
          z-20
          "
            >
              <FaUserGraduate className="text-[#FF0033] text-xl sm:text-2xl" />

              <h3 className="text-lg sm:text-2xl font-bold text-white mt-2">
                500+
              </h3>

              <p className="text-xs sm:text-sm text-slate-300">
                Happy Students
              </p>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              animate={{ y: [0, 8, 0] }}
              transition={{
                opacity: { duration: 0.7 },
                x: { duration: 0.7 },
                y: {
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "mirror",
                  ease: "easeInOut",
                },
              }}
              className="
          absolute
          right-0
          top-6

          sm:right-2

          lg:-right-6
          lg:top-10

          bg-[#111827]/90
          backdrop-blur-md
          border
          border-white/10
          rounded-2xl

          px-3
          py-3

          sm:px-5
          sm:py-4

          shadow-2xl
          z-20
          "
            >
              <FaTrophy className="text-[#FF0033] text-xl sm:text-2xl" />

              <h3 className="text-lg sm:text-2xl font-bold text-white mt-2">
                98%
              </h3>

              <p className="text-xs sm:text-sm text-slate-300">
                Success Rate
              </p>
            </motion.div>

          </motion.div>
          {/* Right Side */}
          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="
  space-y-5
  order-1
  lg:order-2
  "
          >

            {/* Badge */}
            <motion.div
              variants={fadeUp}
              className="
    inline-flex
    items-center
    gap-2
    px-4
    py-2
    sm:px-5
    rounded-full
    bg-[#FF0033]/10
    border
    border-[#FF0033]/30
    "
            >
              <span className="text-[#FF0033] text-base sm:text-lg">
                ✦
              </span>

              <span className="
    text-xs
    sm:text-sm
    font-semibold
    uppercase
    tracking-wider
    text-[#FF0033]
    ">
                About Our Academy
              </span>

            </motion.div>


            {/* Heading */}
            <motion.h2
              variants={fadeUp}
              className="
    max-w-xl
    text-3xl
    sm:text-4xl
    md:text-5xl
    lg:text-6xl
    font-extrabold
    leading-tight
    tracking-tight
    text-white
    "
            >
              Empowering Students

              <span className="block text-[#FF0033]">
                Through Quality Education
              </span>

            </motion.h2>


            {/* Description */}
            <motion.p
              variants={fadeUp}
              className="
    max-w-xl
    text-sm
    sm:text-base
    md:text-lg
    leading-7
    sm:leading-8
    text-slate-300
    "
            >
              Amir Math & Science Academy is committed to providing
              quality education through experienced teachers, modern
              teaching methods, and a supportive learning environment
              that helps every student achieve academic excellence.
            </motion.p>



            {/* Features */}
            <div
              className="
    grid
    grid-cols-1
    sm:grid-cols-2
    gap-4
    "
            >

              {[
                {
                  title: "Expert Teachers",
                  desc: "Learn from qualified and experienced educators.",
                },
                {
                  title: "Modern Learning",
                  desc: "Interactive classrooms with modern teaching methods.",
                },
                {
                  title: "Personalized Guidance",
                  desc: "Individual attention for every student.",
                },
                {
                  title: "Excellent Results",
                  desc: "Consistent academic excellence and achievements.",
                },
              ].map((item, index) => (

                <motion.div
                  key={index}
                  variants={fadeUp}
                  whileHover={{
                    y: -8,
                    scale: 1.02
                  }}
                  className="
        flex
        gap-3
        p-4
        sm:p-5
        rounded-2xl
        bg-white/5
        border
        border-white/10
        hover:border-[#FF0033]/50
        hover:bg-white/10
        transition-all
        duration-300
        "
                >

                  <div
                    className="
        w-10
        h-10
        sm:w-12
        sm:h-12
        rounded-xl
        bg-[#FF0033]/10
        flex
        items-center
        justify-center
        shrink-0
        "
                  >
                    <FaChalkboardTeacher
                      className="
          text-[#FF0033]
          text-lg
          sm:text-xl
          "
                    />
                  </div>


                  <div>

                    <h3 className="
          text-white
          font-semibold
          text-sm
          sm:text-lg
          ">
                      {item.title}
                    </h3>


                    <p className="
          text-slate-400
          text-xs
          sm:text-sm
          mt-1
          ">
                      {item.desc}
                    </p>

                  </div>

                </motion.div>

              ))}

            </div>



            {/* Button */}
            <motion.div
              variants={fadeUp}
              className="pt-2 sm:pt-4"
            >

              <motion.button
                whileHover={{
                  scale: 1.05
                }}
                whileTap={{
                  scale: 0.95
                }}
                className="
      bg-[#FF0033]
      text-white
      px-7
      py-3
      sm:px-8
      rounded-full
      font-semibold
      shadow-lg
      hover:bg-[#FF1F4D]
      transition-all
      duration-300
      "
              >
                Learn More
              </motion.button>

            </motion.div>


          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default About;