import React from 'react';
import PropTypes from 'prop-types';
import s from './AddMessage.module.scss';
import cx from 'classnames';

const AddMessage = props => {
  let addMessageTextarea;

  return (
    <section id="new-message">
      <div className={s.popupMessagesFooter}>
        <textarea
          onKeyPress={e => {
            if (e.key === 'Enter') {
              props.dispatch(addMessageTextarea.value, 'Me');
              addMessageTextarea.value = '';
            }
          }}
          id="status_message"
          placeholder="Type a message..."
          rows="10"
          cols="40"
          name="message"
          ref={node => {
            addMessageTextarea = node;
          }}
        />
        <div className={s.btnFooter}>
          <button className={s.bgNone}>
            <i className="glyphicon glyphicon-film" />{' '}
          </button>{' '}
          <button className={s.bgNone}>
            <i className="glyphicon glyphicon-camera" />{' '}
          </button>{' '}
          <button className={s.bgNone}>
            <i className="glyphicon glyphicon-paperclip" />{' '}
          </button>{' '}
          <button className={cx(s.bgNone, s.pullRight)}>
            <i className="glyphicon glyphicon-thumbs-up" />{' '}
          </button>{' '}
        </div>{' '}
      </div>{' '}
    </section>
  );
};

AddMessage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

export default AddMessage;
