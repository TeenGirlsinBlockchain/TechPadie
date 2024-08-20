import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

// Form footer: directs user to make a different action from the one currently render on screen.

function FormFooter({ link, question, action }) {
  return (
    <div className="mt-4 flex justify-center gap-4 text-2xl">
      <p>{question}</p>
      <Link
        to={link}
        className="underline-offset-3 font-bold text-secondary_normal hover:underline"
      >
        {action}
      </Link>
    </div>
  );
}

FormFooter.propTypes = {
    link: PropTypes.string.isRequired,      
    question: PropTypes.string.isRequired,  
    action: PropTypes.string.isRequired,    
};

export default FormFooter;
