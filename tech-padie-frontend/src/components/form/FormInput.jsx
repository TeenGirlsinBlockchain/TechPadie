import PropTypes from 'prop-types';
// form input component: Displays only the input box on the DOM/clientside
// The id as util, type as type, name as name and so on, also collect userpersonal styles via inputStyles

function FormInput({
    util = '',
    type,
    name,
    title,
    value,
    placeholder,
    handleChange,
    inputStyles = '',
    required = true,
  }) {
    return (
      <input
        id={util}
        type={type}
        name={name}
        title={title}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        placeholder={placeholder}
        className={`appearance-none border border-gray-300 bg-white px-5 py-1  text-black outline-none ${inputStyles}`}
        required={required}
      />
    );
  }

  FormInput.propTypes = {
    util: PropTypes.string,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    title: PropTypes.string,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    inputStyles: PropTypes.string,
    required: PropTypes.bool,
  };
  
  export default FormInput;
  