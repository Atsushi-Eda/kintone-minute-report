import React from 'react';
import Text from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SendIcon from '@mui/icons-material/Send';
import { useSelector, useDispatch } from 'react-redux';
import {
  updateMessageContent,
  clearMessageContent,
  selectMessageContent,
} from 'state/formSlice';
import { postMessage } from 'api/message';

const Form: React.VFC = () => {
  const dispatch = useDispatch();
  const messageContent = useSelector(selectMessageContent);
  return (
    <div className='form'>
      <Text
        value={messageContent}
        onChange={(e) => {
          dispatch(updateMessageContent(e.target.value));
        }}
        onKeyPress={(e) => {
          if (e.key === 'Enter') {
            postMessage(messageContent);
            dispatch(clearMessageContent());
          }
        }}
        fullWidth
        variant='standard'
      />
      <IconButton color={messageContent ? 'primary' : 'default'}>
        <SendIcon />
      </IconButton>
    </div>
  );
};
export default Form;
