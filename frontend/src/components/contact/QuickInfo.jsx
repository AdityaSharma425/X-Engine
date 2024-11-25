import { useState } from "react";
import styles from "./contact.module.css";

const QuickInfo = () => {
  const [active, setActive] = useState(Array(4).fill(false));
  const [activeIndex, setActiveIndex] = useState(-1);

  const paragraphHandler = (index) => {
    setActive((prevState) => {
      const newState = [...prevState];
      newState[index] = !newState[index];
      return newState;
    });

    setActiveIndex((prevIndex) => (prevIndex === index ? -1 : index));
  };

  return (
    <div className={`${styles["quick-info"]} sections-padding`}>
      <div>
        <div>
          <h4>What is X Engine?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 0 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(0)}></i>
        </div>
        <p className={active[0] ? styles.active : ""}>
        X Engine is a fitness platform founded by Rahul Sharma, offering personalized workout and diet plans tailored to your goals, along with expert guidance and access to exclusive fitness resources.
        </p>
      </div>
      <div>
        <div>
          <h4>How do I get started with X Engine?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 1 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(1)}></i>
        </div>
        <p className={active[1] ? styles.active : ""}>
        Simply sign up on our website, fill out your personal details, and choose a plan that fits your needs. You can also schedule a consultation with Rahul Sharma for personalized guidance.
        </p>
      </div>

      <div>
        <div>
          <h4>Can beginners join X Engine?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 2 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(2)}></i>
        </div>
        <p className={active[2] ? styles.active : ""}>
        Absolutely! X Engine caters to all fitness levels, from beginners to advanced enthusiasts. Our plans are scalable and designed to match your current fitness level and goals.
        </p>
      </div>

      <div>
        <div>
          <h4>What makes X Engine different from other fitness programs?</h4>
          <i
            className={`fa-solid fa-chevron-down ${
              activeIndex === 3 ? styles.activeIcon : ""
            }`}
            onClick={() => paragraphHandler(3)}></i>
        </div>
        <p className={active[3] ? styles.active : ""}>
        X Engine combines the precision of engineering with the intensity of CrossFit to offer personalized, science-backed fitness solutions, guided by Rahul Sharma’s expertise and dedication.
        </p>
      </div>
    </div>
  );
};

export default QuickInfo;
