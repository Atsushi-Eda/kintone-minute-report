import React from 'react';
import Button from '@mui/material/Button';
import Create from '@mui/icons-material/Create';
import { dailyReportApp } from 'parameters';

const DailyReport: React.VFC = () => (
  <div className='daily-report'>
    <Button
      variant='contained'
      endIcon={<Create />}
      onClick={() => window.open(`../${dailyReportApp}/edit`)}
    >
      日報を書く
    </Button>
  </div>
);
export default DailyReport;
