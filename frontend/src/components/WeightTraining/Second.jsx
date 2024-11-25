import styles from "./yogaClass.module.css";
import photo1 from "../../assets/Xwl.jpg";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>
          Weight Training with X Engine: Build Strength, Power, and Confidence
        </p>
        <h3>Why Weight Training Matters</h3>
        <p>
          Weight training is the cornerstone of building strength and muscle. It improves bone density, boosts metabolism, and helps sculpt a toned physique. Beyond physical benefits, it also fosters discipline and mental resilience, making it an essential part of any fitness journey.
        </p>
        <h3>What Makes X Engine Weight Training Unique?</h3>
        <p>
          X Engine combines science-backed techniques with personalized coaching to create weight training plans that deliver results. Whether you’re a beginner or an advanced lifter, our programs are tailored to your goals, ensuring you gain strength while avoiding injuries.
        </p>
        <h3>Benefits of Weight Training at X Engine</h3>
        <ul>
          <li>Strength Development: Build functional and aesthetic strength with a structured plan.</li>
          <li>Increased Metabolism: Burn more calories even at rest with improved muscle mass.</li>
          <li>Injury Prevention: Strengthen joints and muscles to support overall body stability.</li>
          <li>Boosted Confidence: Achieve your personal best and feel empowered every step of the way.</li>
        </ul>
        <h3>How to Get Started</h3>
        <p>
          Join X Engine today and start your weight training journey with expert guidance. Whether you aim to build muscle, tone your body, or increase endurance, our tailored programs are designed to help you achieve your goals effectively and safely.
        </p>
        <p>
          Experience the power of strength with X Engine. Your journey to a stronger you starts here!
        </p>
      </div>
      <div>
        <h3>Class Details</h3>
        <p>Objectively innovate empowered manufactured products</p>
        <p className={styles.info}>
          Duration : <span>45 Minutes </span>
        </p>
        <p className={styles.info}>
          Intensity :<span>High </span>
        </p>
        <p className={styles.info}>
          Fitness Level :<span>Advanced </span>
        </p>
        <p className={styles.info}>
          Schedule :<span>Monday, Saturday </span>
        </p>
        <button>Book a Class</button>
      </div>
    </div>
  );
};

export default Second;
