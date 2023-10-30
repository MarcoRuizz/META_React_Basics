import React from "react";
import Weekends from "./Weekends";
import Workdays from "./Workdays";

function CurrentMessage(){
    const day = new Date().getDay();
    const summer = true;

    return(
         day >= 1 && day <=5 
        ? <Workdays /> // true condition
        : <Weekends /> // false 
        
    )
}

export default CurrentMessage;