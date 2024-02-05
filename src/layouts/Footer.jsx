import "/src/assets/css/footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container grid">
        <div className="footer__links">
            <div className="footer__social-links">
              <a
                href="https://github.com/OctaLectzz"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-github-line"></i>
              </a>

              <a
                href="https://web.facebook.com/octavyan.r"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-facebook-circle-line"></i>
              </a>

              <a
                href="https://www.instagram.com/octalectzz/"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-instagram-line"></i>
              </a>

              <a
                href="https://twitter.com/lectzz"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-twitter-line"></i>
              </a>

              <a
                href="https://www.linkedin.com/in/octalectzz"
                target="_blank"
                className="footer__social-link"
              >
                <i className="ri-linkedin-line"></i>
              </a>
            </div>
        </div>

        <span className="footer__copy">
          &#169; All Rights Reserved By
          <a className="footer__watermark" href="#">
            {" "}
            OctaLectzz.
          </a>
        </span>
      </div>
    </footer>
  );
};
