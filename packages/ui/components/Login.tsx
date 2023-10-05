import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Inputs } from "./helperComponents/inputs";
import { Genders, InputeTypes } from "./helperComponents/enum";
import dayjs from "dayjs";

export const Login = (props: {
    title: String,
    onClick: (email: string,
        password: string) => void
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 4, mt: 0 }, m: 0, height: "auto" }}>
                <Typography align="center" variant="h4">{props.title}</Typography>
                <Box sx={{ margin: "auto" }}>
                    <Inputs label="Email" onChange={setEmail} />
                    <Inputs label="Password" onChange={setPassword} dataType={"password"} />
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} mb={0}>
                    <Typography align="center" gutterBottom>New here? <Link href="/Register">Register</Link> </Typography>
                    <Button onClick={() => {
                        props.onClick(
                            email,
                            password)
                    }} variant="contained" >Login</Button>
                </Box>
            </Box>
        </div >
    )
}