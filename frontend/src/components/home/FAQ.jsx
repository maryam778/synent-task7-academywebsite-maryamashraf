import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

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

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-24 bg-[#111827]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Badge */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">
            <span className="text-[#FF0033] text-lg">✦</span>

            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              FAQ
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
          className="mt-6 text-center text-4xl md:text-5xl lg:text-6xl font-extrabold text-white"
        >
          Frequently Asked

          <span className="block text-[#FF0033]">
            Questions
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 max-w-3xl mx-auto text-center text-base md:text-lg leading-8 text-slate-300"
        >
          Find answers to the most commonly asked questions about our academy,
          courses, admissions, and learning environment.
        </motion.p>

        {/* FAQ List */}
        <div className="mt-16 space-y-5">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-[#FF0033]/50 transition-all duration-300"
            >
              {/* Question */}
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full flex justify-between items-center p-6 text-left"
              >
                <h3 className="text-lg md:text-xl font-semibold text-white">
                  {faq.question}
                </h3>

                <motion.span
                  animate={{
                    rotate: openIndex === index ? 180 : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="text-[#FF0033] text-3xl font-bold"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </button>

              {/* Answer */}
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.35,
                    }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6">
                      <p className="text-slate-300 leading-7">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;