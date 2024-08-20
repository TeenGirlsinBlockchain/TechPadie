import PropTypes from 'prop-types';
// form component: takes in the type (as an header) and children to populate it's body

import Button from '..';

function Form({ formName, children }) {
  return (
    <form className="flex flex-col gap-2">
      {/* form children */}
      {children}

      <Button type="submit" addedStyles="mt-5 w-full genBtn">
        {formName}
      </Button>
    </form>
  );
}

Form.propTypes = {
    formName: PropTypes.string.isRequired, 
    children: PropTypes.node.isRequired,   
  };

export default Form;
