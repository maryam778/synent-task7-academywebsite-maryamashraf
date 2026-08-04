import { NavLink } from "react-router-dom";
import logo from "../../assets/images/logo-A.png";
import { HiOutlineMenuAlt3, HiX } from "react-icons/hi";
import { useState } from "react";
import { motion } from "framer-motion";

const Navbar = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="sticky top-0 z-50 w-full h-20 bg-[#F8FAFC]/80 backdrop-blur-md border-b border-white/20"
        >

            <div className="max-w-7xl mx-auto h-full px-6 flex justify-between items-center">

                {/* Logo */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                >
                    <img
                        src={logo}
                        alt="Academy Logo"
                        className="h-20 w-auto"
                    />
                </motion.div>


                {/* Desktop Menu */}
                <motion.ul
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                    className="hidden lg:flex items-center gap-8"
                >

                    {[
                        { name: "Home", path: "/" },
                        { name: "About", path: "/about" },
                        { name: "Courses", path: "/courses" },
                        { name: "Teachers", path: "/teachers" },
                        // { name: "Gallery", path: "/gallery" },
                        { name: "Contact", path: "/contact" },
                    ].map((item, index) => (

                        <motion.li
                            key={index}
                            whileHover={{ y: -2 }}
                            className="relative group"
                        >

                            <NavLink
                                to={item.path}
                                className={({ isActive }) =>
                                    `text-[16px] font-medium transition-all duration-300 ${isActive
                                        ? "text-[#FF0033]"
                                        : "text-slate-700 hover:text-[#FF0033]"
                                    }`
                                }
                            >

                                {({ isActive }) => (
                                    <>
                                        {item.name}

                                        <span
                                            className={`absolute left-0 -bottom-1 h-[2px] bg-[#FF0033] transition-all duration-300 ${isActive
                                                    ? "w-full"
                                                    : "w-0 group-hover:w-full"
                                                }`}
                                        ></span>
                                    </>
                                )}
                            </NavLink>
                        </motion.li>
                    ))}
                </motion.ul>
                {/* Button */}
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="hidden lg:block bg-[#FF0033] text-white px-7 py-3 font-semibold rounded-full transition-all duration-300 hover:shadow-lg"
                >
                    Get Admission
                </motion.button>
                {/* Mobile Icon */}
                <div
                    className="lg:hidden"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >

                    {isMenuOpen ? (
                        <HiX className="text-3xl text-[#111827]" />
                    ) : (
                        <HiOutlineMenuAlt3 className="text-3xl text-[#111827]" />
                    )}
                </div>
            </div>
            {/* Mobile Menu */}

            {isMenuOpen && (

                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden bg-white shadow-lg border-t border-slate-200"
                >

                    <ul className="flex flex-col p-6 gap-5">

                        {[
                            { name: "Home", path: "/" },
                            { name: "About", path: "/about" },
                            { name: "Courses", path: "/courses" },
                            { name: "Teachers", path: "/teachers" },
                            // { name: "Gallery", path: "/gallery" },
                            { name: "Contact", path: "/contact" },
                        ].map((item, index) => (

                            <motion.li
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                            >

                                <NavLink
                                    to={item.path}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-lg font-medium text-slate-700 hover:text-[#FF0033] transition"
                                >
                                    {item.name}
                                </NavLink>
                            </motion.li>
                        ))}
                        <div className="pt-4 flex justify-center">

                            <button
                                className="bg-[#FF0033] text-white px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg"
                            >
                                Get Admission
                            </button>
                        </div>
                    </ul>
              </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;