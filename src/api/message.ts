export const postMessage = (messageContent: string) => {
  kintone.api(kintone.api.url('/k/v1/record'), 'POST', {
    app: kintone.app.getId(),
    record: {
      content: {
        value: messageContent.replace('*', ''),
      },
      isToDo: {
        value: messageContent.charAt(0) === '*' ? '1' : '0',
      },
    },
  });
};
export const toggleToDo = (id: string, toDo: boolean) => {
  kintone.api(kintone.api.url('/k/v1/record'), 'PUT', {
    app: kintone.app.getId(),
    id,
    record: {
      toDo: {
        value: toDo ? '0' : '1',
      },
    },
  });
};
