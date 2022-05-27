import React, { Component } from 'react';
import {
  FeedbackForm,
  FeedbackFormTitle,
  FeedbackFormButton,
  StatisticsList,
} from './Feedback.styled';

class Feedback extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // console.log(evt.good);

  feedbackGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  feedbackNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  feedbackBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  render() {
    const countTotalFeedback = Object.values(this.state).reduce(
      (total, number) => total + number,
      0
    );

    return (
      <FeedbackForm>
        <FeedbackFormTitle>Please leave feadback</FeedbackFormTitle>
        <div>
          <FeedbackFormButton
            type="button"
            onClick={this.feedbackGood}
            color="green"
          >
            good
          </FeedbackFormButton>
          <FeedbackFormButton
            type="button"
            onClick={this.feedbackNeutral}
            color="blue"
          >
            neutral
          </FeedbackFormButton>
          <FeedbackFormButton
            type="button"
            onClick={this.feedbackBad}
            color="red"
          >
            bad
          </FeedbackFormButton>
        </div>
        <div>
          <h2>Statistics</h2>
          <StatisticsList>
            <li>Good: {this.state.good}</li>
            <li>Neutral: {this.state.neutral}</li>
            <li>Bad: {this.state.bad}</li>
            <li>Total: {this.countTotalFeedback}</li>
            <li>Positive feedback: {}%</li>
          </StatisticsList>
        </div>
      </FeedbackForm>
    );
  }
}

export default Feedback;
