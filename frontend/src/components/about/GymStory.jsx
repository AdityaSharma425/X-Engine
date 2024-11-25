import { gymStoryData } from "../../data/data";

import styles from "./about.module.css";

const GymStory = () => {
  return (
    <div
      className={`${styles["gym-story"]} container sections-padding`}
      >
      <div className={styles["section-one"]}>
        {gymStoryData.slice(0, 2).map((ele) => {
          return (
            <div key={ele.id}>
              {ele?.welcome && <p>Welcome</p>}
              <h2>{ele.title}</h2>
              <p>
                {ele.description}
              </p>
              {ele?.image && <img src={ele.image} alt="" />}
            </div>
          );
        })}
      </div>

      <div className={styles["section-two"]}>
        {gymStoryData.slice(2).map((ele) => {
          return (
            <div key={ele.id}>
              <h2>{ele.title}</h2>
              <p>
                {ele.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GymStory;
