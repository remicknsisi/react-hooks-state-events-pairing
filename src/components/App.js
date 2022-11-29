import React, { useState } from "react";
import video from "../data/video.js";
import Title from "./Title";
import Views from "./Views";
import LikeButtons from "./LikeButtons";
import HideComments from "./HideComments.js";
import Comments from "./Comments.js";

function App() {
  console.log("Here's your data:", video);
  const [upvotes, setUpvotes] = useState(9210)
  const [downvotes, setDownvotes] = useState(185)
  const [isHiding, setIsHiding] = useState(false)

  function onLike(){
    setUpvotes([parseInt(upvotes) + 1])
  }
  function onUnlike(){
    setDownvotes([parseInt(downvotes) + 1])
  }

  function onHide(){
    setIsHiding(!isHiding)
  }

  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={video.embedUrl}
        frameBorder="0"
        allowFullScreen
        title={video.title}
      />
      <Title title={video.title} />
      <Views views={video.views} uploadDate={video.createdAt} />
      <LikeButtons upvotes={upvotes} downvotes={downvotes} onLike={onLike} onUnlike={onUnlike}/>
      <br></br>
      <HideComments onHide={onHide} isHiding={isHiding}/>
      <Comments comments={video.comments} isHiding={isHiding}/>
    </div>
  );
}

export default App;
