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
      <ul className={css.stat_list}>
        <li className={css.item}>
          <span className={css.label}>Good: {good}</span>
          {/* <span className={css.count}></span> */}
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
        <li className={css.item}>
          <span className={css.label}>
            Positive feedback: {positivePercentage}%
          </span>
        </li>
      </ul>
    </>
  );
};

// Statistics.propTypes = {
//   title: PropTypes.string,

//   stats: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       label: PropTypes.string.isRequired,
//       percentage: PropTypes.number.isRequired,
//     }).isRequired
//   ),
// };
