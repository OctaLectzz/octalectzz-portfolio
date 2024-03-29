import "/src/assets/css/pages/contact.css";
import { useState, useRef } from "react";
import { sendEmail } from "/src/components/SendEmail";

export const Contact = () => {
  const form = useRef();
  const [contactMessage, setContactMessage] = useState("");

  const handleSubmit = (e) => {
    sendEmail(e, setContactMessage, form);
  };

  return (
    <section className="contact section" id="contact">
      {/* Title */}
      <h2 className="section__title-1">
        <span>Get in Touch :</span>
      </h2>
      <div className="subtitle">
        <span>"I will read all emails. Send me any message you want and I'll get back to you."</span>
      </div>

      <div className="contacts__container container grid">
        {/* Talk to me */}
        <div className="contacts__content">
          <h3 className="contacts__title">Talk to me</h3>

          <div className="contacts__info">
            <div className="contacts__card">
              <i className="ri-mail-line contacts__card-icon"></i>
              <h3 className="contacts__card-title">Email</h3>
              <span className="contacts__card-data">octalectzz@gmail.com</span>

              <a href="mailto:octalectzz@gmail.com.com" target="_blank" rel="noopener noreferrer" className="contacts__button">
                Write me{" "}
                <i className="ri-arrow-right-line contacts__button-icon"></i>
              </a>
            </div>

            <div className="contacts__card">
              <i className="ri-whatsapp-line contacts__card-icon"></i>
              <h3 className="contacts__card-title">WhatsApp</h3>
              <span className="contacts__card-data">0895-6052-10002</span>

              <a href="https://api.whatsapp.com/send?phone=62895605210002&text=Hello, Octa Keren Pinter dan Baik hati" target="_blank" rel="noopener noreferrer" className="contacts__button">
                Write me{" "}
                <i className="ri-arrow-right-line contacts__button-icon"></i>
              </a>
            </div>

            <div className="contacts__card">
              <i className="ri-telegram-line contacts__card-icon"></i>
              <h3 className="contacts__card-title">Telegram</h3>
              <span className="contacts__card-data">@octalectzz</span>

              <a href="https://t.me/octalectzz" target="_blank" rel="noopener noreferrer" className="contacts__button">
                Write me{" "}
                <i className="ri-arrow-right-line contacts__button-icon"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Form message */}
        <div className="contacts__content">
          <h3 className="contacts__title">Write me your project</h3>

          <form action="" ref={form} onSubmit={handleSubmit} className="contacts__form" id="contact-form">
            <div className="contacts__form-div">
              <label className="contacts__form-tag">Name</label>
              <input type="text" name="user_name" className="contacts__form-input" required placeholder="Insert your name" />
            </div>

            <div className="contacts__form-div">
              <label className="contacts__form-tag">Email</label>
              <input type="email" name="user_email" className="contacts__form-input" required placeholder="Insert your email" />
            </div>

            <div className="contacts__form-div contacts__form-area">
              <label className="contacts__form-tag">Message</label>
              <textarea name="user_message" cols="30" rows="10" className="contacts__form-input" required placeholder="Write your message"></textarea>
            </div>

            <button type="submit" className="contact__button button">
              <i className="ri-send-plane-line"></i> Send Message
            </button>

            <p className="contacts__message" id="contact-message">
              {contactMessage}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};
