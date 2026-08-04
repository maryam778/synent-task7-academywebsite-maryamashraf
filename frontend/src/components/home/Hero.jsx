import studImg from "../../assets/images/students.png";

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
          <div className="space-y-5">

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2
              px-5 py-2 rounded-full
              bg-[#FF0033]/10
              border border-[#FF0033]/30"
            >
              <span className="text-[#FF0033]">✦</span>

              <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
                Trusted Amir Math & Science Academy
              </span>
            </div>

            {/* Heading */}
            <h1
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
            </h1>

            {/* Description */}
            <p
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
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">

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

            </div>

            {/* Stats */}
            <div className="flex gap-10 pt-2">

              <div>
                <h2 className="text-3xl font-bold text-white">
                  500+
                </h2>

                <p className="text-slate-400">
                  Students
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  25+
                </h2>

                <p className="text-slate-400">
                  Teachers
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white">
                  98%
                </h2>

                <p className="text-slate-400">
                  Success
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative flex justify-center items-center">

            {/* Glow */}
            <div
              className="absolute
              w-[380px]
              h-[380px]
              rounded-full
              bg-gradient-to-br
              from-[#FF0033]/30
              via-[#7C3AED]/20
              to-[#2563EB]/20
              blur-3xl"
            ></div>

            {/* Image */}
            <div
              className="relative z-10
              w-[400px]
              h-[460px]
              rounded-[35px]
              overflow-hidden
              border border-white/10
              shadow-2xl"
            >
              <img
                src={studImg}
                alt="Student"
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;