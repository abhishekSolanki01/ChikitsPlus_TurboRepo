import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"

export const Inputs = (props : {
    grid?: number,
    width?: number, 
    label: string, 
    variant?: string, 
    onChange: (e: any) => void, 
    style?: Object
}) => {

    const { width, label, variant, onChange, style, grid } = props;

    return (
        <Grid item xs={grid || 6}>
            <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'center', mt: 0 }}>
                <TextField required sx={{ width: width || 300, ...style }} id="input-with-sx" label={label} variant="standard" onChange={e => onChange(e.target.value)} />
            </Box>
        </Grid>

    )
}