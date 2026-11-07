 function FullArticle(){
  return(
   <div className="article-container">
    <h1>{article.ticle}</h1>
    <div className="image-container">
      <img src={article.image} alt={article.title}  />
    </div>
    <p>{article.post}</p>
   </div>
  )
 }

export default FullArticle
