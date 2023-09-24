let name1 = 'Bob';
if (name1 == 'Bob') {
    console.log('Hello, Bob');
} else {
    console.log('Hello, Friend');
};


// ternary

let name2 = 'Bob';
name2 == 'Bob' ? console.log('Hello, Bob') : console.log('Hello, Friend');


// using ternary in JSX

function Example() {
    return (
        <div className="heading">
            <h1>{Math.random() >= 0.5 ? "Over 0.5" : "Under 0.5"}</h1>
        </div>
    );
};

// Using function calls in JSX

function Example3() {

    const getRandomNum = () => Math.floor(Math.random() * 10) + 1

    return (
        <div className="heading">
            <h1>Here's a random number from 0 to 10: { getRandomNum() }</h1>
        </div>
    );
};