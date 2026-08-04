import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaAward,
  FaSchool,
} from "react-icons/fa";

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
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30 ">
            <span className="text-[#FF0033] text-lg">
              ✦
            </span>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              Our Achievements
            </span>
          </div>
        </div>
        <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight tracking-tight">
          Excellence In
          <span className="block text-[#FF0033]">
            Numbers
          </span>
        </h2>
        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg text-slate-300 leading-8">
          We are proud of our journey and the achievements of our students.
          Our commitment to quality education continues to inspire academic
          excellence every year.
        </p>
      </div>
      {/* Achievement Cards */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {achievements.map((achievements, index) => (
          <div key={index}
            className="group bg-white/5  border border-white/10 rounded-3xl p-8 text-center transition-all diuration-500
            hover:-translate-y-2 hover:border-[#FF0033]/50 hover:bg-white/10">
            <div className="w-16 h-16 rounded-2xl mx-auto bg-[#FF0033]/10 flex items-center justify-center text-[#FF0033]
               text-3xl transition-all duration-300 group-hover:scale-110">
              {achievements.icon}
            </div>
            <h3 className="mt-6 text-5xl font-extrabold text-white transition-colors duration-300 group-hover:text-[#FF0033]">
              {achievements.number}
            </h3>
            <p className="mt-3 text-lg font-medium text-slate-300">
              {achievements.title}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;