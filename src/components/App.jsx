import { useState } from 'react';
import Statistics from './feedback/statistics/Statistics';
import FeedbackOptions from './feedback/feedbackOptions/FeedbackOptions';
import Section from './feedback/section/Section';
import Notification from './feedback/notification/Notification';

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackOption = () => {
    const option = {
      good,
      neutral,
      bad,
    };
    return Object.keys(option);
  };

  const onLeaveFeedback = name => {
    switch (name) {
      case 'good':
        setGood(state => state + 1);

        break;
      case 'neutral':
        setNeutral(state => state + 1);
        break;
      case 'bad':
        setBad(state => state + 1);
        break;

      default:
        return;
    }
  };

  const total = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.round((good / total()) * 100);
    // return good === 0
    //   ? 100 - 100 * ((bad + neutral) / 4)
    //   : 100 - ((bad + neutral) / total()) * 100;
  };

  return (
    <div className="container">
      <Section title={'Please leave feadback'}>
        <FeedbackOptions
          options={feedbackOption()}
          onLeaveFeedback={onLeaveFeedback}
        />
        <div>
          <h2>Statistics</h2>
          {total() > 0 ? (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total()}
              positivePercentage={countPositiveFeedbackPercentage()}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </div>
      </Section>
    </div>
  );
}
