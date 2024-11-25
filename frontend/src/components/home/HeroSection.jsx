import { useNavigate } from "react-router";
import styles from "./home.module.css";

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["hero-section"]}>
       {/* data-aos="zoom-out-down" */}
      <h1 className="main-heading">
      Fuel Your Fitness
        <br />
        with X-Engine
      </h1>
      <div>
        <button>Start Today</button>
        <button onClick={() => navigate("/about")}>About Me</button>
      </div>
    </div>
  );
};

export default HeroSection;
