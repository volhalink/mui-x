import * as React from 'react';
import dayjs from 'dayjs';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';

const fiveAM = dayjs().set('hour', 5).startOf('hour');
const nineAM = dayjs().set('hour', 9).startOf('hour');

export default function TimeValidationMinTime() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer>
        <DemoItem label="TimePicker">
          <TimePicker defaultValue={fiveAM} minTime={nineAM} />
        </DemoItem>
        <DemoItem label="DateTimePicker">
          <DateTimePicker defaultValue={fiveAM} minTime={nineAM} />
        </DemoItem>
      </DemoContainer>
    </LocalizationProvider>
  );
}
