import { Router, useRouter } from "next/router"
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil"
import { isUserLoadingState, userEmailState, userState } from "stores"
import Appbar from "ui/components/AppBar"

export default function AppBar() {
    const router = useRouter()
    const setUser = useSetRecoilState(userState)
    const userEmail = useRecoilValue(userEmailState)
    return (
        <Appbar
            onLoginClick={() => { router.push("/login")}}
            onLogoutClick={() => { localStorage.setItem('token', ""), setUser({isLoading: true, userEmail: null }) }}
            onRegisterClick={() => { router.push("/") }}
        />
    )
}