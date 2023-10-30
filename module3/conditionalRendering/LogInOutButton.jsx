import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

function LogInOut(props){
    const isLogged = props.isLogged;

    if(isLogged){
        return <LogoutButton />
    } else{
        return <LoginButton />
    }
}

export default LogInOut;