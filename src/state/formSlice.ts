/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { State } from 'types/state';

export const slice = createSlice({
  name: 'form',
  initialState: { messageContent: '' },
  reducers: {
    updateMessageContent: (
      form: State['form'],
      action: PayloadAction<string>
    ) => {
      form.messageContent = action.payload;
    },
    clearMessageContent: (form: State['form']) => {
      form.messageContent = '';
    },
  },
});

export const { updateMessageContent, clearMessageContent } = slice.actions;
export const selectMessageContent = (state: State) => state.form.messageContent;

export default slice.reducer;
