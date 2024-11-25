import { useNavigate } from "react-router";
import styles from "./classes.module.css";

const JoinOurClub = () => {
  const navigate = useNavigate();

  return (
    <div className={styles["join-our-club"]}>
      <div>
        <h2>Join Our Club</h2>
        <p>
        Join X Engine today and take the first step towards your fitness goals. Unlock personalized plans, expert guidance, and a community dedicated to helping you become the best version of yourself!
        </p>
        <button>Start Now</button>
      </div>
    </div>
  );
};

export default JoinOurClub;
