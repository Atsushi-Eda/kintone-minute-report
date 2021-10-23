import React from 'react';
import Message from 'components/Message';
import { useSelector } from 'react-redux';
import { selectMessagesInChannel } from 'state/viewSlice';

const Messages: React.VFC = () => {
  const messagesInChannel = useSelector(selectMessagesInChannel);
  return (
    <div className='messages'>
      {messagesInChannel.map((message) => (
        <Message key={message.id} message={message} />
      ))}
    </div>
  );
};

export default Messages;
