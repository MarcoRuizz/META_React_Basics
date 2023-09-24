//  proccess when the user manipulates the page, such as click or keyboard events

ondrag
ondrop
onfocus
onclick
onchange

// Event Errors

(5).toUpperCase() -> Uncaught TypeError: 5.toUpperCase is not a function

// example

function Btn() {
    const clickHandler = () => console.log('Clicked')

  return (
    <button onClick={clickHandler}>Click Me</button>
  );
}

// with arrow function

<button onClick={() => console.log('second example')}>
    An inline anonymous ES6 function event handler
</button>

// with separate function declarations

function App() {
      function thirdExample() {
          console.log('third example');
      };

      return (
          <div className="thirdExample">
              <button onClick={thirdExample}>
                  using a separate function declaration
              </button>
          </div>
      );
  };

  export default App;

  // function expresionss

  function App() {
        const fourthExample = () => console.log('fourth example');
    
        return (
            <div className="fourthExample">
                <button onClick={fourthExample}>
                    using a separate function expression
                </button>
            </div>
      );
    };
    export default App;