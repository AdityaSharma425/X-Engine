import { articlesNewsData } from "../../data/data";
import { useNavigate } from "react-router";
import { blogArticlesNewsData } from "../../data/data";
import styles from "./home.module.css";

const ArticlesNews = () => {
  const navigate = useNavigate();
  return (
    <div className={`${styles["articles-news"]} container sections-padding`}>
      <h2>Articles & Blogs</h2>

      

      {blogArticlesNewsData.slice(0, 3).map((ele) => {
        return (
          <div key={ele.id}>
            {/* <span>March 22, 2022</span> */}
            <span>{ele.category}</span>
            <h3>{ele.title}</h3>
            <p>
              {ele.description}
            </p>
            <button onClick={() => navigate(`/blog/single/${ele.id}`)}>Read More</button>
          </div>
        );
      })}
    </div>
  );
};

export default ArticlesNews;
