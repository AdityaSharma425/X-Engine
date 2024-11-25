import styles from "./classes.module.css";

const HeroSection = () => {
  return (
    <div
      className={`${styles["hero-section"]} margin-sections main-background`}
      >
      <h1 className="main-heading">Services</h1>
    </div>
  );
};

export default HeroSection;
