import styles from "./home.module.css";

import photo1 from "../../assets/XMot.png";
import photo2 from "../../assets/Xvis.jpg";
import photo3 from "../../assets/Xhome7.png";
import { useNavigate } from "react-router";

const FourthSection = () => {
  const navigate = useNavigate();

  return (
    <div className={`${styles.about} container sections-padding`}>
      <div
        className={styles.text}>
        {/* // data-aos="fade-down"
        // data-aos-easing="linear"
        // data-aos-duration="1500" */}
        <p className="paragraph">About</p>
        <h2>
          Respect Your Body,
          <br />
          It’s the Only One You Get
        </h2>
        <p>
        Founded by Rahul Sharma, X Engine is where engineering precision meets CrossFit power. Built on passion and grit, it’s your ultimate guide to respecting, rebuilding, and transforming your body!
        </p>
        <div className={styles.text_one}>
          <div>
            <h3>Mission</h3>
            <p>
            Rahul Sharma's X Engine aims to deliver expert-crafted fitness workouts and personalized health plans, blending engineering precision with CrossFit power to help individuals achieve their best selves.{" "}
            </p>
          </div>
          <img src={photo1} alt="Photo one" />
        </div>
        <div className={styles.text_two}>
          <img src={photo2} alt="Photo two" />
          <div>
            <h3>Vision</h3>
            <p>To establish X Engine as a trusted name in fitness, inspiring transformation through Rahul Sharma's unique approach to health and well-being. </p>
          </div>
        </div>
      </div>
      <div
        className={styles["img-container"]}>
        {/* data-aos="fade-up"
        data-aos-duration="3000" */}
        <img src={photo3} alt="Man Exercise" />
        <button onClick={() => navigate("/schedule")}>Get Started</button>
      </div>
    </div>
  );
};

export default FourthSection;
