/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from 'types/state';
import { User } from 'types/user';
import { Channel } from 'types/channel';
import { Message } from 'types/message';

export const slice = createSlice({
  name: 'view',
  initialState: { users: [], channels: [], channelIndex: 0, messages: [] },
  reducers: {
    updateUsers: (view: State['view'], action: PayloadAction<User[]>) => {
      view.users = action.payload;
    },
    updateChannels: (view: State['view'], action: PayloadAction<Channel[]>) => {
      view.channels = action.payload;
    },
    updateChannelIndex: (
      view: State['view'],
      action: PayloadAction<number>
    ) => {
      view.channelIndex = action.payload;
    },
    updateMessages: (view: State['view'], action: PayloadAction<Message[]>) => {
      view.messages = action.payload;
    },
    addMessage: (view: State['view'], action: PayloadAction<Message>) => {
      view.messages.push(action.payload);
    },
    updateToDo: (view: State['view'], action: PayloadAction<Message>) => {
      const index = view.messages.findIndex(
        ({ id }) => id === action.payload.id
      );
      view.messages[index].toDo = action.payload.toDo;
    },
  },
});
export const {
  updateUsers,
  updateChannels,
  updateChannelIndex,
  updateMessages,
  addMessage,
  updateToDo,
} = slice.actions;

export const selectUsers = (state: State) => state.view.users;
export const selectChannels = (state: State) => state.view.channels;
export const selectChannelIndex = (state: State) => state.view.channelIndex;
export const selectChannel = (state: State) =>
  selectChannels(state)[selectChannelIndex(state)];
export const selectMessages = (state: State) => state.view.messages;
export const selectMessagesInChannel = (state: State) =>
  !selectChannel(state).users
    ? selectMessages(state)
    : selectMessages(state).filter((message) =>
        selectChannel(state).users?.includes(message.userCode)
      );

export default slice.reducer;
