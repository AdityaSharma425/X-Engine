import styles from "./yogaClass.module.css";
import photo1 from "../../assets/Xcardio.jpg";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>
          Cardio with X Engine: Ignite Your Energy, Elevate Your Fitness
        </p>
        <h3>Why Cardio Matters</h3>
        <p>
          Cardio workouts strengthen your heart, improve lung capacity, and burn calories efficiently. Beyond physical fitness, cardio enhances mood, reduces stress, and promotes overall well-being, making it a vital part of a balanced fitness routine.
        </p>
        <h3>What Makes X Engine Cardio Different?</h3>
        <p>
          Our cardio plans go beyond conventional routines. From high-intensity interval training (HIIT) to endurance-building exercises, we offer diverse options to keep your workouts exciting and effective. Whether you’re looking to shed weight, boost energy, or increase endurance, X Engine has the perfect cardio solution for you.
        </p>
        <h3>Benefits of Cardio at X Engine</h3>
        <ul>
          <li>Heart Health: Strengthen your cardiovascular system for improved endurance.</li>
          <li>Calorie Burn: Achieve your weight management goals with effective fat-burning sessions.</li>
          <li>Increased Energy: Boost stamina and feel more energetic throughout the day.</li>
          <li>Stress Relief: Improve your mental clarity and mood through engaging workouts.</li>
        </ul>
        <h3>How to Get Started</h3>
        <p>
          Sign up at X Engine and explore a variety of cardio programs tailored to your needs. From beginner-friendly routines to advanced challenges, we ensure you stay motivated and on track to achieving your fitness goals.
        </p>
        <p>
          Elevate your fitness game with X Engine’s cardio programs. Let’s get your heart racing and your goals within reach!
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
