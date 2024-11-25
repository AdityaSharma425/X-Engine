import styles from "./trainers.module.css";
import video1 from "../../assets/Xvid1.mp4";
import video2 from "../../assets/Xvid2.mp4";
import video3 from "../../assets/Xvid3.mp4";
import video4 from "../../assets/Xvid4.mp4";
import video5 from "../../assets/Xvid5.mp4";
import video6 from "../../assets/Xvid6.mp4";
import video7 from "../../assets/Xvid7.mp4";
import video8 from "../../assets/Xvid8.mp4";
import video9 from "../../assets/Xvid9.mp4";
import video10 from "../../assets/Xvid10.mp4";


const Routines = () => {
  return (
    <div className={`${styles.routines} container`}>
      <p className="paragraph">Welcome</p>
      <h2>Take a look at my routines</h2>
      {[video1, video2, video3, video4, video5, video6, video7, video8, video9, video10].map((video, index) => (
        <video key={index} width="550" height="692" controls>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ))}
    </div>
  );
};

export default Routines;
