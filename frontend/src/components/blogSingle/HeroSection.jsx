import styles from "./blogSingle.module.css";
import photo from "../../assets/blogSingle.png";
import photo2 from "../../assets/blog9.png";
import { useParams } from "react-router-dom";
import { blogArticlesNewsData } from "../../data/data";

const HeroSection = () => {
  const { id } = useParams();
  const article = blogArticlesNewsData.find((ele) => ele.id === parseInt(id));
  return (
    <div
      className={`${styles["hero-section"]} container margin-sections `}
      >
      <p className="paragraph">March 22, 2022</p>
      <h2>{article.title}</h2>
      <div>
        <h4>{article.category}</h4>
        <div className={styles.small_image}>
          <img src={article.thumbnail} alt="" />
          <p>{article.name}</p>
        </div>
      </div>
      <img src={article.image} alt="Program to Improve Your Weakness" />
    </div>
  );
};

export default HeroSection;
