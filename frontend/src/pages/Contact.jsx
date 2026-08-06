import { motion } from "framer-motion";
import contactHero from "../assets/images/students.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";
import { FaClock } from "react-icons/fa";

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

const Contact = () => {


  const features = [
    "Experienced Teachers",
    "Weekly Tests",
    "Board Exam Preparation",
    "Affordable Fee Structure",
    "Friendly Learning Environment",
  ];

  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location",
      value: "Lahore, Pakistan",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+92 300 1234567",
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "info@amirmathacademy.com",
    },
  ];
  return (
    <>
   {/* Hero Section */}
<section
  className="
  relative
  overflow-hidden
  min-h-screen
  bg-[#0B1120]
  flex
  items-center
  py-16
  sm:py-20
  lg:py-24
  "
>
  <div
    className="
    max-w-7xl
    mx-auto
    px-5
    sm:px-6
    lg:px-8
    w-full
    "
  >
    <div
      className="
      grid
      grid-cols-1
      lg:grid-cols-2
      gap-10
      lg:gap-16
      items-center
      "
    >
      {/* Left Side */}
      <motion.div
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Badge */}
        <div
          className="
          inline-flex
          items-center
          gap-2
          px-4
          sm:px-5
          py-2
          sm:py-3
          rounded-full
          bg-[#FF0033]/10
          border
          border-[#FF0033]/30
          "
        >
          <span className="text-[#FF0033]">✦</span>

          <span
            className="
            text-xs
            sm:text-sm
            uppercase
            font-semibold
            tracking-wider
            text-[#FF0033]
            "
          >
            Contact Us
          </span>
        </div>

        {/* Heading */}
        <h1
          className="
          mt-5
          text-3xl
          sm:text-4xl
          md:text-5xl
          lg:text-6xl
          font-extrabold
          leading-tight
          text-white
          "
        >
          Let's Get

          <span className="block text-[#FF0033]">
            In Touch
          </span>
        </h1>

        {/* Description */}
        <p
          className="
          mt-4
          text-base
          sm:text-lg
          leading-7
          sm:leading-8
          text-slate-300
          max-w-xl
          "
        >
          Have questions about admissions, courses, or our academy?
          Our team is always ready to guide you and help you begin
          your learning journey.
        </p>

        {/* Buttons */}
        <div
          className="
          mt-6
          flex
          flex-col
          sm:flex-row
          gap-4
          "
        >
          <button
            className="
            w-full
            sm:w-auto
            px-8
            py-3.5
            rounded-xl
            bg-[#FF0033]
            text-white
            font-semibold
            hover:scale-105
            transition-all
            duration-300
            "
          >
            Apply Now
          </button>

          <button
            className="
            w-full
            sm:w-auto
            px-8
            py-3.5
            rounded-xl
            border
            border-white/20
            text-white
            hover:border-[#FF0033]
            hover:text-[#FF0033]
            transition-all
            duration-300
            "
          >
            Contact Us
          </button>
        </div>
      </motion.div>

      {/* Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="
        relative
        flex
        justify-center
        mt-10
        lg:mt-0
        "
      >
        {/* Glow */}
        <div
          className="
          absolute
          w-[280px]
          h-[280px]
          sm:w-[380px]
          sm:h-[380px]
          lg:w-[420px]
          lg:h-[420px]
          rounded-full
          bg-gradient-to-br
          from-[#FF0033]/30
          via-[#7C3AED]/20
          to-[#2563EB]/20
          blur-[100px]
          sm:blur-[140px]
          "
        ></div>

        {/* Image */}
        <div
          className="
          relative
          z-10
          overflow-hidden
          rounded-[30px]
          sm:rounded-[36px]
          border
          border-white/10
          shadow-2xl
          "
        >
          <img
            src={contactHero}
            alt="Contact"
            className="
            w-[280px]
            sm:w-[350px]
            md:w-[400px]
            h-[350px]
            sm:h-[420px]
            md:h-[470px]
            lg:h-[510px]
            object-cover
            rounded-[28px]
            sm:rounded-[32px]
            hover:scale-105
            transition
            duration-700
            "
          />
        </div>
      </motion.div>
    </div>
  </div>
</section>
      <section className="py-16 sm:py-20 lg:py-24 bg-[#111827]">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">


          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="
      inline-flex 
      items-center 
      gap-2 
      px-4 sm:px-5 
      py-2 
      rounded-full 
      bg-[#FF0033]/10 
      border 
      border-[#FF0033]/30
      ">

              <span className="text-[#FF0033] text-base sm:text-lg">
                ✦
              </span>

              <span className="
        text-xs sm:text-sm 
        font-semibold 
        uppercase 
        tracking-wider 
        text-[#FF0033]
        ">
                Contact Us
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

            className="
      mt-5 sm:mt-6
      text-center
      text-3xl
      sm:text-4xl
      md:text-5xl
      font-extrabold
      text-white
      leading-tight
      "
          >

            Join Our

            <span className="block text-[#FF0033]">
              Academy Today
            </span>

          </motion.h2>



          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}

            className="
      mt-5 sm:mt-6
      max-w-3xl
      mx-auto
      text-center
      text-sm
      sm:text-base
      md:text-lg
      text-slate-300
      leading-7
      sm:leading-8
      "
          >

            Start your learning journey with Amir Math & Science Academy.
            Apply now and our team will contact you for further details.

          </motion.p>




          <div className="
    mt-10 sm:mt-16
    grid
    grid-cols-1
    lg:grid-cols-2
    gap-10
    lg:gap-12
    items-start
    ">


            {/* Left Side */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >


              <h3 className="
        text-3xl
        sm:text-4xl
        font-bold
        text-white
        leading-tight
        ">

                Ready to Join

                <span className="block text-[#FF0033]">
                  Amir Math & Science Academy?
                </span>

              </h3>



              <p className="
        mt-5
        sm:mt-6
        text-sm
        sm:text-base
        text-slate-300
        leading-7
        sm:leading-8
        ">

                Take the first step toward academic success. Our experienced
                teachers, concept-based learning, and regular assessments help
                students build confidence and achieve excellent results.

              </p>




              {/* Features */}

              <div className="mt-8 sm:mt-10 space-y-4 sm:space-y-5">

                {features.map((feature, index) => (

                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.15
                    }}

                    className="
          flex
          items-start
          gap-3 sm:gap-4
          "
                  >

                    <FaCheckCircle
                      className="
            text-[#FF0033]
            text-lg
            sm:text-xl
            mt-1
            shrink-0
            "
                    />


                    <span className="
            text-white
            text-sm
            sm:text-lg
            ">
                      {feature}
                    </span>


                  </motion.div>

                ))}

              </div>




              {/* Contact */}

              <div className="mt-8 sm:mt-12 space-y-5">

                {contactInfo.map((item, index) => (

                  <motion.div
                    key={index}
                    className="
          flex
          items-center
          gap-3 sm:gap-4
          "
                  >

                    <div className="
            w-10 h-10
            sm:w-12 sm:h-12
            rounded-full
            bg-[#FF0033]/10
            flex
            items-center
            justify-center
            text-[#FF0033]
            "
                    >
                      {item.icon}
                    </div>


                    <div>

                      <h4 className="
              text-white
              text-sm
              sm:text-base
              font-semibold
              ">
                        {item.title}
                      </h4>


                      <p className="
              text-slate-400
              text-sm
              ">
                        {item.value}
                      </p>

                    </div>


                  </motion.div>

                ))}


              </div>


            </motion.div>





            {/* Form */}

            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}

              className="
      bg-white/5
      border
      border-white/10
      rounded-3xl
      p-5
      sm:p-8
      backdrop-blur-xl
      hover:border-[#FF0033]/40
      transition-all
      "
            >


              <h3 className="
        text-2xl
        sm:text-3xl
        font-bold
        text-white
        ">
                Admission Form
              </h3>


              <p className="
        mt-3
        text-sm
        sm:text-base
        text-slate-300
        ">
                Fill out the form and our team will contact you soon.
              </p>



              <form className="mt-6 sm:mt-8 space-y-4 sm:space-y-5">


                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
                />


                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
                />



                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
                />



                <select
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none"
                >

                  <option className="text-black">
                    Select Class
                  </option>

                  <option className="text-black">
                    Grade 1-5
                  </option>

                  <option className="text-black">
                    Grade 6-10
                  </option>

                  <option className="text-black">
                    Intermediate
                  </option>

                </select>




                <textarea
                  rows="4"
                  placeholder="Message"
                  className="w-full px-4 sm:px-5 py-3 sm:py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
                />




                <button
                  type="submit"
                  className="
          w-full
          py-3 sm:py-4
          rounded-xl
          bg-[#FF0033]
          text-white
          font-semibold
          text-base sm:text-lg
          "
                >

                  Apply Now →

                </button>


              </form>


            </motion.div>



          </div>

        </div>


      </section>
      {/* Google Map Section */}
      <section className="py-24
       bg-[#0B1120]">
        <div className="max-w-7xl 
        mx-auto px-6">

          <div className="text-center">
            <span className="inline-flex
            items-center
            gap-2 px-5 py-2 
            rounded-full bg-[#FF0033]/10
            border border-[#FF0033]/30
            text-[#FF0033]
            font-semibold
            uppercase
            tracking-wider">

              ✦ Find Us
            </span>

            <h2 className="mt-6 text-4xl
             md:text-5xl
             font-extrabold
             text-white">
              Visit Our
              <span className="block 
              text-[#FF0033]">
                Academy
              </span>
            </h2>

            <p className="mt-6 max-w-2xl
             mx-auto
             text-slate-300
             leading-8">
              Visit Amir Math & Science Academy to explore our classrooms,
              meet our experienced teachers, and learn more about our
              academic programs.
            </p>
          </div>
          <div>
            <iframe
              title="Academy Location"
              src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
              width="100%"
              height="500"
              loading="lazy"
              className="w-full"
            >
            </iframe>
          </div>
        </div>
      </section>

      {/* Office Hours */}
      <section className="py-24 bg-[#111827]">
        <div className="max-w-7xl
         mx-auto px-6">

          {/* Badge */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="flex justify-center"
          >

            <div className="inline-flex
             items-center
              gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
              <FaClock className="text-[#FF0033]" />

              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
                Office Hours
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
            className="mt-6 text-center text-4xl md:text-5xl font-extrabold text-white"
          >
            We're Available

            <span className="block text-[#FF0033]">
              Every Week
            </span>
          </motion.h2>

          {/* Description */}
          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-6 max-w-2xl mx-auto text-center text-slate-300 leading-8"
          >
            Visit our academy during office hours or contact us anytime for admission guidance.
          </motion.p>

          {/* Cards */}
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                day: "Monday - Friday",
                time: "3:00 PM - 9:00 PM",
              },
              {
                day: "Saturday",
                time: "10:00 AM - 6:00 PM",
              },
              {
                day: "Sunday",
                time: "Closed",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.2,
                }}
                whileHover={{
                  y: -8,
                  scale: 1.03,
                }}
                className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center hover:border-[#FF0033]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto rounded-full bg-[#FF0033]/10 flex items-center justify-center text-[#FF0033] text-2xl">
                  <FaClock />
                </div>

                <h3 className="mt-6 text-2xl font-bold text-white">
                  {item.day}
                </h3>

                <p className="mt-4 text-[#FF0033] text-xl font-semibold">
                  {item.time}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 sm:py-20
       lg:py-24 bg-[#0B1120]">
        <div className="max-w-6xl
         mx-auto px-4 
         sm:px-6">

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
      relative 
      overflow-hidden 
      rounded-[30px]
      sm:rounded-[40px]
      border 
      border-white/10 
      bg-gradient-to-r 
      from-[#FF0033]/20 
      via-[#111827] 
      to-[#0B1120] 
      p-6
      sm:p-10
      md:p-16
      text-center
      "
          >

            {/* Background Glow */}
            <div className="
      absolute 
      -top-20 
      left-1/2 
      -translate-x-1/2 
      w-[250px]
      h-[250px]
      sm:w-[400px]
      sm:h-[400px]
      rounded-full 
      bg-[#FF0033]/20 
      blur-[100px]
      sm:blur-[150px]
      ">
            </div>


            <div className="relative z-10">


              {/* Badge */}
              <span className="
        inline-flex 
        items-center 
        gap-2 
        px-4
        sm:px-5
        py-2 
        rounded-full 
        bg-[#FF0033]/10 
        border 
        border-[#FF0033]/30 
        text-[#FF0033] 
        text-xs
        sm:text-sm
        font-semibold 
        uppercase 
        tracking-wider
        ">
                ✦ Admissions Open
              </span>



              {/* Heading */}
              <h2 className="
        mt-5
        sm:mt-6
        text-3xl
        sm:text-4xl
        md:text-5xl
        lg:text-6xl
        font-extrabold 
        text-white 
        leading-tight
        break-words
        ">

                Start Your Journey

                <span className="block text-[#FF0033]">
                  With Us Today
                </span>

              </h2>



              {/* Description */}
              <p className="
        mt-5
        sm:mt-6
        max-w-2xl 
        mx-auto 
        text-sm
        sm:text-base
        md:text-lg
        text-slate-300 
        leading-7
        sm:leading-8
        ">
                Join Amir Math & Science Academy and learn from experienced teachers in
                a friendly environment designed for academic excellence.
              </p>



              {/* Buttons */}
              <div className="
        mt-8
        sm:mt-10
        flex
        flex-col
        sm:flex-row
        justify-center
        gap-4
        sm:gap-5
        ">


                <button className="
          w-full
          sm:w-auto
          px-6
          sm:px-8
          py-3.5
          sm:py-4
          rounded-xl 
          bg-[#FF0033] 
          text-white 
          font-semibold 
          hover:scale-105 
          transition-all 
          duration-300
          ">
                  Apply for Admission
                </button>



                <button className="
          w-full
          sm:w-auto
          px-6
          sm:px-8
          py-3.5
          sm:py-4
          rounded-xl 
          border 
          border-white/20 
          text-white 
          hover:border-[#FF0033] 
          hover:text-[#FF0033] 
          transition-all 
          duration-300
          ">
                  Contact Us
                </button>


              </div>


            </div>


          </motion.div>

        </div>
      </section>
    </>
  );
};

export default Contact;