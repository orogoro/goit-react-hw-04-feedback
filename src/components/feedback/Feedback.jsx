// import React, { Component } from 'react';
// import Statistics from './Statistics';
// import FeedbackOptions from './FeedbackOptions';
// import Section from './Section';
// import Notification from './Notification';

// export default class Feedback extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   //   feedbackGood = () => {
//   //     this.setState(prevState => ({
//   //       good: prevState.good + 1,
//   //     }));
//   //   };

//   //   feedbackNeutral = () => {
//   //     this.setState(prevState => ({
//   //       neutral: prevState.neutral + 1,
//   //     }));
//   //   };

//   //   feedbackBad = () => {
//   //     this.setState(prevState => ({
//   //       bad: prevState.bad + 1,
//   //     }));
//   //   };

//   onLeaveFeedback = lable => {};

//   countTotalFeedback = () => {
//     return Object.values(this.state).reduce(
//       (total, number) => total + number,
//       0
//     );
//   };

//   countPositiveFeedbackPercentage = () => {
//     return this.state.good === 0
//       ? 100 - 100 * ((this.state.bad + this.state.neutral) / 4)
//       : 100 -
//           ((this.state.bad + this.state.neutral) / this.countTotalFeedback()) *
//             100;
//   };

//   render() {
//     const option = Object.keys(this.state);
//     return (
//       <Section title={'Please leave feadback'}>
//         <FeedbackOptions
//           options={option}
//           //   onLeaveFeedback={this.onLeaveFeedback}

//           //   goodBtn={this.onLeaveFeedback}
//           //   neutralBtn={this.feedbackNeutral}
//           //   badBtn={this.feedbackBad}
//         />
//         <div>
//           <h2>Statistics</h2>
//           {this.countTotalFeedback() > 0 ? (
//             <Statistics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               test={this.state.test}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           ) : (
//             <Notification message={'There is no feedback'} />
//           )}
//         </div>
//       </Section>
//     );
//   }
// }
