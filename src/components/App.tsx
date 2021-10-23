import React from 'react';
import DailyReport from 'components/DailyReport';
import View from 'components/View';
import Form from 'components/Form';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#3498db',
    },
  },
});

const App: React.VFC = () => (
  <ThemeProvider theme={theme}>
    <div className='app'>
      <DailyReport />
      <View />
      <Form />
    </div>
  </ThemeProvider>
);
export default App;
