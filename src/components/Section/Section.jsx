import PropTypes from 'prop-types';
import css from '../Feedback/FeedBack';
export const Section = ({ title, children }) => {
  return (
    <>
      <section>
        <h1 className={css.title}>{title}</h1>
        {children}
      </section>
    </>
  );
};
