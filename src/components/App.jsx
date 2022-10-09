import { Component } from 'react';
// import { Button } from './Button/Button';
import { Statistics } from './Statistics/Statistics';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Section } from './Section/Section';
import { Notification } from './Notification/Notification';
// import FeedBack from './Feedback/FeedBack';
// import css from './Feedback/FeedBack.module.css';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = e => {
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
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    if (good > 0) return Math.round((100 / this.countTotalFeedback()) * good);
  };
  render() {
    const { good, neutral, bad } = this.state;
    // console.log(this.countTotalFeedback());
    // console.log(this.state);
    // console.log(this.countPositiveFeedbackPercentage());
    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            // type="Button"
            options={this.state}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          {good || neutral || bad ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
          {/* <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          /> */}
        </Section>
      </>
    );
  }
}

export { App };
