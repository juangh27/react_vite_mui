import * as React from 'react';
import dayjs, { Dayjs } from 'dayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { esES } from '@mui/x-date-pickers/locales';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import 'dayjs/locale/es';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export function ControlledComponent() {
    const defaultValue: Dayjs = dayjs('2024-08-15');

    const [value, setValue] = React.useState<Dayjs | null>(null);

    const handleDateChange = (newValue: Dayjs | null) => {
        setValue(newValue ?? defaultValue);
        //   console.log(newValue.$d);
    };

    return (
        <>
            <DemoContainer components={['DatePicker']}>
                <DatePicker value={value} onChange={handleDateChange} />
            </DemoContainer>
            <div>
                <div>
                    Selected date: {value ? value.format('DD-MM-YYYY') : 'No date selected'}
                </div>
                {/* { newValue }     */}
            </div>
        </>
    );
}
export function DatePickerBase() {
    return (
        <LocalizationProvider
            localeText={esES.components.MuiLocalizationProvider.defaultProps.localeText}
        >
            <DatePicker />
        </LocalizationProvider>
    );
}
export function DatePickerBase2() {
    return (
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="es">
            <DatePicker />
        </LocalizationProvider>
    );
}

