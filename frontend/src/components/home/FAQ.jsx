import { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const FAQ = () => {
  const faqs = [
  {
    question: "Which classes do you offer?",
    answer:
      "We provide classes from Grade 1 to Intermediate with a strong focus on Mathematics and Science.",
  },
  {
    question: "Do you prepare students for board exams?",
    answer:
      "Yes, we provide complete board exam preparation with regular tests and revision sessions.",
  },
  {
    question: "Do you offer weekly tests?",
    answer:
      "Yes, weekly assessments help students improve their concepts and exam performance.",
  },
  {
    question: "How can I get admission?",
    answer:
      "You can contact us through our website or visit the academy for the admission process.",
  },
];

const [openIndex , setOpenIndex] = useState(null);
  return (
   <section className="py-24 bg-[#111827]">
  <div className="max-w-7xl mx-auto px-6">

    {/* Badge */}
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
        <span className="text-[#FF0033] text-lg">✦</span>
        <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
          FAQ
        </span>
      </div>
    </div>

    {/* Heading */}
    <h2 className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white">
      Frequently Asked
      <span className="block text-[#FF0033]">
        Questions
      </span>
    </h2>

    {/* Description */}
    <p className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300">
      Find answers to the most commonly asked questions about our academy,
      courses, admissions, and learning environment.
    </p>

    {/* FAQ List */}
<div className="mt-16 space-y-5">
  {faqs.map((faq, index) => (
    <div
      key={index}
      className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden"
    >
      <button
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
        className="w-full flex justify-between items-center p-6 text-left"
      >
        <h3 className="text-lg md:text-xl font-semibold text-white">
          {faq.question}
        </h3>

        <span className="text-[#FF0033] text-3xl font-bold">
          {openIndex === index ? "-" : "+"}
        </span>
      </button> 
    <div
  className={`overflow-hidden transition-all duration-500 ${
    openIndex === index
      ? "max-h-40 opacity-100"
      : "max-h-0 opacity-0"
  }`}
>
  <div className="px-6 pb-6">
    <p className="text-slate-300 leading-7">
      {faq.answer}
    </p>
  </div>
</div>
    </div>
  ))}
</div>
  </div>
</section>
  );
};

export default FAQ;