import { Box, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { useState } from "react";
import { Inputs } from "./helperComponents/inputs";

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
    const [isDummy, setIsDummy] = useState(false);

    return (
        <div>
            <Box sx={{ '& > :not(style)': { m: 4, mt: 0 }, m: 0, height: "auto" }}>
                <Typography align="center" variant="h4">{props.title}</Typography>
                <Box sx={{margin: "auto"}}>
                <Grid container spacing={1} sx={{ width: 700, margin: 'auto' }}>
                    <Inputs label="First Name" onChange={setFirstName} isDummy={firstName} />
                    <Inputs label="Last Name" onChange={setLastName} isDummy={lastName} />
                    <Inputs label="Email" onChange={setEmail} isDummy={email} />
                    <Inputs label="Password" onChange={setPassword} type={"password"} isDummy={password} />
                    <Inputs label="Gender" onChange={setGender} isDummy={gender} />
                    <Inputs label="Date of Birth" onChange={setDob} isDummy={dob} />
                    <Inputs label="Contact number" onChange={setContactNumber} type="number" isDummy={contactNumber} />
                    <Inputs label="User name" onChange={setUserName} isDummy={userName} />
                    <Inputs label="Address" onChange={setAddress} width={650} grid={12}isDummy={address} />
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

                    <Button onClick={() => {
                        setFirstName("Abhishek")
                        setLastName("")
                        setEmail("abi@gmail.com")
                        setPassword("12345")
                        setGender("Male")
                        setDob("10/09/1819")
                        // setContactNumber(12345)
                        // setUserName("zooKeeper")
                        setAddress("zoo")
                        setIsDummy(true)
                    }}>Set dummy data</Button>
                </Box>
            </Box>
        </div >
    )
}