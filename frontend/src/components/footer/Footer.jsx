import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

import { motion } from "framer-motion";

const Footer = () => {
  const footerAnimation = {
    hidden: {
      opacity: 0,
      y: 40,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <footer className="bg-[#0B1120] border-t border-white/10">

      <div className="max-w-7xl mx-auto px-6 py-16">

        <motion.div
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-10"
        >


          {/* Column 1 */}
          <motion.div variants={footerAnimation}>

            <h2 className="text-3xl font-bold text-white">
              Amir Math
              <span className="block text-[#FF0033]">
                & Science Academy
              </span>
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              Empowering students through quality education,
              experienced teachers, and concept-based learning.
            </p>

          </motion.div>



          {/* Column 2 */}
          <motion.div variants={footerAnimation}>

            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-4">

              {[
                "Home",
                "About",
                "Courses",
                "Teachers",
                "Gallery",
                "Contact",
              ].map((item,index)=>(
                <li key={index}>
                  <a
                    href="#"
                    className="text-slate-400 hover:text-[#FF0033] transition"
                  >
                    {item}
                  </a>
                </li>
              ))}

            </ul>

          </motion.div>




          {/* Column 3 */}
          <motion.div variants={footerAnimation}>

            <h3 className="text-xl font-semibold text-white">
              Contact Info
            </h3>


            <div className="mt-6 space-y-5">


              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#FF0033] text-xl"/>
                <span className="text-slate-400">
                  Lahore, Pakistan
                </span>
              </div>


              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-[#FF0033] text-xl"/>
                <span className="text-slate-400">
                  +92 300 1234567
                </span>
              </div>


              <div className="flex items-center gap-3">
                <FaEnvelope className="text-[#FF0033] text-xl"/>
                <span className="text-slate-400">
                  info@amirmathacademy.com
                </span>
              </div>


            </div>

          </motion.div>





          {/* Column 4 */}
          <motion.div variants={footerAnimation}>

            <h3 className="text-xl font-semibold text-white">
              Follow Us
            </h3>


            <p className="mt-5 text-slate-400">
              Stay connected with us on social media.
            </p>


            <div className="flex gap-4 mt-6">


              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF0033] transition flex items-center justify-center text-white"
              >
                <FaFacebookF/>
              </a>


              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF0033] transition flex items-center justify-center text-white"
              >
                <FaInstagram/>
              </a>


              <a
                href="#"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF0033] transition flex items-center justify-center text-white"
              >
                <FaLinkedinIn/>
              </a>


            </div>

          </motion.div>


        </motion.div>





        {/* Bottom Footer */}

        <motion.div
          initial={{
            opacity:0,
            y:30
          }}
          whileInView={{
            opacity:1,
            y:0
          }}
          viewport={{
            once:true
          }}
          transition={{
            duration:0.6,
            delay:0.5
          }}
          className="mt-16 pt-8 border-t border-white/10 text-center"
        >

          <p className="text-slate-400">
            © 2026 Amir Math & Science Academy. All Rights Reserved.
          </p>

        </motion.div>


      </div>

    </footer>
  );
};

export default Footer;