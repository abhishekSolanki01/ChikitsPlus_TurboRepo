import { AppBar, Box, Button, IconButton, Toolbar, Typography } from "@mui/material"
import { useRecoilValue } from "recoil"
import { isUserLoadingState, userEmailState } from "stores"
import MedicationIcon from '@mui/icons-material/Medication';


export default function Appbar() {

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
                        <Button color="inherit">Login</Button>
                        <Button color="inherit">Register</Button>
                        </>
                        :  
                        <Button color="inherit">{userEmail}</Button>
                    }
                </Toolbar>
            </AppBar>
        </Box>
    )
}