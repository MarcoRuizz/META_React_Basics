/*
    Props: data outside the components that it recieves and it cannot mutate
    State: data inside the component that it controls and CAN MUTATE
*/

export function ParentComponent(){
    const date = new Date(); // state
    return(
        <div>
            <ChildrenComponent message = {date.toLocaleTimeString()}/>
        </div>
    )
}


export function ChildrenComponent(){
    return(
        <div>

        </div>
    )
}