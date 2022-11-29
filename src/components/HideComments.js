import React from "react";

function HideComments({ onHide, isHiding }){

    return(
        <button onClick={onHide}>{isHiding ? "Show Comments" : "Hide Comments"}</button>
    )
}

export default HideComments;