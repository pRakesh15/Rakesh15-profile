import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import useAlert from "../hooks/useAlret";
import Alert from "../subComponent/Alert";
import { ContainerScroll } from "../ui/container-scroll-animation";

const Contact = () => {
  const formRef = useRef();

  const { alert, showAlert, hideAlert } = useAlert();
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_agury9n",
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

      .then(
        () => {
          setLoading(false);
          showAlert({
            show: true,
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert(false);
            setForm({
              name: "",
              email: "",
              message: "",
            });
          }, [3000]);
        },
        (error) => {
          setLoading(false);
          console.error(error);

          showAlert({
            show: true,
            text: "I didn't receive your message 😢",
            type: "danger",
          });
        }
      );
  };

  return (
    <ContainerScroll>
      <section className="c-space" id="contact">
        {alert.show && <Alert {...alert} />}
        <div className="relative min-h-screen flex items-center justify-center flex-col">
          <img
            src="/assets/terminal.png"
            alt="terminal-bg"
            className="absolute inset-0 min-h-screen"
          />
          <div className="contact-container">
            <h3 className="head-text">Let's talk</h3>
            <p className="text-lg text-white-600 mt-3">
              Whether you’re looking to build a new website, improve your
              existing platform, or bring a unique project to life, I’m here to
              help.
            </p>

            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="mt-12 flex flex-col space-y-7"
            >
              <label className="space-y-3">
                <span className="field-label">Full Name</span>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., Rakesh pradhan"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Email address</span>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  className="field-input"
                  placeholder="ex., yiconi15@gmail.com"
                />
              </label>

              <label className="space-y-3">
                <span className="field-label">Your message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="field-input"
                  placeholder="Share your thoughts or inquiries..."
                />
              </label>

              <button className="field-btn" type="submit" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}

                {loading ? (
                  ""
                ) : (
                  <img
                    src="/assets/arrow-up.png"
                    alt="arrow-up"
                    className="field-btn_arrow"
                  />
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </ContainerScroll>
  );
};

export default Contact;
