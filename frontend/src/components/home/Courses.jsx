import primaryClass from "../../assets/images/primaryClass.png";
import middleClass from "../../assets/images/middleClass.png";
import matricClass from "../../assets/images/matricClass.png";
import collegeClass from "../../assets/images/collegeClass.png";
import exams from "../../assets/images/exams.png";
import lab from "../../assets/images/lab.png";
import { useState } from "react";

const Courses = () => {
  const courses = [
    {
      images: primaryClass,
      Badge: "Classes 1–5",
      title: "Primary Education",
      description:
        "Build a strong academic foundation through engaging lessons and concept-based learning.",
    },
    {
      images: middleClass,
      Badge: "Classes 9–10",
      title: "Middle School Program",
      description:
        "Strengthen Mathematics and Science concepts with interactive learning and expert teachers.",
    },
    {
      images: matricClass,
      Badge: "Classes 6–8",
      title: "Matric Excellence",
      description:
        "Prepare for board exams with regular practice, revision sessions, and expert guidance.",
    },
    {
      images: collegeClass,
      Badge: "Classes 11–12",
      title: "Intermediate Program",
      description:
        "Advanced learning with specialized teaching and focused exam preparation.",
    },
    {
      images: lab,
      Badge: "Special Program",
      title: "Concept Building",
      description:
        "Develop strong concepts through interactive teaching and personalized guidance.",
    },
    {
      images: exams,
      Badge: "Assessment Program",
      title: "Weekly Tests & Exam Preparation",
      description:
        "Boost confidence with weekly assessments, mock exams, and smart revision strategies.",
    },
  ];

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <section className="py-24 bg-[#0B1120]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
            <span className="text-[#FF0033] text-lg">✦</span>
            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              Our Courses
            </span>
          </div>
        </div>

        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight text-white">
          Explore Our
          <span className="block text-[#FF0033]">Popular Courses</span>
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300">
          We offer comprehensive Mathematics and Science courses designed for
          students from middle school to intermediate level, helping them
          achieve academic excellence through experienced teachers and modern
          teaching methods.
        </p>

        {/* Courses Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group overflow-hidden rounded-3xl bg-white/5 border border-white/10 shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:border-[#FF0033]/50"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={course.images}
                  alt={course.title}
                  onClick={() => setSelectedImage(course.images)}
                  className="w-full h-60 object-cover transition-transform duration-700 group-hover:scale-110 cursor-pointer"
                />
              </div>

              {/* Content */}
              <div className="p-7">
                <span className="inline-block px-4 py-2 rounded-full bg-[#FF0033]/10 text-[#FF0033] text-sm font-semibold uppercase tracking-wider">
                  {course.Badge}
                </span>

                <h3 className="mt-5 text-2xl font-bold text-white">
                  {course.title}
                </h3>

                <p className="mt-4 text-slate-300 leading-7">
                  {course.description}
                </p>

                <button className="mt-6 text-[#FF0033] font-semibold transition-all duration-300 group-hover:translate-x-2">
                  Learn More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-8 text-white text-5xl font-bold hover:text-[#FF0033]"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt="Course"
            onClick={(e) => e.stopPropagation()}
            className="max-w-5xl w-[90%] max-h-[90vh] rounded-2xl shadow-2xl"
          />
        </div>
      )}
    </section>
  );
};

export default Courses;