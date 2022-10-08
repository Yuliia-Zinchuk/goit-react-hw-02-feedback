import { Component } from 'react';
import { Button } from './Button/Button';
import FeedBack from './Feedback/FeedBack';
import css from './Feedback/FeedBack.module.css';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleIncrementGood = e => {
    this.setState(prevState => {
      return {
        [e.target.name]: prevState[e.target.name] + 1,
      };
    });
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  ountPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good > 0) return Math.round((100 / this.countTotalFeedback()) * good);
  };
  render() {
    const { good, neutral, bad } = this.state;

    console.log(this.ountPositiveFeedbackPercentage());
    return (
      <>
        <div className={css.card}>
          <h1 className={css.title}>Please leave feedback</h1>
          {/* это три кнопки работающие но с одной функцией хендл  */}
          {/* <div className={css.btn_list}>
            <button
              onClick={this.handleIncrementGood}
              name="good"
              className={css.btn}
            >
              Good
            </button>
            <button
              onClick={this.handleIncrementGood}
              name="neutral"
              className={css.btn}
            >
              Neutral
            </button>
            <button className={css.btn}>Bad</button>
          </div> */}
          <Button
            type="Button"
            name="good"
            onIncremetGood={this.handleIncrementGood}
            text="good"
          />
          <Button
            type="Button"
            name="neutral"
            onIncremetGood={this.handleIncrementGood}
            text="good"
          />
          <Button
            type="Button"
            name="bad"
            onIncremetGood={this.handleIncrementGood}
            text="good"
          />
          <h2 className={css.title_list}>Statistics</h2>
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
              <span className={css.label}>
                Total: {this.countTotalFeedback()}
              </span>
            </li>
            <li className={css.item}>
              <span className={css.label}>
                Positive feedback: {this.ountPositiveFeedbackPercentage()}%
              </span>
            </li>
          </ul>
        </div>

        {/* <div>
          <button onClick={this.handleIncrementGood}>+</button>
          <h3>good: {good}</h3>
          <button onClick={this.handleIncrementNeutral}>+=</button>
          <h3>neutral: {neutral}</h3>
          <button onClick={this.handleIncrementBad}>+=</button>
          <h3>bad: {bad}</h3>
        </div> */}
      </>
    );
  }
}

// валидный ретурн с кнопками
//  return (
//    <>
//      <div>
//        <button onClick={this.handleIncrementGood}>+</button>
//        <h3>good: {good}</h3>
//        <button onClick={this.handleIncrementNeutral}>+=</button>
//        <h3>neutral: {neutral}</h3>
//        <button onClick={this.handleIncrementBad}>+=</button>
//        <h3>bad: {bad}</h3>
//      </div>
//    </>
//  );

// export const App = () => {
//   return (
//     <div>
//       <FeedBack />
//     </div>
//   );
// };}
export { App };
