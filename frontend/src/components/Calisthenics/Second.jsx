import styles from "./yogaClass.module.css";
import photo1 from "../../assets/Xcali.jpg";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>Calisthenics with X Engine: Master Your Body, Unlock True Strength</p>
        <p>
          At X Engine, calisthenics is more than just bodyweight training—it’s about mastering control, building strength, and achieving unmatched agility. Our calisthenics programs focus on functional movements that enhance your physical abilities while sculpting a lean, powerful physique.
        </p>
        <h3>Why Calisthenics Matters</h3>
        <p>
          Calisthenics utilizes your bodyweight to develop strength, endurance, and flexibility. It improves balance, core stability, and coordination while requiring minimal equipment, making it a versatile and effective workout for all fitness levels.
        </p>
        <h3>What Makes X Engine Calisthenics Unique?</h3>
        <p>
          X Engine’s calisthenics training blends precision techniques with progressive challenges. Whether you’re working towards your first push-up or mastering advanced skills like muscle-ups, our tailored approach ensures steady progress and injury-free growth.
        </p>
        <h3>Benefits of Calisthenics at X Engine</h3>
        <ul>
          <li>Functional Strength: Build real-world strength with dynamic, practical movements.</li>
          <li>Flexibility & Mobility: Improve range of motion and reduce the risk of injuries.</li>
          <li>Body Control: Master movements and develop exceptional balance and stability.</li>
          <li>Minimal Equipment: Train anywhere, anytime, with bodyweight exercises.</li>
        </ul>
        <h3>How to Get Started</h3>
        <p>
          Join X Engine and begin your calisthenics journey with expert guidance. From foundational movements to advanced techniques, our programs empower you to unlock your full potential and redefine what your body can achieve.
        </p>
        <p>Transform your fitness with X Engine’s calisthenics. Your journey to strength and agility starts now!</p>
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
