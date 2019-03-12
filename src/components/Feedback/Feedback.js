import React from 'react';
import s from './Feedback.module.scss';

class Feedback extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <a
            className={s.link}
            href="https://github.com/arupalan/nowtv-sas-react-arup"
          >
            Ask a question
          </a>
          <span className={s.spacer}>|</span>
          <a
            className={s.link}
            href="https://github.com/arupalan/nowtv-sas-react-arup/issues/new"
          >
            Report an issue
          </a>
        </div>
      </div>
    );
  }
}

export default Feedback;
