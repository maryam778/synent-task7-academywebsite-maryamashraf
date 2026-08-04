import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaCheckCircle,
} from "react-icons/fa";

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
    <section className="py-24 bg-[#111827]">

      <div className="max-w-7xl mx-auto px-6">


        {/* Badge */}
        <div className="flex justify-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#FF0033]/10 border border-[#FF0033]/30">

            <span className="text-[#FF0033] text-lg">
              ✦
            </span>

            <span className="text-sm font-semibold uppercase tracking-wider text-[#FF0033]">
              Contact Us
            </span>

          </div>
        </div>


        {/* Heading */}
        <h2 className="mt-6 text-center text-4xl md:text-5xl font-extrabold text-white">

          Join Our

          <span className="block text-[#FF0033]">
            Academy Today
          </span>

        </h2>


        {/* Description */}
        <p className="mt-6 max-w-3xl mx-auto text-center text-slate-300 leading-8">

          Start your learning journey with Amir Math & Science Academy.
          Apply now and our team will contact you for further details.

        </p>



        {/* Two Column Layout */}

        <div className="mt-16 grid lg:grid-cols-2 gap-16 items-start">


          {/* Left Side */}

          <div>

            <h3 className="text-4xl font-bold text-white leading-tight">

              Ready to Join

              <span className="block text-[#FF0033]">
                Amir Math & Science Academy?
              </span>

            </h3>


            <p className="mt-6 text-slate-300 leading-8">

              Take the first step toward academic success. Our experienced
              teachers, concept-based learning, and regular assessments help
              students build confidence and achieve excellent results.

            </p>



            {/* Features */}

            <div className="mt-10 space-y-5">

              {features.map((feature, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <FaCheckCircle className="text-[#FF0033] text-xl" />


                  <span className="text-white text-lg">
                    {feature}
                  </span>


                </div>

              ))}

            </div>



            {/* Contact Info */}

            <div className="mt-12 space-y-5">

              {contactInfo.map((item, index) => (

                <div
                  key={index}
                  className="flex items-center gap-4"
                >

                  <div className="w-12 h-12 rounded-full bg-[#FF0033]/10 flex items-center justify-center text-[#FF0033] text-xl">

                    {item.icon}

                  </div>


                  <div>

                    <h4 className="text-white font-semibold">
                      {item.title}
                    </h4>


                    <p className="text-slate-400">
                      {item.value}
                    </p>

                  </div>


                </div>

              ))}

            </div>


          </div>




          {/* Right Side Admission Form */}


          <div className="bg-white/5 border border-white/10 rounded-3xl p-8">


            <h3 className="text-3xl font-bold text-white">
              Admission Form
            </h3>


            <p className="mt-3 text-slate-300">
              Fill out the form and our team will contact you soon.
            </p>



            <form className="mt-8 space-y-5">


              <input
                type="text"
                name="name"
                required
                placeholder="Full Name"
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
              />



              <input
                type="tel"
                name="phone"
                required
                placeholder="Phone Number"
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
              />



              <input
                type="email"
                name="email"
                placeholder="Email Address"
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
              />



              <select
                name="class"
                required
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white outline-none focus:border-[#FF0033]"
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
                name="message"
                rows="4"
                placeholder="Message"
                className="w-full px-5 py-4 rounded-xl bg-white/10 border border-white/10 text-white placeholder:text-slate-400 outline-none focus:border-[#FF0033]"
              />



              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-[#FF0033] text-white font-semibold text-lg hover:opacity-90 transition"
              >

                Apply Now →

              </button>


            </form>


          </div>


        </div>


      </div>


    </section>
  );
};


export default Contact;