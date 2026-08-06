import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import About from "../pages/About"
import Courses  from "../pages/Courses"
import Teachers from "../pages/Teachers"
import Contact from "../pages/Contact"

const AppRoutes = () => {
    return (
        <BrowserRouter>
        <Routes>
             <Route element={<MainLayout />}>
               <Route path="/" element={<Home />}/>
               <Route path="/about" element={<About />}/>
               <Route path="/courses" element={<Courses />}/>
               <Route path="/teachers" element={<Teachers />}/>
               <Route path="/contact" element={<Contact />}/>
             </Route>
        </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;