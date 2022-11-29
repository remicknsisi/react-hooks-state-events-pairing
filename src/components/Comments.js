import React from "react";

function Comments({ comments, isHiding }){

    const commentsToDisplay = comments.map(comment => {
        return (
            <div>
                <h3>{comment.user}</h3>
                <p>{comment.comment}</p>
            </div>
        )
    })

    return(
        <div>
            <h2>2 Comments</h2>
            {isHiding ? '' : commentsToDisplay}
        </div>
    )
}

export default Comments;