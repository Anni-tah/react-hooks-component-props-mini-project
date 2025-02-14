import React from "react";
function Article({title,preview,date='January 1, 1970', time}){
    function generateReadingEmoji(time){
       
        if (time<30){
            const duration=Math.ceil(time/5);
            return "☕️".repeat(duration)
        
        }else{
            const duration =Math.ceil(time/10);
            return "🍱".repeat(duration);

        }
       

    }
    return <article>
        <h3>{title}</h3>
        <small>{`${date}  ${generateReadingEmoji(time)}   ${time}   min read`}</small>
        <p>{preview}</p>
    </article>
   
}
export default Article;