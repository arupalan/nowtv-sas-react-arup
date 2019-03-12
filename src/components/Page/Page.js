import React from 'react';
import PropTypes from 'prop-types';
import s from './Page.module.scss';
import ReactMarkdown from 'react-markdown';
import cx from 'classnames';

class Page extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    markdown: PropTypes.string.isRequired,
  };

  render() {
    const { title, markdown } = this.props;
    return (
      <div className={s.root}>
        <div className={s.container}>
          <div className={s.boxHeader}>
            <h3 className={cx(s.boxTitle, s.pr3)}>{title}</h3>
          </div>
          <div className={cx(s.boxBody, s.pr6)}>
            <ReactMarkdown source={markdown} />
          </div>
        </div>
      </div>
    );
  }
}

export default Page;
