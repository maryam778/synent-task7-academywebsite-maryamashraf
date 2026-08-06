import teacherHero from "../assets/images/teacherImg2.png";
import { motion } from "framer-motion";
import teacher1 from "../assets/images/teacherImg1.png";
import teacher2 from "../assets/images/teacherImg2.png";
import teacher3 from "../assets/images/teacherImg3.png";
import teacher4 from "../assets/images/teacherImg5.png";
import {
  FaBookOpen,
  FaUserGraduate,
  FaChalkboardTeacher,
  FaLightbulb
} from "react-icons/fa";

const Teachers = () => {
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
      image: teacher4,
      name: "Ali Hassan",
      subject: "Chemistry",
      experience: "7+ Years",
      description:
        "Focused on strong concepts and excellent board exam preparation.",
    },
    {
      image: teacher3,
      name: "Sara Noor",
      subject: "Biology",
      experience: "5+ Years",
      description:
        "Encouraging students to learn with confidence and curiosity.",
    },
  ];

  return (
    <>
      {/* Hero Banner */}
      <section className="
relative 
overflow-hidden 
py-16 
sm:py-20 
lg:py-24 
bg-[#0B1120]
flex 
items-center
">

        <div className="
max-w-7xl 
mx-auto 
px-5 
sm:px-6 
lg:px-8
">


          <div className="
grid 
grid-cols-1
lg:grid-cols-2
items-center
gap-12
lg:gap-16
">



            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >


              {/* Badge */}

              <div className="
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
">

                <span className="text-[#FF0033]">
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
                  Meet Our Teachers
                </span>


              </div>





              {/* Heading */}

              <h1 className="
mt-5
sm:mt-6

text-3xl
sm:text-4xl
md:text-5xl
lg:text-6xl

font-extrabold
leading-tight

text-white
">

                Learn From

                <span className="block text-[#FF0033]">
                  Expert Teachers
                </span>

              </h1>






              {/* Description */}

              <p className="
mt-5
sm:mt-6

max-w-xl

text-sm
sm:text-base
md:text-lg

leading-7
sm:leading-8

text-slate-300
">

                Our experienced and dedicated teachers focus on concept-based
                learning, helping every student achieve academic excellence
                through personalized guidance and modern teaching methods.

              </p>






              {/* Buttons */}

              <div className="
mt-8
flex
flex-col
sm:flex-row
gap-4
">


                <button
                  className="
bg-[#FF0033]
rounded-xl
px-7
py-3
sm:px-8
sm:py-4

text-white
font-semibold

hover:scale-105
transition-all
"
                >

                  Meet Our Team

                </button>



                <button
                  className="
px-7
py-3
sm:px-8
sm:py-4

rounded-xl

border
border-white/20

text-white

hover:border-[#FF0033]
hover:text-[#FF0033]

transition-all
"
                >

                  Contact Us

                </button>


              </div>



            </motion.div>







            {/* Right Image */}


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

lg:w-[500px]
lg:h-[500px]

rounded-full

bg-[#FF0033]/25

blur-[100px]
"
              />





              {/* Image */}

              <motion.img

                src={teacherHero}

                alt="Teachers"

                initial={{ scale: 0.85 }}

                whileInView={{ scale: 1 }}

                viewport={{ once: true }}

                transition={{ duration: 0.8 }}


                className="
relative
z-10

w-[280px]
h-[350px]

sm:w-[350px]
sm:h-[420px]

lg:w-[430px]
lg:h-[500px]

object-cover

rounded-[30px]

shadow-2xl

border
border-white/10

transition-all
duration-500
"

              />








              {/* Floating Card 1 */}

              <div
                className="
absolute

left-0
sm:left-2
lg:left-[-30px]

bottom-5

z-20

bg-[#111827]/90

backdrop-blur-md

border
border-white/10

rounded-2xl

px-4
sm:px-6

py-3
sm:py-4

shadow-2xl
"
              >

                <FaChalkboardTeacher
                  className="
text-[#FF0033]
text-xl
sm:text-2xl
mb-2
"
                />

                <h3 className="
text-xl
sm:text-2xl
font-bold
text-white
">

                  15+

                </h3>


                <p className="
text-slate-300
text-xs
sm:text-sm
">

                  Expert Teachers

                </p>


              </div>







              {/* Floating Card 2 */}

              <div
                className="
absolute

right-0
sm:right-2
lg:right-[-30px]

top-5

z-20

bg-[#111827]/90

backdrop-blur-md

border
border-white/10

rounded-2xl

px-4
sm:px-6

py-3
sm:py-4

shadow-2xl
"
              >


                <FaUserGraduate
                  className="
text-[#FF0033]
text-xl
sm:text-2xl
mb-2
"
                />


                <h3 className="
text-xl
sm:text-2xl
font-bold
text-white
">

                  500+

                </h3>


                <p className="
text-slate-300
text-xs
sm:text-sm
">

                  Happy Students

                </p>


              </div>




            </motion.div>



          </div>


        </div>


      </section>
      {/* Teachers Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#111827]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">


          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
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

              <span className="text-[#FF0033] text-lg">
                ✦
              </span>

              <span className="
        text-xs sm:text-sm 
        font-semibold 
        uppercase 
        tracking-wider 
        text-[#FF0033]
        ">
                Our Faculty
              </span>

            </div>
          </motion.div>




          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
      mt-6 
      text-center 
      text-3xl 
      sm:text-4xl 
      md:text-5xl 
      lg:text-6xl 
      font-extrabold 
      text-white
      leading-tight
      "
          >

            Meet Our

            <span className="block text-[#FF0033]">
              Expert Teachers
            </span>

          </motion.h2>




          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
      mt-5 sm:mt-6 
      max-w-3xl 
      mx-auto 
      text-center 
      text-sm 
      sm:text-base 
      md:text-lg 
      leading-7 
      sm:leading-8 
      text-slate-300
      "
          >
            Our experienced teachers are committed to inspiring students,
            strengthening concepts, and guiding them toward academic excellence
            through quality education and personalized support.
          </motion.p>




          {/* Cards */}
          <div className="
    mt-10 sm:mt-14 lg:mt-16 
    grid 
    grid-cols-1 
    sm:grid-cols-2 
    lg:grid-cols-4 
    gap-5 
    sm:gap-6 
    lg:gap-8
    ">


            {teachers.map((teacher, index) => (

              <motion.div
                key={index}

                initial={{
                  opacity: 0,
                  y: 50
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
          cursor-pointer 
          overflow-hidden
          rounded-3xl 
          bg-white/5 
          border 
          border-white/10 
          shadow-xl
          hover:shadow-2xl
          transition-all 
          duration-500
          hover:-translate-y-3
          hover:border-[#FF0033]/50
          "
              >



                {/* Image */}

                <div className="relative overflow-hidden">


                  <img
                    src={teacher.image}
                    alt={teacher.name}

                    className="
              w-full
              h-[280px]
              sm:h-[320px]
              lg:h-[360px]
              object-cover
              transition 
              duration-700
              group-hover:scale-110
              "
                  />



                  {/* Overlay */}

                  <div className="
            absolute 
            inset-0
            bg-gradient-to-t 
            from-[#0B1120]
            via-transparent
            to-transparent
            opacity-70
            ">
                  </div>




                  {/* Subject */}

                  <div className="absolute top-3 sm:top-4 left-3 sm:left-4">

                    <span className="
              px-3 sm:px-4 
              py-1.5 sm:py-2
              rounded-full
              bg-[#FF0033]
              text-white
              text-xs sm:text-sm
              font-semibold
              ">
                      {teacher.subject}
                    </span>

                  </div>


                </div>





                {/* Red Line */}

                <div className="
          h-1 
          w-0 
          bg-[#FF0033]
          transition-all
          duration-500
          group-hover:w-full
          ">
                </div>






                {/* Content */}

                <div className="
          p-5 
          sm:p-6 
          lg:p-7
          ">


                  <span className="
            inline-block
            px-3 sm:px-4 
            py-1.5 sm:py-2
            rounded-full
            bg-[#FF0033]/10
            text-[#FF0033]
            text-xs sm:text-sm
            font-semibold
            ">
                    {teacher.experience}
                  </span>




                  <h3 className="
            mt-4 sm:mt-5
            text-xl
            sm:text-2xl
            font-bold
            text-white
            group-hover:text-[#FF0033]
            transition
            ">
                    {teacher.name}
                  </h3>




                  <p className="
            mt-3 sm:mt-4
            text-slate-300
            leading-7
            text-sm
            ">
                    {teacher.description}
                  </p>




                  <button className="
            mt-5 sm:mt-6
            text-[#FF0033]
            font-semibold
            flex 
            items-center 
            gap-2
            group-hover:gap-4
            transition-all
            ">
                    View Profile →
                  </button>



                </div>


              </motion.div>

            ))}


          </div>


        </div>
      </section>
      {/* Why Learn From Our Teachers */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#0B1120]">

        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">


            {/* Left Content */}

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >


              {/* Badge */}

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

                <span className="text-[#FF0033]">
                  ✦
                </span>

                <span className="
          text-xs sm:text-sm 
          font-semibold 
          uppercase 
          text-[#FF0033]
          ">
                  Why Choose Our Teachers
                </span>

              </div>




              {/* Heading */}

              <h2 className="
        mt-6
        text-3xl
        sm:text-4xl
        md:text-5xl
        font-extrabold
        text-white
        leading-tight
        ">

                Learn From The

                <span className="block text-[#FF0033]">
                  Best Educators
                </span>

              </h2>




              {/* Paragraph */}

              <p className="
        mt-5 sm:mt-6
        text-base
        sm:text-lg
        leading-7
        sm:leading-8
        text-slate-300
        ">

                Our teachers are passionate educators who focus on building
                strong concepts, improving problem-solving skills, and helping
                every student achieve their academic goals.

              </p>




              {/* Features */}

              <div className="
        mt-8
        space-y-5
        ">


                {/* Feature 1 */}

                <div className="flex gap-4 items-start">

                  <div className="
            w-12
            h-12
            shrink-0
            rounded-xl
            bg-[#FF0033]/10
            flex
            items-center
            justify-center
            ">

                    <FaBookOpen className="text-[#FF0033] text-xl" />

                  </div>


                  <div>

                    <h3 className="text-white text-base sm:text-lg font-semibold">
                      Concept Based Learning
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Strong concepts with practical examples and easy explanations.
                    </p>

                  </div>

                </div>





                {/* Feature 2 */}

                <div className="flex gap-4 items-start">

                  <div className="
            w-12
            h-12
            shrink-0
            rounded-xl
            bg-[#FF0033]/10
            flex
            items-center
            justify-center
            ">

                    <FaUserGraduate className="text-[#FF0033] text-xl" />

                  </div>


                  <div>

                    <h3 className="text-white text-base sm:text-lg font-semibold">
                      Personal Attention
                    </h3>

                    <p className="text-slate-400 text-sm mt-1">
                      Individual guidance to help every student improve.
                    </p>

                  </div>

                </div>


              </div>


            </motion.div>





            {/* Right Cards */}


            <motion.div

              initial={{ opacity: 0, x: 50 }}

              whileInView={{ opacity: 1, x: 0 }}

              viewport={{ once: true }}

              transition={{ duration: 0.7 }}

              className="
        grid
        grid-cols-1
        sm:grid-cols-2
        gap-5 sm:gap-6
        "

            >



              {/* Card 1 */}

              <div className="
        p-6 sm:p-7
        rounded-3xl
        bg-white/5
        border
        border-white/10
        hover:border-[#FF0033]/50
        transition
        ">

                <FaChalkboardTeacher
                  className="text-[#FF0033] text-3xl mb-5"
                />

                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Experienced Faculty
                </h3>

                <p className="mt-3 text-slate-400 text-sm leading-6">
                  Qualified teachers with years of teaching experience.
                </p>

              </div>






              {/* Card 2 */}

              <div className="
        p-6 sm:p-7
        rounded-3xl
        bg-white/5
        border
        border-white/10
        hover:border-[#FF0033]/50
        transition
        ">


                <FaLightbulb
                  className="text-[#FF0033] text-3xl mb-5"
                />


                <h3 className="text-lg sm:text-xl font-bold text-white">
                  Smart Teaching
                </h3>


                <p className="mt-3 text-slate-400 text-sm leading-6">
                  Modern methods to make learning easier and effective.
                </p>


              </div>



            </motion.div>



          </div>

        </div>

      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden py-24 bg-[#0B1120]">

        {/* Glow Background */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-[#FF0033]/20 blur-[120px] rounded-full"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative max-w-5xl mx-auto px-6 text-center"
        >

          {/* Badge */}
          <div className="flex justify-center">
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
              <span className="text-[#FF0033]">✦</span>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
                Join Our Academy
              </span>
            </div>
          </div>


          {/* Heading */}
          <h2 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight">
            Ready To Learn From
            <span className="block text-[#FF0033]">
              The Best Teachers?
            </span>
          </h2>


          {/* Description */}
          <p className="mt-6 max-w-3xl mx-auto text-lg leading-8 text-slate-300">
            Get expert guidance, quality education, and personalized support
            from our experienced faculty to achieve your academic goals.
          </p>


          {/* Buttons */}
          <div className="mt-10 flex flex-wrap justify-center gap-5">

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl bg-[#FF0033] text-white font-semibold shadow-xl"
            >
              Apply Now
            </motion.button>


            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 rounded-xl border border-white/20 text-white font-semibold hover:border-[#FF0033] hover:text-[#FF0033] transition-all"
            >
              Contact Us
            </motion.button>

          </div>


          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-6">

            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-4xl font-bold text-[#FF0033]">
                15+
              </h3>
              <p className="mt-2 text-slate-300">
                Expert Teachers
              </p>
            </div>


            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-4xl font-bold text-[#FF0033]">
                500+
              </h3>
              <p className="mt-2 text-slate-300">
                Students
              </p>
            </div>


            <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
              <h3 className="text-4xl font-bold text-[#FF0033]">
                10+
              </h3>
              <p className="mt-2 text-slate-300">
                Years Experience
              </p>
            </div>

          </div>

        </motion.div>

      </section>
    </>
  );
};

export default Teachers;