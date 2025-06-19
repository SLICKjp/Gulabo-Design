
import contactimg from "../../assets/contactus/contact.png";
import "./contactus.css";
import { useNavigate } from "react-router-dom";

const ContactUs = () => {
  const navigate = useNavigate();

  const handleImageClick = () => {
    navigate('/contact-form');
  }

  return (
    <div className="contactus">
      <div className="head-container">
        <p className="contact-big-text-one">Let's Connect</p>
      </div>
      
      
          <div className="img-container">
            <div className="image-contact">
              <img src={contactimg} alt="" onClick={handleImageClick} className="interactive-image"  />
            </div>
          </div>
        
     
    </div>
  );
};

export default ContactUs;
