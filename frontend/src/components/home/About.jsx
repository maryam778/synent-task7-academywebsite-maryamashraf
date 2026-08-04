import {
  FaChalkboardTeacher,
  FaBookOpen,
  FaUserGraduate,
  FaTrophy,
} from "react-icons/fa";
import AboutImg from "../../assets/images/aboutImg.png"


const About = () => {
  return (
    <section className="bg-[#0B1120] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side */}
          <div className="relative flex justify-center items-center">
            {/* Glow Effect */}
            <div className="absolute w-[420px] h-[420px] md:w-[360px] md:h-[360px] 
            lg:w-[420px] lg:h-[420px] rounded-full bg-gradient-to-br from-[#FF0033]/25 via-[#7C3AED]/20 to-[#2563EB]/20 blur-[140px]">
            </div>
            {/* Main Image */}
            <div
              className="relative z-10 w-[320px] h-[420px] md:w-[380px] md:h-[500px] lg:w-[450px] lg:h-[560px] 
              rounded-[36px] overflow-hidden border border-white/10 shadow-2xl"
            >
              <img
                src={AboutImg}
                alt="Students in Classroom"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            {/* Floating Card 1 */}
            <div className="space-y-4 absolute left-4 bottom-6 lg:left-0 lg:bottom-10 bg-[#111827]/90 hover:translate-y-2 
            hover:border-[#FF0033]/40 transition-all duration-300 backdrop-blur-md border border-white/10 rounded-2xl px-5
             py-4 shadow-2xl z-20">
              <FaUserGraduate className="text-[#FF0033] text-2xl mb-2" />
              <h3 className="text-2xl font-bold text-white">
                500+
              </h3>

              <p className="text-sm text-slate-300">
                Happy Students
              </p>
            </div>
            {/* Floating Card 2 */}
            <div className="space-y-4 absolute right-2 top-6 md:right-0 md:top-10 bg-[#111827]/90  hover:translate-y-2 
            hover:border-[#FF0033]/40 transition-all duration-300 backdrop-blur-md border
            border-white/10 rounded-2xl px-5 py-4 md:px-6 md:py-5 shadow-2xl z-20">
              <FaTrophy className="text-[#FF0033] text-2xl mb-2" />
              <h3 className="text-2xl font-bold text-white">
                98%
              </h3>

              <p className="text-sm text-slate-300">
                Success Rate
              </p>
            </div>
          </div>

          {/* Right Side */}

          <div className="space-y-6">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border  border-[#FF0033]/30">
              <span className="text-[#FF0033] text-lg">
                ✦
              </span>
              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
                About Our Academy
              </span>
            </div>
            {/* Heading */}
            <h2 className="max-w-xl text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
              Empowering Students
              <span className="block text-[#FF0033]">
                Through Quality Education
              </span>
            </h2>
            {/* Description */}
            <p className="max-w-xl text-base md:text-lg leading-8 text-slate-300">
              Amir Math & Science Academy is committed to providing
              quality education through experienced teachers, modern
              teaching methods, and a supportive learning environment
              that helps every student achieve academic excellence.
            </p>
            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF0033]/50
              hover:bg-white/10 transition-all duration-300">
                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl bg-[#FF0033]/10 flex items-center justify-center shrink-0">
                  <FaChalkboardTeacher
                    className="text-[#FF0033] text-xl"
                  />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Expert Teachers
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Learn from qualified and experienced educators.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#FF0033]/50
              hover:bg-white/10 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FF0033]/10 
                flex items-center justify-center shrink-0">
                  <FaChalkboardTeacher
                    className="text-[#FF0033] text-xl"
                  />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Modern Learning
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Interactive classrooms with modern teaching methods and practical learning.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-text/10
              hover:border-[#FF0033]/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FF0033]/10 flex items-center justify-center shrink-0">
                  <FaChalkboardTeacher
                    className="text-[#FF0033] text-xl"
                  />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Personalized Guidance
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Individual attention to help every student improve and achieve success.
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-text/10
              hover:border-[#FF0033]/50 transition-all duration-300">
                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-[#FF0033]/10 flex items-center justify-center shrink-0">
                  <FaChalkboardTeacher
                    className="text-[#FF0033] text-xl"
                  />
                </div>
                {/* Text */}
                <div>
                  <h3 className="text-white font-semibold text-lg">
                    Excellent Results
                  </h3>
                  <p className="text-slate-400 text-sm mt-1">
                    Consistent academic excellence with outstanding student achievements.
                  </p>
                </div>
              </div>
            </div>
            {/* Button */}

            <div className="pt-4">
              <button
                className="bg-[#FF0033] text-white
    px-8 py-3 rounded-full
    font-semibold
    shadow-lg
    transition-all duration-300
    hover:bg-[#FF1F4D]
    hover:scale-105"
              >
                Learn More
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;