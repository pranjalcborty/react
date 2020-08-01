import React from "react";

const Like = (props) => {
    let icon = props.isLiked ? "❤️" : "🤍";
    return (
        <button onClick={props.onClick} className="btn btn-outline-dark">
            {icon}
        </button>
    );
};

export default Like;
