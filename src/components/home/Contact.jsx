import '/src/assets/css/pages/contact.css'
import { useState, useRef } from 'react'
import { sendEmail } from '/src/components/SendEmail'

export const Contact = () => {
  const imagePath = '/img/'
  const form = useRef()
  const [contactMessage, setContactMessage] = useState('')

  const handleSubmit = (e) => {
    sendEmail(e, setContactMessage, form)
  }

  return (
    <section className="contact section" id="contact">
      <div className="contact__container grid">
        <div className="contact__data" data-aos="fade-right">
          <h2 className="section__title-2">
            <span>Contact Me.</span>
          </h2>

          <p className="contact__description-1">I will read all emails. Send me any message you want and I&apos;ll get back to you.</p>
          <p className="contact__description-2">
            I need your <b>Name</b> and <b>Email Address</b>, but you won&apos;t receive anything other than your reply.
          </p>

          <div className="geometric-box"></div>
        </div>

        <div className="contact__mail" data-aos="fade-left">
          <h2 className="contact__title">Send Me A Message</h2>

          <form action="" ref={form} onSubmit={handleSubmit} className="contact__form" id="contact-form">
            <div className="contact__group">
              <div className="contact__box">
                <input type="text" name="user_name" className="contact__input" id="name" required placeholder="First Name" />
                <label htmlFor="name" className="contact__label">
                  First Name
                </label>
              </div>

              <div className="contact__box">
                <input type="email" name="user_email" className="contact__input" id="email" required placeholder="Email Address" />
                <label htmlFor="email" className="contact__label">
                  Email Address
                </label>
              </div>
            </div>

            <div className="contact__box">
              <input type="text" name="user_subject" className="contact__input" id="subject" required placeholder="Subject" />
              <label htmlFor="subject" className="contact__label">
                Subject
              </label>
            </div>

            <div className="contact__box contact__area">
              <textarea name="user_message" id="message" className="contact__input" required placeholder="Message"></textarea>
              <label htmlFor="message" className="contact__label">
                Message
              </label>
            </div>

            <p className="contact__message" id="contact-message">
              {contactMessage}
            </p>

            <button type="submit" className="contact__button button">
              <i className="ri-send-plane-line"></i> Send Message
            </button>
          </form>
        </div>

        <div className="contact__social" data-aos="fade-up">
          <img src={imagePath + 'curved-arrow.svg'} alt="" className="contact__social-arrow" />

          <div className="contact__social-data">
            <div>
              <p className="contact__social-description-1">Does not send emails</p>
              <p className="contact__social-description-2">Write me on my social networks</p>
            </div>

            <div className="contact__social-links">
              {/* WhatsApp */}
              <a href="https://wa.me/6289690220404" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <i className="ri-whatsapp-line"></i>
              </a>

              {/* Instagram */}
              <a href="https://www.instagram.com/octalectzz" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <i className="ri-instagram-line"></i>
              </a>

              {/* Telegram */}
              <a href="https://t.me/octalectzz" target="_blank" rel="noopener noreferrer" className="contact__social-link">
                <i className="ri-telegram-line"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
