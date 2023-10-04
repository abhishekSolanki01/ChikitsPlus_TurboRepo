import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Inputs } from "./helperComponents/inputs";
import { Genders, InputeTypes } from "./helperComponents/enum";
import dayjs from "dayjs";

export const Signup = (props: {
    title: String,
    onClick: (email : string,
        password : string,
        firstName : string,
        lastName : string,
        gender : string,
        dob : string,
        contactNumber : string,
        address : string,
        userName : string) => void
}) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [gender, setGender] = useState("");
    const [dob, setDob] = useState("");
    const [contactNumber, setContactNumber] = useState("");
    const [address, setAddress] = useState("");
    const [userName, setUserName] = useState("");

    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 4, mt: 0 }, m: 0, height: "auto" }}>
                <Typography align="center" variant="h4">{props.title}</Typography>
                <Box sx={{margin: "auto"}}>
                <Grid container spacing={3} sx={{ margin: 'auto' }}>
                    <Inputs label="First Name" onChange={setFirstName}/>
                    <Inputs label="Last Name" onChange={setLastName} />
                    <Inputs label="Email" onChange={setEmail}  />
                    <Inputs label="Password" onChange={setPassword} dataType={"password"} />
                    <Inputs label="Gender" onChange={setGender} type={InputeTypes.SELECT} selectList={Genders}/>
                    <Inputs label="Date of Birth" onChange={setDob} type={InputeTypes.DATE} value={dob || dayjs('2022-04-17')}  />
                    <Inputs label="Contact number" onChange={setContactNumber} dataType="number" />
                    <Inputs label="User name" onChange={setUserName}  />
                    <Inputs label="Address" onChange={setAddress}/>
                </Grid>
                </Box>

                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }} mb={0}>
                    <Typography align="center" gutterBottom>New here? <Link href="/Register">Register</Link> </Typography>
                    <Button onClick={() => {
                        props.onClick(
                            email,
                            password,
                            firstName,
                            lastName,
                            gender,
                            dob,
                            contactNumber,
                            address,
                            userName)
                    }} variant="contained" >Login</Button>
                </Box>
            </Box>
        </div >
    )
}