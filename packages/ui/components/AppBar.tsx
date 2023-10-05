import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { useRecoilValue } from "recoil"
import { isUserLoadingState, userEmailState } from "stores"
import MedicationIcon from '@mui/icons-material/Medication';


export default function Appbar(props: { 
    onLoginClick: () => void ,
    onLogoutClick: () => void,
    onRegisterClick: () => void
}) {
    const {onLoginClick, onLogoutClick, onRegisterClick} = props;

    const isUserLoading = useRecoilValue(isUserLoadingState)
    const userEmail = useRecoilValue(userEmailState)


    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <MedicationIcon />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        ChikitsaPlus
                    </Typography>
                    {
                        isUserLoading ?<>
                        <Button color="inherit" onClick={onLoginClick}>Login</Button>
                        <Button color="inherit" onClick={onRegisterClick}>Register</Button>
                        </>
                        :  
                        <>
                        <Button color="inherit">{userEmail}</Button>
                        <Button color="inherit" onClick={onLogoutClick}>Logout</Button>
                        </>
                        
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}