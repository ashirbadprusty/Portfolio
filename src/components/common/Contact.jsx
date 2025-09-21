import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail, HiUser } from "react-icons/hi";
import { BsChatTextFill } from "react-icons/bs";
import Footer from "./Footer";

const Contact = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [focusedField, setFocusedField] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [modalMessage, setModalMessage] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const FORM_ENDPOINT = "https://formspree.io/f/xdknrzeb"; // Replace with your Formspree endpoint

  const contactDetails = [
    { label: "Country", value: "India" },
    { label: "City", value: "Bangalore" },
    { label: "Company", value: "Hindustan Standards Bureau" },
  ];

  const personalDetails = [
    { label: "Email", value: "ashirbadprusty3@gmail.com" },
    { label: "LinkedIn", value: "Ashirabd Narayan Prusty" },
    { label: "Phone", value: "+91 8338 045845" },
  ];

  const socialIcons = [
    { icon: <HiMail />, link: "mailto:ashirbadprusty3@gmail.com" },
    { icon: <FaGithub />, link: "https://github.com/ashirbadprusty" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/ashirbad-narayan-prusty-ba559927b/" },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setFormErrors({ ...formErrors, [e.target.name]: "" });
  };

  // const validateForm = () => {
  //   const errors = {};
  //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  //   if (!formData.name) errors.name = "Name is required.";
  //   if (!formData.email) {
  //     errors.email = "Email is required.";
  //   } else if (!emailRegex.test(formData.email)) {
  //     errors.email = "Please enter a valid email address.";
  //   }
  //   if (!formData.message) errors.message = "Message is required.";
  //   return errors;
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const errors = validateForm();
    // setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        setModalMessage(response.ok
          ? "Message Sent! Thank you for your message. I'll get back to you soon."
          : "Error: Unable to send your message. Please try again later.");
        if (response.ok) setFormData({ name: "", email: "", message: "" });
      } catch {
        setModalMessage("Error: Unable to send your message. Please try again later.");
      }
      setIsModalOpen(true);
    }
  };

  const renderField = (placeholder, Icon, name, type = "text") => (
    <div className="flex flex-col w-full mb-6 relative">
      <div className="relative group">
        <div className={`absolute inset-y-0 left-0 flex items-center pl-3 text-xl pointer-events-none transition-colors duration-300 ${focusedField === name ? "text-Green" : "text-gray-400"}`}>
          <Icon />
        </div>
        <input
          type={type}
          name={name}
          value={formData[name]}
          className={`pl-10 p-2 w-full rounded-lg bg-black text-Snow focus:outline-none focus:ring-2 focus:ring-Green focus:border-transparent transition duration-300 ease-in-out ${formErrors[name] ? "border-red-500" : ""}`}
          placeholder={placeholder}
          onFocus={() => setFocusedField(name)}
          onBlur={() => setFocusedField("")}
          onChange={handleChange}
          required
        />
        {/* {formErrors[name] && <div className="absolute left-0 bottom-full mb-1 w-auto bg-red-500 text-white p-2 rounded-md">{formErrors[name]}</div>} */}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow px-4 py-2">
        {/* Contact Information */}
        <div className="my-6 text-Snow flex flex-col gap-y-5">
          <h1 className="text-lg font-bold">Contact Information</h1>
          <div className="flex flex-col md:flex-row items-center gap-5 text-xs">
            {[contactDetails, personalDetails].map((details, idx) => (
              <div key={idx} className="bg-EveningBlack hover:bg-gradient-to-br from-green-950 rounded-xl w-full md:w-1/2 p-5 md:p-6 lg:p-8 flex flex-col gap-y-4">
                {details.map(({ label, value }, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="md:text-base">{label}:</span>
                    <span className="text-LightGray md:text-sm">{value}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Contact Icons */}
        <div className="h-16 w-full bg-EveningBlack hover:bg-gradient-to-br from-green-950 rounded-xl text-xl sm:text-3xl flex gap-x-8 sm:gap-x-16 items-center justify-center text-Snow">
          {socialIcons.map(({ icon, link }, idx) => (
            <a key={idx} className="hover:scale-125 ease-in-out duration-700" href={link} target="_blank" rel="noreferrer">{icon}</a>
          ))}
        </div>

        {/* Get in Touch Form */}
        <div className="my-8 w-full text-Snow">
          <h1 className="text-xl  font-circular mb-4">Get In Touch</h1>
          <form onSubmit={handleSubmit}>
            <div className="py-6 px-8 bg-EveningBlack rounded-xl text-base">
              {renderField("Name", HiUser, "name")}
              {renderField("Email", HiMail, "email", "email")}
              <div className="flex flex-col w-full mb-8 relative group">
                <div className="relative">
                  <div className={`absolute top-3 left-0 flex items-center pl-3 text-lg pointer-events-none ${focusedField === "message" ? "text-Green" : "text-gray-400"}`}>
                    <BsChatTextFill />
                  </div>
                  <textarea
                    name="message"
                    rows={6}
                    value={formData.message}
                    className={`pl-10 p-2 w-full rounded-lg bg-black text-Snow focus:outline-none focus:ring-2 focus:ring-Green focus:border-transparent transition duration-300 ease-in-out ${formErrors.message ? "border-red-500" : ""}`}
                    placeholder="Message"
                    required
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField("")}
                    onChange={handleChange}
                  />
                  {formErrors.message && <div className="absolute left-0 bottom-full mb-1 w-auto bg-red-500 text-white p-2 rounded-md">{formErrors.message}</div>}
                </div>
              </div>
              <button type="submit" className="bg-Green font-cascadia text-black py-2 px-5 rounded-lg hover:bg-green-600 transition duration-300">SEND MESSAGE</button>
            </div>
          </form>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 backdrop-blur">
          <div className="bg-EveningBlack w-4/5 md:w-3/5 lg:w-2/5 p-10 rounded-3xl text-Snow">
            <h1 className="text-lg">{modalMessage}</h1>
            <div className="flex justify-center">
              <button className="p-2 bg-Green text-Snow rounded-md text-sm" onClick={() => setIsModalOpen(false)}>Close</button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default Contact;
