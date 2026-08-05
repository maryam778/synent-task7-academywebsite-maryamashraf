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
      y: 40
    },

    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };



  return (

    <footer className="bg-[#0B1120] border-t border-white/10">


      <div className="
max-w-7xl 
mx-auto 
px-5 
sm:px-6 
lg:px-8

py-12 
sm:py-16
">


        <motion.div

          variants={{
            hidden: {},

            show: {
              transition: {
                staggerChildren: 0.2
              }
            }

          }}

          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}


          className="
grid

grid-cols-1
sm:grid-cols-2
lg:grid-cols-4

gap-10
"

        >



          {/* Column 1 */}

          <motion.div variants={footerAnimation}>


            <h2 className="
text-2xl
sm:text-3xl
font-bold
text-white
">

              Amir Math

              <span className="block text-[#FF0033]">
                & Science Academy
              </span>


            </h2>



            <p className="
mt-4
text-sm
sm:text-base
text-slate-400
leading-7
max-w-sm
">

              Empowering students through quality education,
              experienced teachers, and concept-based learning.

            </p>


          </motion.div>







          {/* Column 2 */}

          <motion.div variants={footerAnimation}>


            <h3 className="
text-lg
sm:text-xl
font-semibold
text-white
">

              Quick Links

            </h3>


            <ul className="
mt-5
space-y-3
">


              {
                [
                  "Home",
                  "About",
                  "Courses",
                  "Teachers",
                  "Gallery",
                  "Contact"

                ].map((item, index) => (


                  <li key={index}>

                    <a
                      href="#"
                      className="
text-sm
sm:text-base
text-slate-400
hover:text-[#FF0033]
transition
"
                    >

                      {item}

                    </a>


                  </li>


                ))

              }


            </ul>


          </motion.div>








          {/* Column 3 */}

          <motion.div variants={footerAnimation}>


            <h3 className="
text-lg
sm:text-xl
font-semibold
text-white
">

              Contact Info

            </h3>



            <div className="
mt-5
space-y-4
">


              <div className="
flex
items-start
gap-3
">

                <FaMapMarkerAlt className="
text-[#FF0033]
text-lg
mt-1
shrink-0
"/>


                <span className="
text-sm
sm:text-base
text-slate-400
">

                  Lahore, Pakistan

                </span>


              </div>





              <div className="
flex
items-start
gap-3
">

                <FaPhoneAlt className="
text-[#FF0033]
text-lg
mt-1
shrink-0
"/>


                <span className="
text-sm
sm:text-base
text-slate-400
">

                  +92 300 1234567

                </span>


              </div>






              <div className="
flex
items-start
gap-3
">

                <FaEnvelope className="
text-[#FF0033]
text-lg
mt-1
shrink-0
"/>


                <span className="
text-sm
sm:text-base
text-slate-400
break-all
">

                  info@amirmathacademy.com

                </span>


              </div>



            </div>


          </motion.div>









          {/* Column 4 */}

          <motion.div variants={footerAnimation}>


            <h3 className="
text-lg
sm:text-xl
font-semibold
text-white
">

              Follow Us

            </h3>



            <p className="
mt-4
text-sm
sm:text-base
text-slate-400
">

              Stay connected with us on social media.

            </p>




            <div className="
flex
gap-4
mt-6
">


              {
                [
                  <FaFacebookF />,
                  <FaInstagram />,
                  <FaLinkedinIn />

                ].map((icon, index) => (


                  <a
                    key={index}
                    href="#"

                    className="
w-10
h-10
sm:w-11
sm:h-11

rounded-full

bg-white/10

hover:bg-[#FF0033]

transition

flex
items-center
justify-center

text-white
"

                  >

                    {icon}

                  </a>


                ))

              }


            </div>


          </motion.div>



        </motion.div>








        {/* Bottom */}

        <motion.div

          initial={{
            opacity: 0,
            y: 30
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
            delay: 0.5
          }}


          className="
mt-12
sm:mt-16

pt-6
sm:pt-8

border-t
border-white/10

text-center
"


        >


          <p className="
text-xs
sm:text-sm
text-slate-400
">

            © 2026 Amir Math & Science Academy. All Rights Reserved.

          </p>


        </motion.div>



      </div>


    </footer>

  );
};


export default Footer;