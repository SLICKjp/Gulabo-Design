import Footer from "../../components/Footer/Footer";
import "./form.css";

const Form = () => {
  return (
    <>
    <div className="contact-main-container">
      <h1 className="contact-form-title">Let's Connect</h1>

      <div className="contact-flex-container">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4326.807346831096!2d77.2968030761386!3d28.420370693682376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce6d5c36cda1f%3A0x4d70f0db1a27e207!2sGulabo%20Design!5e1!3m2!1sen!2sin!4v1749966472271!5m2!1sen!2sin"
            className="contact-form-map"
          ></iframe>
        </div>

        <div className="contact-form-container">
          <form action="">
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="input-box-firstname"
              placeholder="First Name"
            />

            <input
              type="text"
              id="lastname"
              name="lastname"
              className="input-box-lastname"
              placeholder="Last Name"
            />

            <p>
              <input
                type="text"
                placeholder="Email"
                className="input-box-email"
              />
            </p>

            <p>
              <input
                type="text"
                placeholder="Phone Number"
                className="input-box-phoneno"
              />
            </p>

            <p>
              <textarea name="" id="" className="input-box-message" placeholder="Message"></textarea>
            </p>

            <div className="contact-btn-container">
              <input
                className="contact-btn"
                type="button"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Form;
