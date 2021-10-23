import { socketUrl } from 'parameters';
import store from 'state/store';
import { getMessage } from 'converter/message';
import { addMessage, updateToDo } from 'state/viewSlice';
import { User } from 'types/user';
import iziToast from 'izitoast';

export const socket = new WebSocket(socketUrl);
export const addSocketEventListener = (users: User[]) => {
  socket.addEventListener('message', (e) => {
    const data = JSON.parse(e.data);
    const message = getMessage(data.record);
    if (data.type === 'ADD_RECORD') {
      store.dispatch(addMessage(message));
      if (message.userCode !== kintone.getLoginUser().code) {
        iziToast.info({
          title: `${
            users.find(({ code }) => message.userCode === code)?.name
          }: ${message.content}`,
          position: 'topRight',
        });
      }
    }
    if (data.type === 'UPDATE_RECORD') {
      store.dispatch(updateToDo(message));
    }
  });
};
