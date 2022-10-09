import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import css from './FeedbackOptions.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      <div className={css.btn_list}>
        {Object.keys(options).map(option => (
          <button
            key={nanoid()}
            name={option}
            type="Button"
            onClick={onLeaveFeedback}
            className={css.btn}
          >
            {option}
          </button>
        ))}
      </div>
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.object.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
