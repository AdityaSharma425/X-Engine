import { useNavigate } from "react-router-dom";

import styles from "./trainers.module.css";
import photo from "../../assets/trainerslast.jpg";

const CtaSection = () => {
  const navigate = useNavigate();

  const navHandler = () => {
    navigate("/classes");
  };

  return (
    <div className={`${styles["cta-section"]} `}>
      <div className={"container"}>
        {/* <img src={photo} alt=""/> */}
        <div className={styles.buttons}>
          <button onClick={() => navHandler()}>Book A class </button>
          <button onClick={() => navHandler()}>More Classes</button>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
