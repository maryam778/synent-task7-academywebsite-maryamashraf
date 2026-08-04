import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardCheck,
  FaLaptopCode,
  FaUserGraduate,
  FaAward,
} from "react-icons/fa";

import { motion } from "framer-motion";


const WhyChooseUs = () => {

  const features = [
    {
      icon: <FaChalkboardTeacher />,
      title: "Expert Teachers",
      description:
        "Learn from experienced and qualified teachers dedicated to student success.",
    },
    {
      icon: <FaBookOpen />,
      title: "Concept-Based Learning",
      description:
        "We focus on understanding concepts instead of memorizing lessons.",
    },
    {
      icon: <FaClipboardCheck />,
      title: "Weekly Assessments",
      description:
        "Regular quizzes and tests help students track their academic progress.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Smart Learning",
      description:
        "Modern teaching methods and digital resources create an engaging classroom experience.",
    },
    {
      icon: <FaUserGraduate />,
      title: "Personalized Guidance",
      description:
        "Individual attention helps every student overcome challenges and achieve goals.",
    },
    {
      icon: <FaAward />,
      title: "Proven Results",
      description:
        "Our students consistently achieve excellent academic performance and confidence.",
    },
  ];


  return (
    <section className="relative overflow-hidden py-24 bg-[#0B1120]">

      {/* Background Glow */}
      <div
        className="
        absolute
        top-20
        left-1/2
        -translate-x-1/2
        w-[500px]
        h-[500px]
        rounded-full
        bg-[#FF0033]/10
        blur-3xl
        "
      ></div>


      <div className="relative z-10 max-w-7xl mx-auto px-6">


        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex justify-center"
        >

          <div className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-[#FF0033]/10
          border
          border-[#FF0033]/30
          ">

            <span className="text-[#FF0033] text-lg">
              ✦
            </span>

            <span className="
            text-sm
            font-semibold
            uppercase
            tracking-wider
            text-[#FF0033]
            ">
              Why Choose Us
            </span>

          </div>

        </motion.div>



        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="
          mt-6
          text-center
          text-4xl
          md:text-5xl
          lg:text-6xl
          font-extrabold
          text-white
          leading-tight
          "
        >

          Why Students Choose

          <span className="block text-[#FF0033]">
            Amir Math & Science Academy
          </span>

        </motion.h2>




        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="
          mt-6
          max-w-3xl
          mx-auto
          text-center
          text-base
          md:text-lg
          leading-8
          text-slate-300
          "
        >

          We provide a supportive learning environment where experienced
          teachers, concept-based education, and personalized guidance help
          every student achieve academic excellence and long-term success.

        </motion.p>




        {/* Cards */}
        <div className="
        mt-16
        grid
        grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
        ">


          {features.map((feature, index) => (

            <motion.div
              key={index}

              initial={{
                opacity: 0,
                y: 60
              }}

              whileInView={{
                opacity: 1,
                y: 0
              }}

              viewport={{
                once: true
              }}

              transition={{
                duration: 0.6,
                delay: index * 0.15
              }}

              className="
              group
              flex
              flex-col
              bg-white/5
              border
              border-white/10
              rounded-3xl
              p-8
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-[#FF0033]/50
              hover:bg-white/10
              "
            >


              {/* Icon */}
              <div
                className="
                w-14
                h-14
                rounded-2xl
                bg-[#FF0033]/10
                flex
                items-center
                justify-center
                text-[#FF0033]
                text-2xl
                transition-all
                duration-300
                group-hover:scale-110
                "
              >

                {feature.icon}

              </div>



              {/* Title */}
              <h3
                className="
                mt-6
                text-2xl
                font-bold
                text-white
                group-hover:text-[#FF0033]
                transition
                "
              >

                {feature.title}

              </h3>




              {/* Description */}
              <p
                className="
                mt-4
                text-slate-300
                leading-7
                "
              >

                {feature.description}

              </p>




              {/* Bottom Text */}
              <div
                className="
                mt-auto
                pt-6
                flex
                items-center
                gap-2
                text-[#FF0033]
                font-semibold
                transition-all
                duration-300
                group-hover:gap-4
                "
              >

                <span>
                  Explore More
                </span>

                <span>
                  →
                </span>

              </div>


            </motion.div>

          ))}


        </div>


      </div>


    </section>
  );
};


export default WhyChooseUs;