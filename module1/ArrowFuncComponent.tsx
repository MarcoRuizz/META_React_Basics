
// nameless function
const Nav = function(props) {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// arrow function

// One of the main benefits of using arrow functions is its shorter syntax.

const Nav = (props) => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

const example = () => {}

// Another important rule is that using the parentheses is optional if there's a single parameter that a function accepts.

const Nav = props => {
    return (
        <ul>
            <li>{props.first}</li>
        </ul>
    )
}

// on arrow functions, you have an implicit return

const Nav = () => <ul><li>Home</li></ul>

