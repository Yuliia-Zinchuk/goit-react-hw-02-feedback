import PropTypes from 'prop-types';
import css from './Statistics.module.css';
export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <div className={css.stat}>
        <ul className={css.stat_list}>
          <li className={css.item}>
            <span className={css.label}>Good: {good}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Neutral: {neutral} </span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Bad: {bad}</span>
          </li>
          <li className={css.item}>
            <span className={css.label}>Total: {total}</span>
          </li>
          {good > 0 && (
            <li className={css.item}>
              <span className={css.label}>
                Positive feedback: {positivePercentage}%
              </span>
            </li>
          )}
        </ul>
      </div>
    </>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
