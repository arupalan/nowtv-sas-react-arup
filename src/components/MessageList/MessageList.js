import React from 'react';
import { List } from 'react-virtualized';
import s from './message-list.module.scss';
import cx from 'classnames';

import MemoMessageRenderer from '../MemoMessageRenderer/MemoMessageRenderer';
import getChatLog from '../../services/service';

const listHeight = 800;
const rowHeight = 175;
const rowWidth = 400;

class MessageList extends React.Component {
  constructor() {
    super();
    this.state = { chats: [] };
  }

  async componentDidMount() {
    const chats = await getChatLog();
    this.setState({ chats: chats });
  }

  render() {
    return (
      <div className={s.device}>
        <div className={s.chat}>
          <List
            width={rowWidth}
            height={listHeight}
            rowHeight={rowHeight}
            rowRenderer={this.renderRow}
            rowCount={this.state.chats.length}
            overscanRowCount={3}
          />
        </div>
        <div className={s.popupMessagesFooter}>
          <textarea
            id="status_message"
            placeholder="Type a message..."
            rows="10"
            cols="40"
            name="message"
          />
          <div className={s.btnFooter}>
            <button className={s.bgNone}>
              <i className="glyphicon glyphicon-film" />{' '}
            </button>
            <button className={s.bgNone}>
              <i className="glyphicon glyphicon-camera" />{' '}
            </button>
            <button className={s.bgNone}>
              <i className="glyphicon glyphicon-paperclip" />{' '}
            </button>
            <button className={cx(s.bgNone, s.pullRight)}>
              <i className="glyphicon glyphicon-thumbs-up" />{' '}
            </button>
          </div>
        </div>
      </div>
    );
  }

  renderRow = ({ index, key, style }) => {
    return (
      <MemoMessageRenderer
        key={key}
        style={style}
        chattime={this.state.chats[index].timestamp}
        fullName={this.state.chats[index].fullName}
        email={this.state.chats[index].email}
        avatar={this.state.chats[index].avatar}
        message={this.state.chats[index].message}
      />
    );
  };
}

export default MessageList;
