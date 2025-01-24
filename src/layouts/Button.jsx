import React from "react";
import PropTypes from "prop-types";

const Button = (props) => {
  console.log(props.title); // Cek nilai title yang diterima
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-brightColor text-brightColor hover:bg-brightColor hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Button;
