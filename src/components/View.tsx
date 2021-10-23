import React from 'react';
import Box from '@mui/material/Box';
import Channels from 'components/Channels';
import Messages from 'components/Messages';

const View: React.VFC = () => (
  <div className='view'>
    <Box sx={{ flexGrow: 1, display: 'flex', minHeight: '20rem' }}>
      <Channels />
      <Messages />
    </Box>
  </div>
);

export default View;
