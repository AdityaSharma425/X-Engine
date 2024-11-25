import styles from "./yogaClass.module.css";
import photo1 from "../../assets/yoga2.png";

const Second = () => {
  return (
    <div className={`${styles.second} container sections-padding`}>
      <div>
        <img src={photo1} alt="" />
        <span>March 22, 2022</span>
        <span>Fat Loss</span>
        <h2>The Healthy Life Style For All</h2>
        <p>Yoga with X Engine: Find Your Balance and Strength</p>
        <p>In today’s fast-paced world, fitness often focuses on physical endurance and strength, but true health requires balance. At X Engine, we believe in integrating the transformative practice of yoga into your fitness journey to create harmony between the body and mind.</p>
        <p>Why Yoga Matters</p>
        <p>Yoga is more than just stretching; it’s a practice that connects breath, movement, and mindfulness. Regular yoga practice improves flexibility, enhances muscle tone, and fosters mental clarity. It’s the perfect way to complement CrossFit or any intense workout routine, ensuring your body recovers effectively and remains agile.</p>
        <p>What Makes X Engine Yoga Different?</p>
        <p>At X Engine, our yoga sessions are designed with precision and care, tailored to all fitness levels. Whether you're new to yoga or a seasoned practitioner, our approach ensures you benefit from personalized attention. Our focus on proper technique and alignment helps you achieve your goals safely and effectively.</p>
        <p>Benefits of Yoga at X Engine</p>
        <p>Improved Recovery: Reduce muscle soreness and prevent injuries with targeted yoga stretches.</p>
        <p>Enhanced Flexibility: Improve your range of motion to perform better in workouts.</p>
        <p>Mental Clarity: Incorporate mindfulness techniques to reduce stress and boost focus.</p>
        <p>Holistic Wellness: Build a stronger connection between your physical and emotional health.</p>
        <p>How to Get Started</p>
        <p>Becoming a part of the X Engine yoga experience is easy. Sign up for our yoga programs today and explore how this ancient practice can transform your fitness journey. Whether you’re looking to unwind, recover, or build a stronger foundation for your workouts, X Engine’s yoga sessions are here to guide you every step of the way.</p>
        <p>Start your yoga journey with X Engine and discover the power of balance, strength, and mindfulness.</p>
      </div>
      <div>
        <h3>Class Details</h3>
        <p>Objectively innovate empowered manufactured products</p>
        <p className={styles.info}>Duration : <span>45 Minutes </span></p>
        <p className={styles.info}>Intensity :<span>High </span></p>
        <p className={styles.info}>Fitness Level :<span>Advanced </span></p>
        <p className={styles.info}>Schedule :<span>Monday, Saturday </span></p>
        <button>Book a Class</button>
      </div>
    </div>
  );
};

export default Second;
