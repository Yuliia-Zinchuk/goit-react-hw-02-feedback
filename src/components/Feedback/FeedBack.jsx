import PropTypes from 'prop-types';
import { Component } from 'react';
import css from './FeedBack.module.css';
export const FeedBack = ({ id, good, neutral, bad }) => {
  return (
    <div className={css.card}>
      <h1 className={css.title}>Please leave feedback</h1>
      <div className={css.btn_list}>
        <button className={css.btn}>Good</button>
        <button className={css.btn}>Neutral</button>
        <button className={css.btn}>Bad</button>
      </div>
      <h2 className={css.title_list}>Statistics</h2>
      <ul className={css.stat_list}>
        <li className={css.item}>
          <span className={css.label}>Good: </span>
          {/* <span className={css.count}></span> */}
        </li>
        <li className={css.item}>
          <span className={css.label}>Neutral: </span>
        </li>
        <li className={css.item}>
          <span className={css.label}>Bad: </span>
        </li>
      </ul>
    </div>
  );
};
