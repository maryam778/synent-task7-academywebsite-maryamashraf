import teacher1 from "../../assets/images/teacherImg1.png";
import teacher2 from "../../assets/images/teacherImg2.png";
import teacher3 from "../../assets/images/teacherImg3.png";
import teacher4 from "../../assets/images/teacherImg5.png";




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
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
            <span className="text-[#FF0033] text-lg">✦</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              Our Faculty
            </span>
          </div>
        </div>
        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          Meet Our
          <span className="block text-[#FF0033]">
            Expert Teachers
          </span>
        </h2>
        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300">
          Our experienced teachers are committed to inspiring students,
          strengthening concepts, and guiding them toward academic excellence
          through quality education and personalized support.
        </p>
        {/* Teachers Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teachers.map((teacher, index) => (
            <div key={index}
              className="group cursor-pointer overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500
          hover:-translate-y-2 hover:border-[#FF0033]/50">

              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-80 object-cover transition-all duration-700 group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent opacity-70"></div>

                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full bg-[#FF0033] text-white text-sm font-semibold">
                    {teacher.subject}
                  </span>
                </div>
              </div>
              <div className="h-1 w-0 bg-[#FF0033] transition-all duration-500 group-hover:w-full"></div>
              {/* Content */}
              <div className="p-7">

                {/* Experience */}
                <span className="inline-block px-4 py-2 rounded-full bg-[#FF0033]/10 text-[#FF0033] text-sm font-semibold uppercase tracking-wider">
                  {teacher.experience}
                </span>

                {/* Name */}
                <h3 className="mt-5 text-2xl font-bold text-white transition-colors duration-300 group-hover:text-[#FF0033]">
                  {teacher.name}
                </h3>

                {/* Description */}
                <p className="mt-4 text-slate-300 leading-7 text-justify">
                  {teacher.description}
                </p>
                {/* Button */}
                <button className="mt-6 flex items-center gap-2 text-[#FF0033] font-semibold transition-all duration-300 group-hover:gap-4">
                  <span>View Profile</span>
                  <span>→</span>
                </button>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Teachers;