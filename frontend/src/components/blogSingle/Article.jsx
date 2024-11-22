import styles from "./blogSingle.module.css";
import { blogArticlesNewsData } from "../../data/data";

// const Article = () => {
//   const navigate = useNavigate();
//   return (
//     <div className={styles.article}>
//       <div className={styles.boxes}>
//         {blogArticlesNewsData.map((ele) => {
//           return (
//             <div
//               key={ele.id}
//               onClick={() => navigate("/blogSingle")}
//               data-aos="flip-up">
//               <img src={ele.image} alt="" />
//               <div>
//                 <span>March 22, 2022</span>
//                 <span>Fitness</span>
//                 <span>Health</span>
//               </div>
//               <h3>{ele.title}</h3>
//               <div>
//                 <img src={ele.thumbnail} alt="" />
//                 <h6>{ele.name}</h6>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };
import { useParams } from "react-router-dom";

const Article = () => {
  const { id } = useParams();
  const article = blogArticlesNewsData.find((ele) => ele.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className={styles.articleDetail}>
      
      <div className={styles.article}>
        <h2>{article.description}</h2>
        <br />
        
      {article.blog.split('\n').map((paragraph, index) => (
        <p key={index} >{paragraph}</p>
      ))}
      </div>
    </div>
  );
};

// export default ArticleDetail;

export default Article;
