import styles from "./yogaClass.module.css";
import photo1 from "../../assets/Xcross.jpg";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>CrossFit with X Engine: Push Your Limits, Redefine Fitness</p>
        <p>
          At X Engine, CrossFit is not just a workout—it’s a lifestyle. Our CrossFit programs are designed to challenge you with varied, high-intensity functional movements, helping you build strength, endurance, and resilience like never before.
        </p>
        <h3>Why CrossFit Matters</h3>
        <p>
          CrossFit combines weightlifting, cardio, and bodyweight exercises into dynamic workouts that test your physical and mental limits. It’s perfect for anyone looking to improve overall fitness, burn calories, and achieve measurable results in a supportive, community-driven environment.
        </p>
        <h3>What Makes X Engine CrossFit Unique?</h3>
        <p>
          Guided by Rahul Sharma’s expertise, X Engine takes a personalized approach to CrossFit. Whether you’re a beginner or an advanced athlete, our programs are designed to push your limits safely while fostering continuous growth and improvement.
        </p>
        <h3>Benefits of CrossFit at X Engine</h3>
        <ul>
          <li>Total-Body Fitness: Enhance strength, endurance, and agility with varied workouts.</li>
          <li>Community Support: Be part of a motivated group striving for their best.</li>
          <li>Time-Efficient Training: Maximize results with short, intense sessions.</li>
          <li>Mental Toughness: Build discipline and resilience through challenging routines.</li>
        </ul>
        <h3>How to Get Started</h3>
        <p>
          Join X Engine to experience the transformative power of CrossFit. Whether you’re aiming for functional fitness or peak performance, our programs are tailored to guide you every step of the way.
        </p>
        <p>
          Unleash your potential with X Engine’s CrossFit workouts. Let’s push boundaries and achieve greatness together!
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
