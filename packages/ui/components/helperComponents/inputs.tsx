import { Box, Button, Grid, InputLabel, Link, NativeSelect, TextField, Typography } from "@mui/material"
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { InputeTypes } from "./enum";

export const Inputs = (props: {
    grid?: number,
    width?: number,
    label: string,
    variant?: string,
    onChange: (e: any) => void,
    style?: Object,
    type?: string,
    dataType?: string,
    value?: any,
    selectList?: string[]
}) => {

    const { width, label, variant, onChange, style, grid, type, value, dataType,selectList } = props;
    const getAccordingToType = () => {
        if (type === InputeTypes.DATE) {
            return (<LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                    sx={{ width: 300, marginLeft: 2, marginRight: 2 }}
                    label={label}
                    value={value}
                    onChange={(newValue: any) => onChange(newValue)}
                />
            </LocalizationProvider>)
        } else if (type === InputeTypes.SELECT) {
            return (
                <Box>
                    <InputLabel variant="standard" htmlFor="uncontrolled-native">
                        {label}
                    </InputLabel>
                    <NativeSelect
                        sx={{ width: 300}}
                        defaultValue={value}
                        onChange={(event: any) => onChange(event.target.value)}
                        // inputProps={{
                        //     name: 'age',
                        //     id: 'uncontrolled-native',
                        // }}
                    >
                        <option value={""}>{`Select ${label}`}</option>
                        {selectList && selectList.map((el, i) => {
                            return (<option key={i} value={el.toUpperCase()}>{el}</option>)
                        })}
                    </NativeSelect>
                </Box>

            )
        }
        else if (!type || type === InputeTypes.STRING) {
            return <TextField required sx={{ width: width || 300, ...style }} id="input-with-sx" label={label} variant="standard" type={dataType} onChange={e => onChange(e.target.value)} />
        }
    }

    return (
        <Grid item sm={grid || 6} xs={12} sx={{}}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mt: 0 }}>
                {getAccordingToType()}
            </Box>
        </Grid>

    )
}