import PropTypes from 'prop-types';
import { FeedbackFormButton } from './Feedback.styled';

export default function FeedbackOptions({ goodBtn, neutralBtn, badBtn }) {
  return (
    <div>
      <FeedbackFormButton type="button" onClick={goodBtn} color="green">
        good
      </FeedbackFormButton>
      <FeedbackFormButton type="button" onClick={neutralBtn} color="blue">
        neutral
      </FeedbackFormButton>
      <FeedbackFormButton type="button" onClick={badBtn} color="red">
        bad
      </FeedbackFormButton>
    </div>
  );
}

FeedbackOptions.protoTypes = {
  goodBtn: PropTypes.number.isRequired,
  neutralBtn: PropTypes.number.isRequired,
  badBtn: PropTypes.number.isRequired,
};
