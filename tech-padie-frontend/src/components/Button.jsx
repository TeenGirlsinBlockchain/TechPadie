import PropTypes from "prop-types";
// Button component: For usage throughout the entire app, dynamic reusable component

function Button({ type = "button", onClick, addedStyles = "", children, isActive }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`rounded-full border px-8 py-2 ${
        isActive ? "bg-[#227FA1] text-white" : "bg-[#F1F1F1]"
      } ${addedStyles}`}
    >
      {children}
    </button>
  );
}

//TODO: #10 REFACTOR CODEBASE HERE AND DELETE REDUNDANT COMPONENTS

Button.propTypes = {
  type: PropTypes.string, 
  onClick: PropTypes.func.isRequired, 
  addedStyles: PropTypes.string, 
  children: PropTypes.node.isRequired, 
  isActive: PropTypes.bool,
};

export default Button;
