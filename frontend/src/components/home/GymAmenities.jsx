import { gymAmenitiesData } from "../../data/data";

import styles from "./home.module.css";
import video from "../../assets/Xvid1.mp4";

const GymAmenities = () => {
  return (
    <div className={styles["gym-amenities"]}>
      <div
        className={`${styles["gym-amenities-content"]} container sections-padding`}>
        <div className={styles["gym-amenities-first"]}>
          <p>Our Offerings</p>
          <h2>Fueling Your Fitness Journey</h2>
          <p>
          At X Engine, we provide personalized fitness solutions, including tailored workout plans, expert guidance from Rahul Sharma, exclusive fitness content, and flexible consultations to help you achieve your health goals effectively.
          </p>
          {/* <img src={photo} alt="" /> */}
          <video width="550" height="692" controls>
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className={styles["gym-amenities-second"]}>
          {gymAmenitiesData.map((ele) => {
            return (
              <div key={ele.id}>
                <h5>
                  <i className="fa-regular fa-circle-check"></i>
                  {ele.title}
                </h5>
                <p>{ele.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GymAmenities;
