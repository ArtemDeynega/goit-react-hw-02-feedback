import PropTypes from 'prop-types';

import { Button } from '.';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return Object.keys(options).map((option, index) => {
    return (
      <Button
        key={index}
        type="button"
        onClick={() => {
          onLeaveFeedback(option);
        }}
      >
        {option}
      </Button>
    );
  });
};

FeedbackOptions.propTypes = {
  option: PropTypes.shape({
    good: PropTypes.number,
    bad: PropTypes.number,
    neutral: PropTypes.number,
  }),
  onLeaveFeedback: PropTypes.func,
};
