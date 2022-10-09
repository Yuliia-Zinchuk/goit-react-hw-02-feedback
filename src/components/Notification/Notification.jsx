import PropTypes from 'prop-types';
import css from '../Feedback/FeedBack.module.css';
export const Notification = ({ message }) => (
  <>
    <span className={css.label}>{message}</span>
  </>
);
