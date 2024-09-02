import React from "react";

const Button = (props) => {
  return (
    <button  className="px-5 py-3 bg-secondary_color text-white font-bold text-sm rounded-lg">
        {props.title}
    </button>
  );
};

export default Button;
