import PropTypes from 'prop-types';
import { getColorLable } from './helpers';
import { FeedbackFormButton } from './FeedbackOptions.styled';

export default function FeedbackOptions({ options, onLeaveFeedback }) {
  return (
    <div>
      {options.map(option => (
        <FeedbackFormButton
          key={option}
          type="button"
          onClick={() => onLeaveFeedback(option)}
          color={getColorLable(option)}
        >
          {option}
        </FeedbackFormButton>
      ))}
    </div>
  );
}

FeedbackOptions.protoTypes = {
  goodBtn: PropTypes.number.isRequired,
  neutralBtn: PropTypes.number.isRequired,
  badBtn: PropTypes.number.isRequired,
};
