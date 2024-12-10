import { BrowserRouter } from "react-router-dom";
import { useAuth } from "../context"
import { IsUser } from "./isUser.routes";
import { NotUser } from "./notUser.routes";

export const RoutesApp = () => {

    const { user } = useAuth();
    console.log(user); 
    console.log('user'); 

    return (
        <BrowserRouter>
            {user ? <IsUser /> : <NotUser />}
        </BrowserRouter>
    )
}