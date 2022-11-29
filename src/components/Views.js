import React from "react";

function Views({ views, uploadDate }){
    return(
        <p>
            {views} Views | Uploaded {uploadDate}
        </p>
    )
}

export default Views;