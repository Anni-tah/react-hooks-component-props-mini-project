import React from "react";
import Article from "./Article";
function ArticleList({posts}){
    
    const postDisp=posts.map((post)=>(
      
        <Article key={post.id} 
            title={post.title} 
            date={post.date} 
            preview={post.preview} 
            time ={post.minutes}
            />
    ));
    return <main>
       {postDisp}
    </main>
}
export default ArticleList;