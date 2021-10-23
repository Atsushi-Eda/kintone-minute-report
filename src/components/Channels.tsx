import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
  selectChannels,
  selectChannelIndex,
  updateChannelIndex,
} from 'state/viewSlice';

const Channels: React.VFC = () => {
  const channels = useSelector(selectChannels);
  const channelIndex = useSelector(selectChannelIndex);
  const dispatch = useDispatch();
  return (
    <Tabs orientation='vertical' value={channelIndex}>
      {channels.map((channel, index) => (
        <Tab
          key={channel.name}
          value={index}
          label={channel.name}
          onClick={() => dispatch(updateChannelIndex(index))}
        />
      ))}
    </Tabs>
  );
};

export default Channels;
