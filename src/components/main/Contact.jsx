import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { styles } from "../../styles.js";
import { slideInFromLeft, slideInFromRight } from "../../utils/motion.js";
import { SectionWrapper } from "../../hoc/index.js";
import emailjs from "@emailjs/browser";
import { fadeIn } from "../../utils/motion.js";
import RobotCanvas from "../../canvas/RobotCanvas.jsx";
import { toast } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;

    setForm({ ...form, [name]: value });
  };

  const handelSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_92096jq",
        "template_lzipy57",
        {
          from_name: form.name,
          to_name: "Rakesh",
          from_email: form.email,
          to_email: "rp5865442@gmail.com",
          message: form.message,
        },
        "h5a_NhS5dhD76WOGH"
      )
      .then(() => {
        setLoading(false);
        toast.success("Thank you I will get back to you as soon as possible", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        setForm({
          name: "",
          email: "",
          message: "",
        });
      },(error)=>
      {
        setLoading(false);
        toast.error('Somthing went wrong!!!', {
          position: "top-left",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          });
      });
  };
  return (
    <div className=" xl:flex-row  flex-col-reverse flex gap-8 overflow-hidden">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.95)}
        className="flex-[0.75] xl:[550px] bg-[#0B4067] p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={formRef}
          onSubmit={handelSubmit}
          className="mt-3  flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              placeholder="what is your name?"
              onChange={handelChange}
              className="bg-[#17863E] py-4 px-6 placeholder:text-secondary
             text-white rounded-lg outline-none border-none
             font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handelChange}
              placeholder="what is your web Address?"
              className="bg-[#17863E] py-4 px-6 placeholder:text-secondary
           text-white rounded-lg outline-none border-none
           font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handelChange}
              placeholder="what do you want to say?"
              className="bg-[#17863E] py-4 px-6 placeholder:text-secondary
         text-white rounded-lg outline-none border-none
         font-medium"
            />
          </label>
          <button
            className="bg-[#17863E] py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary
               rounded-xl"
            type="submit"
          >
            {loading ? "Sending.." : "Send"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <RobotCanvas />
      </motion.div>
    </div>
  );
};
export default SectionWrapper(Contact, "contact");
