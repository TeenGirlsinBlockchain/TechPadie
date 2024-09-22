import PropTypes from "prop-types";
// Button component: For usage throughout the entire app, dynamic reusable component

function Button({ type = "button", handleClick, addedStyles = "", children }) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`rounded-full border 
         px-8 py-2 bg-[#F1F1F1] active:bg-[#227FA1] active:text-white focus:bg-[#227FA1] focus:text-white ${addedStyles} `}
    >
      {children}
    </button>
  );
}

//TODO: #10 REFACTOR CODEBASE HERE AND DELETE REDUNDANT COMPONENTS

Button.propTypes = {
  type: PropTypes.string, 
  handleClick: PropTypes.func.isRequired, 
  addedStyles: PropTypes.string, 
  children: PropTypes.node.isRequired, 
};

export default Button;
