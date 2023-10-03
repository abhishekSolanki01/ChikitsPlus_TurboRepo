import { selector } from "recoil";
import { userState } from "../atoms";

export const isUserLoadingState = selector({
    key: "isUserLoadingState",
    get: ({get}) => {
        const state = get(userState);
        return state.isLoading;
    }
})