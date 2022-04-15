import { Component } from 'react';

import { NoFedback } from '.';
import { Section } from 'components/Section';
import { FeedbackOptions } from 'components/FeedbackOptions';
import { Statistics } from 'components/Statistics';

import { GlobalStyle } from 'GlobalStyled/GlobalStyled';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  handleOnClick = name => {
    this.setState(prevState => ({
      [name]: prevState[name] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };
  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const total = this.countTotalFeedback();

    return Math.round((good / total) * 100);
  };
  render() {
    const total = this.countTotalFeedback();
    const { good, bad, neutral } = this.state;
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={this.state}
            onLeaveFeedback={this.handleOnClick}
          />
        </Section>
        {total ? (
          <Section title="Statistics">
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              positivePercentage={positivePercentage}
            />
          </Section>
        ) : (
          <Section title="Statistics">
            <NoFedback>No feedback given</NoFedback>
          </Section>
        )}
        <GlobalStyle />
      </>
    );
  }
}
