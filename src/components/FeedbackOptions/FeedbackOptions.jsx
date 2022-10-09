import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
//import css from './FeedBack.module.css';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <>
      {Object.keys(options).map(option => (
        <button
          key={nanoid()}
          name={option}
          //   type={type}
          onClick={onLeaveFeedback}
          // className={css.btn}
        >
          {option}
        </button>
      ))}
    </>
  );
};
