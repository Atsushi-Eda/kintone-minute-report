import { Message } from 'types/message';

export const getMessage = (record: kintone.types.SavedFields): Message => ({
  id: record.$id.value,
  content: record.content.value,
  isToDo: record.isToDo.value === '1',
  toDo: record.toDo.value === '1',
  dateTime: record.作成日時.value,
  userCode: record.作成者.value.code,
});

export const getMessages = (records: kintone.types.SavedFields[]): Message[] =>
  records.map(getMessage);
