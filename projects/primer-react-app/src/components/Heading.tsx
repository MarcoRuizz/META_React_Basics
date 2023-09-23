// to import this component in App.tsx: import Heading from './components/Heading';

function Heading(props : {label: string}) {
        return (
            <h1>This is a {props.label}</h1>
        )
    }
    
    export default Heading;