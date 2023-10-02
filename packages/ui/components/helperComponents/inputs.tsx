import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"

export const Inputs = (props : {
    grid?: number,
    width?: number, 
    label: string, 
    variant?: string, 
    onChange: (e: any) => void, 
    style?: Object,
    type?: string,

    isDummy?: string 

}) => {

    const { width, label, variant, onChange, style, grid, type } = props;

    return (
        <Grid item xs={grid || 6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mt: 0 }}>
                {props.isDummy && <TextField required sx={{ width: width || 300, ...style }} id="input-with-sx" label={label} variant="standard" type={type} onChange={e => onChange(e.target.value)} defaultValue={props.isDummy}/>}
                {!props.isDummy && <TextField required sx={{ width: width || 300, ...style }} id="input-with-sx" label={label} variant="standard" type={type} onChange={e => onChange(e.target.value)} />}
            </Box>
        </Grid>

    )
}