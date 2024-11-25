import styles from "./yogaClass.module.css";
import photo1 from "../../assets/Xnutri.jpg";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>Nutrition with X Engine: Fuel Your Fitness, Transform Your Health</p>
        <h3>Why Nutrition Matters</h3>
        <p>
          Nutrition is the foundation of a healthy lifestyle. Eating the right foods in the right amounts enhances performance, speeds up recovery, and supports long-term health. A balanced diet complements your workouts, ensuring you get the best results from your fitness journey.
        </p>
        <h3>What Makes X Engine Nutrition Unique?</h3>
        <p>
          X Engine provides customized diet plans tailored to your needs and goals. With guidance from Rahul Sharma, you’ll receive expert recommendations based on your fitness level, preferences, and nutritional requirements, making healthy eating both effective and sustainable.
        </p>
        <h3>Benefits of Nutrition at X Engine</h3>
        <ul>
          <li>Goal-Oriented Plans: Achieve your fitness milestones with tailored diet strategies.</li>
          <li>Sustained Energy: Stay fueled and perform at your best in workouts and daily life.</li>
          <li>Improved Recovery: Support muscle repair and reduce post-workout soreness.</li>
          <li>Holistic Wellness: Enhance physical and mental health through balanced nutrition.</li>
        </ul>
        <h3>How to Get Started</h3>
        <p>
          Join X Engine and discover how personalized nutrition can transform your fitness journey. From meal planning to expert tips, we’re here to help you fuel your body for success.
        </p>
        <p>Fuel up with X Engine’s nutrition plans and take your fitness to the next level!</p>
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
