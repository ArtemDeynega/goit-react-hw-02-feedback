import PropTypes from 'prop-types';

import { Stats } from '.';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <>
      <ul>
        <Stats>Good: {good}</Stats>
        <Stats>Neutral: {neutral}</Stats>
        <Stats>Bad: {bad}</Stats>
        <Stats>Total: {total}</Stats>
        <Stats>Positive feedback: {positivePercentage}%</Stats>
      </ul>
    </>
  );
};
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number,
};
