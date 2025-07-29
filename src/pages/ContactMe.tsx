import React, { useEffect, useRef, useState } from "react";
import "./ContactMe.css";
import profilePic from "../images/me.png";
import { FaEnvelope, FaPhoneAlt, FaLinkedin } from "react-icons/fa";
import { ContactMe as IContactMe } from "../types";
import { getContactMe } from "../queries/getContactMe";
import emailjs from "emailjs-com";
import { toast } from "sonner";
import { z } from "zod";

const SERVICE_ID = process.env.REACT_APP_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.REACT_APP_EMAILJS_PUBLIC_KEY!;

// Zod schema
const contactSchema = z.object({
  user_firstname: z.string().min(1, "First name is required"),
  user_lastname: z.string().min(1, "Last name is required"),
  user_email: z.string().email("Invalid email"),
  user_phone: z.string().min(10, "Phone is required"),
  user_message: z.string().min(5, "Message must be at least 5 characters"),
});

const ContactMe: React.FC = () => {
  const [userData, setUserData] = useState<IContactMe>();
  const [isLoading, setIsLoading] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    async function fetchUserData() {
      const data = await getContactMe();
      setUserData(data);
    }
    fetchUserData();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading || !formRef.current) return;

    const formData = new FormData(formRef.current);
    const values = Object.fromEntries(formData.entries());

    const result = contactSchema.safeParse(values);

    if (!result.success) {
      result.error.issues.forEach((err) => {
        toast.error(err.message);
      });
      return;
    }

    setIsLoading(true);

    emailjs
      .sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then(() => {
        toast.success("Your message has been sent!");
        formRef.current?.reset();
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        toast.error("Unable to send message, please try again.");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  if (!userData) return <div>Loading...</div>;

  return (
    <div className="contact-container">
      <div className="linkedin-badge-custom">
        <img src={profilePic} alt="Sahil Barak" className="badge-avatar" />
        <div className="badge-content">
          <h3 className="badge-name">{userData.name}</h3>
          <p className="badge-title">{userData.title}</p>
          <p className="badge-description">{userData.summary}</p>
          <p className="badge-company">{userData.companyUniversity}</p>
          <a
            href={userData.linkedinLink}
            target="_blank"
            rel="noopener noreferrer"
            className="badge-link"
          >
            <FaLinkedin className="linkedin-icon" /> View Profile
          </a>
        </div>
      </div>

      <div className="contact-header">
        <p>I'm always up for a chat or a coffee! Feel free to reach out.</p>
      </div>

      <div className="contact-details">
        <div className="contact-item">
          <FaEnvelope className="contact-icon" />
          <a href={`mailto:${userData.email}`} className="contact-link">
            {userData.email}
          </a>
        </div>
        <div className="contact-item">
          <FaPhoneAlt className="contact-icon" />
          <a href={`tel:${userData.phoneNumber}`} className="contact-link">
            {userData.phoneNumber}
          </a>
        </div>
      </div>

      <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
        <div className="form-row">
          <input
            type="text"
            name="user_firstname"
            placeholder="First Name"
            className="form-input"
            required
          />
          <input
            type="text"
            name="user_lastname"
            placeholder="Last Name"
            className="form-input"
            required
          />
        </div>
        <div className="form-row">
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="form-input"
            required
          />
          <input
            type="tel"
            name="user_phone"
            placeholder="Phone"
            className="form-input"
          />
        </div>

        <div className="form-row full-width-row">
          <textarea
            name="user_message"
            placeholder="Message..."
            rows={5}
            className="form-textarea"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className={`form-submit-btn ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
        >
          <span className="fill-effect"></span>
          <span className="btn-text">Send Message 🚀</span>
        </button>
      </form>
    </div>
  );
};

export default ContactMe;
