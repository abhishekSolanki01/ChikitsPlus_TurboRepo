import axios from "axios";
import { useSetRecoilState } from "recoil";
import { userState } from "stores";
import { Login } from "ui";

export default function LoginPage() {
    const setUser = useSetRecoilState(userState)
    const loginUser = async (email: any, password: any) => {
        try {
            const loginRes = await axios.post('/api/login', { email, password })
            if (loginRes.data.error) {

            } else {
                localStorage.setItem('token', loginRes.data.data.token)
                setUser({
                    isLoading: false,
                    userEmail: loginRes.data.data.email
                })
            }
        } catch (error) {

        }
    }
    return (
        <Login title={"Login to Chikitsa plus"} onClick={loginUser} />
    )
}