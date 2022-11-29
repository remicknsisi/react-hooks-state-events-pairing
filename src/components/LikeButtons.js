import React from "react";

function LikeButtons({ upvotes, downvotes, onLike, onUnlike }){
    function handleLike(){
        onLike()
    }

    function handleUnlike(){
        onUnlike()
    }

    return(
        <div>
            <button onClick={handleLike}>👍 {upvotes}</button>
            <button onClick={handleUnlike}>👎 {downvotes}</button>
        </div>
    )
}

export default LikeButtons;