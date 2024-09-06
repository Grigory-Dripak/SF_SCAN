import { UseSelector, useSelector } from "react-redux";

export function userAuth() {
    const {login, token, expire, ava} = useSelector(state => state.user);

    return{
        isAuth: !!login,
        token,
        expire,
        ava,
    }
}