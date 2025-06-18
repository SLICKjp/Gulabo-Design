
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "../pages/Homepage/Homepage";
import Aboutus from "../pages/About/Aboutus";
import Projects from "../pages/Projects/Projects";
import ContactForm from "../pages/Form/ContactForm";


const AppRoutes = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/about" element={<Aboutus />} />
          <Route path="/form" element={<ContactForm/>} />
        </Routes>
      
    </>
  );
};

export default AppRoutes;
