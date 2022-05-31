import React, { Component } from 'react';
import Statistics from './feedback/statistics/Statistics';
import FeedbackOptions from './feedback/feedbackOptions/FeedbackOptions';
import Section from './feedback/section/Section';
import Notification from './feedback/notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = lable => {
    this.setState(prevState => ({
      [lable]: prevState[lable] + 1,
    }));
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce(
      (total, number) => total + number,
      0
    );
  };

  countPositiveFeedbackPercentage = () => {
    return this.state.good === 0
      ? 100 - 100 * ((this.state.bad + this.state.neutral) / 4)
      : 100 -
          ((this.state.bad + this.state.neutral) / this.countTotalFeedback()) *
            100;
  };

  render() {
    const option = Object.keys(this.state);
    return (
      <div className="container">
        <Section title={'Please leave feadback'}>
          <FeedbackOptions
            options={option}
            onLeaveFeedback={this.onLeaveFeedback}
          />
          <div>
            <h2>Statistics</h2>
            {this.countTotalFeedback() > 0 ? (
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                test={this.state.test}
                total={this.countTotalFeedback()}
                positivePercentage={this.countPositiveFeedbackPercentage()}
              />
            ) : (
              <Notification message={'There is no feedback'} />
            )}
          </div>
        </Section>
      </div>
    );
  }
}
