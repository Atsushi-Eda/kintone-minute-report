import { configureStore } from '@reduxjs/toolkit';
import viewSlice from 'state/viewSlice';
import formSlice from 'state/formSlice';

export default configureStore({
  reducer: {
    view: viewSlice,
    form: formSlice,
  },
});
