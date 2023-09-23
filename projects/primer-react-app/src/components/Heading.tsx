// to import this component in App.tsx: import Heading from './components/Heading';


// heading is action as child component from App.tsx because is receiving a prop
function Heading(props : {label: string}) {
        return (
            <h1>This is a {props.label} label</h1>
        )
    }
    
    export default Heading;