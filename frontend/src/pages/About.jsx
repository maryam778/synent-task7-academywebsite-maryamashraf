import aboutImg from "../assets/images/about-section.png";
import { motion } from "framer-motion";
import teacher1 from "../assets/images/teacherImg1.png";
import teacher2 from "../assets/images/teacherImg2.png";
import teacher3 from "../assets/images/teacherImg3.png";
import teacher4 from "../assets/images/teacherImg5.png";
import {
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaLightbulb,
  FaTasks,
  FaUserFriends,
  FaChalkboardTeacher,
  FaBookOpen,
  FaClipboardCheck,
  FaLaptopCode,
  FaUserGraduate,
  FaAward,
  FaChartLine,
} from "react-icons/fa";

const About = () => {
  const features = [
    "Experienced & Qualified Teachers",
    "Concept-Based Learning",
    "Weekly Tests & Assessments",
    "Board Exam Preparation",
  ];
  const steps = [
  {
    icon: <FaLightbulb />,
    title: "Concept Clarity",
    description:
      "We focus on building strong concepts so students understand topics instead of memorizing.",
  },
  {
    icon: <FaTasks />,
    title: "Practice & Assessment",
    description:
      "Regular tests and practice sessions help students improve their performance.",
  },
  {
    icon: <FaUserFriends />,
    title: "Individual Attention",
    description:
      "Every student receives proper guidance and support according to their needs.",
  },
];
  const missionVision = [
    {
      icon: <FaBullseye />,
      title: "Our Mission",
      description:
        "To provide quality education through experienced teachers, concept-based learning, and modern teaching methods that help students achieve academic excellence.",
    },
    {
      icon: <FaEye />,
      title: "Our Vision",
      description:
        "To become one of the leading educational academies by inspiring students to build confidence, think critically, and prepare for a successful future.",
    },
  ];
  const stats = [
    {
      number: 500,
      suffix: "+",
      title: "Happy Students",
    },
    {
      number: 20,
      suffix: "+",
      title: "Expert Teachers",
    },
    {
      number: 10,
      suffix: "+",
      title: "Years Experience",
    },
    {
      number: 95,
      suffix: "%",
      title: "Success Rate",
    },
  ];

  // =======Why Choose Us=======
  const featuresChoose = [
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
   const teachers = [
    {
      image: teacher1,
      name: "Muhammad Amir",
      subject: "Mathematics",
      experience: "8+ Years",
      description:
        "Helping students master Mathematics through concept-based learning.",
    },
    {
      image: teacher2,
      name: "Ayesha Fatima",
      subject: "Physics",
      experience: "6+ Years",
      description:
        "Making Physics simple with practical explanations and regular practice.",
    },
    {
      image: teacher3,
      name: "Ali Hassan",
      subject: "Chemistry",
      experience: "7+ Years",
      description:
        "Focused on strong concepts and excellent board exam preparation.",
    },
    {
      image: teacher4,
      name: "Sara Noor",
      subject: "Biology",
      experience: "5+ Years",
      description:
        "Encouraging students to learn with confidence and curiosity.",
    },
  ];
  return (
    <>
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
              <span className="text-[#FF0033] text-lg">✦</span>

              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
                About Us
              </span>
            </div>
          </div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Building Bright Futures Through
            <span className="block text-[#FF0033]">
              Quality Education
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300"
          >
            At Amir Math & Science Academy, we are committed to providing
            high-quality education through experienced teachers, concept-based
            learning, and a supportive environment that helps students achieve
            academic excellence.
          </motion.p>

          {/* Two Column Layout */}
          <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">

            {/* Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative overflow-hidden rounded-3xl">
                <img
                  src={aboutImg}
                  alt="About Academy"
                  className="w-full h-[550px] object-cover rounded-3xl transition-transform duration-700 hover:scale-105"
                />


                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="absolute bottom-6 left-6 bg-[#FF0033] text-white px-6 py-4 rounded-2xl shadow-xl"
                >
                  <h3 className="text-3xl font-bold">500+</h3>
                  <p className="text-sm">Happy Students</p>
                </motion.div>

              </div>
            </motion.div>

            {/* Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >

              <span className="text-[#FF0033] font-semibold uppercase tracking-widest">
                About Academy
              </span>

              <h3 className="mt-4 text-4xl font-bold text-white leading-tight">
                Providing Quality Education
                <span className="block text-[#FF0033]">
                  Since 2015
                </span>
              </h3>

              <p className="mt-6 text-slate-300 leading-8">
                Amir Math & Science Academy is dedicated to helping students
                achieve academic excellence through experienced teachers,
                concept-based learning, and regular assessments.
              </p>

              {/* Features */}
              <div className="mt-8 space-y-5">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.15 }}
                    className="flex items-center gap-4 hover:translate-x-3 transition-all duration-300"
                  >
                    <FaCheckCircle className="text-[#FF0033] text-xl" />

                    <span className="text-white text-lg">
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-8 py-4 rounded-xl bg-[#FF0033] text-white font-semibold shadow-lg hover:shadow-[0_0_25px_rgba(255,0,51,0.5)] transition-all"
              >
                Learn More →
              </motion.button>

            </motion.div>

          </div>

        </div>
      </section>
      <section className="py-24 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center">

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
                  Mission & Vision
                </span>
              </div>
            </motion.div>

            {/* Heading */}
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
            >
              What Drives
              <span className="block text-[#FF0033]">
                Our Academy
              </span>
            </motion.h2>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-6 max-w-3xl mx-auto text-base md:text-lg leading-8 text-slate-300"
            >
              Our mission and vision guide everything we do, helping students
              grow academically, personally, and confidently.
            </motion.p>

          </div>

          {/* Cards */}
          <div className="mt-16 grid md:grid-cols-2 gap-8">

            {missionVision.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
              >
                <div className="bg-white/5 border border-white/10 rounded-3xl p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#FF0033]">

                  <div className="w-16 h-16 rounded-2xl bg-[#FF0033]/10 flex items-center justify-center text-[#FF0033] text-3xl">
                    {item.icon}
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-white">
                    {item.title}
                  </h3>

                  <p className="mt-5 text-slate-300 leading-8">
                    {item.description}
                  </p>

                </div>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
      <section className="py-24 bg-[#111827]">
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
                Our Achievements
              </span>
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
          >
            Our Success
            <span className="block text-[#FF0033]">
              In Numbers
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
            We are proud of the achievements we have made through quality
            education, experienced teachers, and the trust of hundreds of
            successful students.
          </motion.p>

          {/* Statistics Cards */}
          <div className="mt-16 grid grid-cols-2 lg:grid-cols-4 gap-8">

            {stats.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                className="bg-white/5 border border-white/10 rounded-3xl p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:border-[#FF0033] hover:shadow-[0_0_30px_rgba(255,0,51,0.25)]"
              >
                <h3 className="text-5xl md:text-6xl font-extrabold text-[#FF0033]">
                  {item.number}{item.suffix}
                </h3>

                <p className="mt-5 text-lg font-medium text-slate-300">
                  {item.title}
                </p>
              </motion.div>
            ))}

          </div>

        </div>
      </section>
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


            {featuresChoose.map((feature, index) => (

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
      <section className="py-24 bg-[#111827]">

        <div className="max-w-7xl mx-auto px-6">


          {/* Heading */}
          <div className="text-center">

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
                  Our Approach
                </span>

              </div>

            </motion.div>


            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="
          mt-6
          text-4xl
          md:text-5xl
          font-extrabold
          text-white
          "
            >

              Modern Teaching

              <span className="block text-[#FF0033]">
                For Better Learning
              </span>

            </motion.h2>


            <motion.p
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="
          mt-6
          max-w-3xl
          mx-auto
          text-slate-300
          leading-8
          "
            >

              Our teaching approach focuses on understanding,
              practice, and continuous improvement. We help students
              build confidence and achieve academic success.

            </motion.p>


          </div>
            {/* Learning Steps Cards */}
            <div className="
mt-16 grid md:grid-cols-3 gap-8
">
              {steps.map((step, index) => (
                <motion.div key={index}
                  initial={{ opacity: 0, y: 60 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className=" bg-white/5 border border-white/10 rounded-3xl p-8 transition-all duration-500 hover:-translate-y-3 
 hover:border-[#FF0033] "
                >
                  {/* Icon */}
                  <div className="
      w-16 h-16 rounded-2xl bg-[#FF0033]/10 flex items-center justify-center text-[#FF0033] text-3xl"
                  >
                    {step.icon}
                  </div>
                  {/* Title */}
                  <h3 className="
      mt-6 text-2xl font-bold text-white">
                    {step.title}
                  </h3>
                  {/* Description */}
                  <p className="
      mt-4 text-slate-300 leading-7
      "
                  >
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
      </section>
       <section className="py-24 bg-[#111827]">
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
              Our Faculty
            </span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white"
        >
          Meet Our

          <span className="block text-[#FF0033]">
            Expert Teachers
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
          Our experienced teachers are committed to inspiring students,
          strengthening concepts, and guiding them toward academic excellence
          through quality education and personalized support.
        </motion.p>

        {/* Teachers Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {teachers.map((teacher, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.2,
              }}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#FF0033]/50 hover:shadow-[0_0_30px_rgba(255,0,51,0.2)]"
            >

              {/* Image */}
              <div className="relative overflow-hidden">

                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-70"></div>

                {/* Subject Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-[#FF0033] text-white text-sm font-semibold">
                    {teacher.subject}
                  </span>
                </div>

              </div>

              {/* Top Line */}
              <div className="h-1 w-0 bg-[#FF0033] transition-all duration-500 group-hover:w-full"></div>

              {/* Content */}
              <div className="p-7 flex flex-col h-full">

                <span className="inline-block w-fit px-4 py-2 rounded-full bg-[#FF0033]/10 text-[#FF0033] text-sm font-semibold uppercase tracking-wider">
                  {teacher.experience}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#FF0033]">
                  {teacher.name}
                </h3>

                <p className="mt-4 text-slate-300 leading-7 flex-grow">
                  {teacher.description}
                </p>

                <button className="mt-6 flex items-center gap-2 text-[#FF0033] font-semibold transition-all duration-300 group-hover:gap-4">
                  <span>Meet Teacher</span>
                  <span>→</span>
                </button>

              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
    </>
  );
};

export default About;