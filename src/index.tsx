import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from 'components/App';
import { addSocketEventListener } from 'api/socket';
import { getUsers } from 'api/users';
import { getChannels } from 'api/channel';
import { getMessages } from 'converter/message';
import store from 'state/store';
import { updateUsers, updateChannels, updateMessages } from 'state/viewSlice';

kintone.events.on(['app.record.index.show'], async (event) => {
  const [users, channels] = await Promise.all([
    getUsers(),
    getChannels(kintone.getLoginUser().code),
  ]);
  const messages = getMessages(event.records);
  addSocketEventListener(users);

  store.dispatch(updateUsers(users));
  store.dispatch(updateChannels(channels));
  store.dispatch(updateMessages(messages));
  ReactDom.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

  return event;
});
