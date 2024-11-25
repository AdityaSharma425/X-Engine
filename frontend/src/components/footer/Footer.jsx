import styles from "./footer.module.css";
import { useNavigate } from "react-router";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.footer}>
      <div className={styles.footer_image}>
        <h2>
          Follow me on
          <a
            href="https://www.instagram.com/x__engine?igsh=bXB0b3Nlend1aGtj"
            target="_blank">
            Instagram
          </a>
        </h2>
      </div>
      <div className={`${styles.footer_content} container `}>
        <div>
          <div className={styles.logo_holder}>
            {/* <img src={logoIcon} alt="Logo Icon" /> */}

            <h3>X-Engine</h3>
          </div>
          <p>
          Where Precision Meets Performance.
          </p>
          <div className={styles.info}>
            <span>Call :</span>
            <p>+91 97804 15584</p>
            <span>Email :</span>
            <p>rahulsharma@gmail.com</p>
          </div>
        </div>
        <div>
          <ul>
            <li>Utility Pages</li>
            {/* <li onClick={() => navigate("/calculator")}>BMI Calculator</li> */}
            <li onClick={() => navigate("/schedule")}>Schedule</li>
            
            <li onClick={() => navigate("/contact")}>Contact</li>
          </ul>
        </div>
        <div>
          {/* <h3>Newsletter</h3>
          <input type="text" placeholder="Enter Your Email" />
          <button>Subscribe</button> */}
          <div className={styles.footer_icons}>
            <h3>Social Media Handles</h3>
            
            <br></br>
            <a
              href="https://www.instagram.com/x__engine?igsh=bXB0b3Nlend1aGtj"
              target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </a>
            {/* <a href="https://github.com/mustafa-khaled" target="_blank">
              <i className="fa-brands fa-github"></i>
            </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
