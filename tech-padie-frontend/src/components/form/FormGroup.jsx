import PropTypes from 'prop-types';
function FormGroup({ label, util, children }) {
    return (
      <div className="flex flex-col">
        <label htmlFor={util} className="text-black">
          {label}
        </label>
        {children}
      </div>
    );
  }

  FormGroup.propTypes = {
    label: PropTypes.string.isRequired,   
    util: PropTypes.string.isRequired,     
    children: PropTypes.node.isRequired,   
  };
  
  export default FormGroup;
  