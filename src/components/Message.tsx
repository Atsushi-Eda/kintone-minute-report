import React from 'react';
import { Message as MessageType } from 'types/message';
import dayjs from 'dayjs';
import { useSelector } from 'react-redux';
import { selectUsers } from 'state/viewSlice';
import { toggleToDo } from 'api/message';

type Props = {
  message: MessageType;
};
const Message: React.VFC<Props> = ({ message }) => {
  const users = useSelector(selectUsers);
  const user = users.find(({ code }) => code === message.userCode);
  if (!user) {
    return <></>;
  }
  return (
    <div className='message'>
      <div className='icon'>
        <img src={user.icon} alt={user.name} />
      </div>
      <div className='text'>
        <div className='meta'>
          <div className='user'>{user.name}</div>
          <div className='time'>{dayjs(message.dateTime).format('HH:mm')}</div>
        </div>
        <div className='content'>
          <label>
            {message.isToDo ? (
              <input
                type='checkbox'
                className='checkbox'
                checked={message.toDo}
                onChange={() => {
                  toggleToDo(message.id, message.toDo);
                }}
              />
            ) : (
              <></>
            )}
            <span className={message.toDo ? 'done' : ''}>
              {message.content}
            </span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Message;
