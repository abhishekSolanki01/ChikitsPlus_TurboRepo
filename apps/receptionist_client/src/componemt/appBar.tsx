import { useRecoilValue } from "recoil"
import { isUserLoadingState } from "stores"
import Appbar from "ui/components/AppBar"

export default function AppBar (){

    const isUserLoading = useRecoilValue(isUserLoadingState)


    return(
        <Appbar/>
    )
}