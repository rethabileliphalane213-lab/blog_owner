import { useLocation } from "react-router-dom";

function FullArticle() {
    const location = useLocation();
    const article = location.state?.article;

    return (
        <div className="article-container">
            <h1>{article.title}</h1>

            <div className="image-container">
                <img
                    src={article.image}
                    alt={article.title}
                />
            </div>

            <p>{article.post}</p>
        </div>
    );
}

export default FullArticle;