import { useState } from "react";
import styles from "./contact.module.css";
import axios from "axios";
import React from "react";
import { ClipLoader } from "react-spinners";
import { toast } from "react-toastify";



const ContactForm = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const [errorMessage, setErrorMessage] = useState("");

  const sendMail = async(e) => {
    e.preventDefault();
    setLoading(true);
    try{
      const {data} = await axios.post("http://localhost:4000/send/mail", 
        {
          fullName, 
          email, 
          subject, 
          message
        }, 
        {
          withCredentials: true, 
          headers: {"Content-Type": "application/json"}
        }
      );
      setFullName("");
      setEmail("");
      setSubject("");
      setMessage("");
      toast.success(data.message);
      setLoading(false);

    }
    catch(error){
      setLoading(false);
      toast.error(error.response.data.message);
    }
    if (!fullName || !email || !subject) {
          setErrorMessage("Please fill in all fields.");
          return;
        } else {
          setFullName("");
          setEmail("");
          setSubject("");
          setMessage("");
          setErrorMessage("Send Successfully");
        }
  };

  // const formHandler = (e) => {
  //   e.preventDefault();

  //   if (!fullName || !email || !subject) {
  //     setErrorMessage("Please fill in all fields.");
  //     return;
  //   } else {
  //     setFullName("");
  //     setEmail("");
  //     setSubject("");
  //     setMessage("");
  //     setErrorMessage("Send Successfully");
  //   }
  // };

  return (
    <div className={`${styles["contact-form"]}  container sections-padding`}>
      <div>
        <p className="paragraph">Welcome To X-Engine</p>
        <h2>Get In Touch With Us</h2>
        <p>
          If you have any feedback or questions about our clubs, our website or
          our services in general, please contact us by filling out the form.
        </p>
        <h3>Open Hours</h3>
        <p>
          <span>Mon – Fri :</span> 08.00 aM to 09.00 pM
        </p>
        <p>
          <span>Sat :</span> 09.00 AM To 06.00 PM
        </p>
        <p>
          <span>sunday :</span> 09.00 AM To 02.00 PM
        </p>
      </div>
      <div>
        <h2>Send Us a Message</h2>
        <p>Your email address will not be published *</p>
        <form onSubmit={sendMail}>
          <input
            type="text"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            name=""
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}></textarea>
          <button type="submit" disabled={loading}>
          {loading && <ClipLoader size={20} color="white" />}
            Submit
          </button>
          <p>{errorMessage}</p>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
