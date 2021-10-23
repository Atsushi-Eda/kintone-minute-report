declare namespace kintone.types {
  interface Fields {
    toDo: kintone.fieldTypes.RadioButton;
    isToDo: kintone.fieldTypes.RadioButton;
    content: kintone.fieldTypes.MultiLineText;
  }
  interface SavedFields extends Fields {
    $id: kintone.fieldTypes.Id;
    $revision: kintone.fieldTypes.Revision;
    更新者: kintone.fieldTypes.Modifier;
    作成者: kintone.fieldTypes.Creator;
    レコード番号: kintone.fieldTypes.RecordNumber;
    更新日時: kintone.fieldTypes.UpdatedTime;
    作成日時: kintone.fieldTypes.CreatedTime;
  }
}
