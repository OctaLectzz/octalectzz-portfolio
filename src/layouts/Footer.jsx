import '/src/assets/css/footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        {/* Social Media */}
        <div className="footer__links">
          <div className="footer__social-links">
            {/* Github */}
            <a href="https://github.com/OctaLectzz" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="ri-github-line"></i>
            </a>

            {/* Facebook */}
            <a href="https://web.facebook.com/octavyan.r" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="ri-facebook-circle-line"></i>
            </a>

            {/* Instagram */}
            <a href="https://www.instagram.com/octalectzz" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="ri-instagram-line"></i>
            </a>

            {/* Twitter */}
            <a href="https://twitter.com/lectzz" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="ri-twitter-line"></i>
            </a>

            {/* Linkedin */}
            <a href="https://www.linkedin.com/in/octalectzz" target="_blank" rel="noopener noreferrer" className="footer__social-link">
              <i className="ri-linkedin-line"></i>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <span className="footer__copy">
          &#169; All Rights Reserved By
          <a className="footer__watermark" href="#">
            {' '}
            OctaLectzz.
          </a>
        </span>
      </div>
    </footer>
  )
}
