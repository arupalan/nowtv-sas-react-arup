import React, { memo } from 'react';
import Moment from 'moment';
import cx from 'classnames';
import s from './MemoMessageRenderer.module.scss';

function MemoMessageRenderer({
  key,
  style,
  chattime,
  fullName,
  email,
  avatar,
  message,
}) {
  return (
    <div
      key={key}
      style={style}
      className={s.messagerow}
      data-cy="message__container"
    >
      <div className={s.content}>
        <div className={s.chatboxsingleline}>
          <abbr className={s.timestamp}>{Moment(chattime).format('LL')}</abbr>
        </div>
        <div className={cx(s.directchatmsg, s.dottedborder)}>
          <div className={cx(s.directchatinfo, s.clearfix)}>
            <span className={cx(s.directchatname, s.pullleft)}>
              <strong>{fullName}</strong>
            </span>
          </div>
          <img
            src={
              avatar
                ? avatar
                : 'https://dummyimage.com/100x100/f0e4f0/0011ff.jpg&text=Missing'
            }
            alt="avatar"
          />
          <div className={s.directchattext}>{message}</div>
          <div className={cx(s.directchatinfo, s.clearfix)}>
            <span className={cx(s.directchattimestamp, s.pullright)}>
              {Moment(chattime).format('hh:mm A')}
            </span>
          </div>
          <div className={cx(s.directchatinfo, s.clearfix)}>
            <span className={cx(s.directchatimgreplysmall, s.pullleft)} />
            <span
              className={s.directchatreplyname}
              data-cy="hover__email__container"
            >
              {email}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

function arePropsEqual(prevProps, nextProps) {
  return prevProps.key === nextProps.key;
}

// Wrap MemoMessageRenderer component using `React.memo()` and pass `arePropsEqual`
export default memo(MemoMessageRenderer, arePropsEqual);
