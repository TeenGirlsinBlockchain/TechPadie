import PropTypes from "prop-types";
// Button component: For usage throughout the entire app, dynamic reusable component

function Button({ type = "button", handleClick, addedStyles = "", children }) {
  return (
    <button
      type={type}
      onClick={handleClick}
      className={`rounded-xl border 
         px-2 py-1 ${addedStyles} `}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  type: PropTypes.string, 
  handleClick: PropTypes.func.isRequired, 
  addedStyles: PropTypes.string, 
  children: PropTypes.node.isRequired, 
};

export default Button;
