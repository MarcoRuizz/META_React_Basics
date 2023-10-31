import react from 'react';

function App(){
    const time = new Date();
    const day  = time.toLocaleString("en-us", {weekday: "long"}); // weekday long returns the day on a full word
    const morning = time.getHours() >= 6 && time.getHours() <= 12; // stores a boolean value

    let dayMessage;

    switch(day.toLowerCase){
        case 'monday':
            dayMessage = `Happy ${day}`;
            break;
        case 'tuesday':
            dayMessage = `${day}, four days to go`;
            break;
        case 'wednesday':
            dayMessage = `${day}, half way there`;
            break;
        case 'thursday':
            dayMessage = `${day}, Start planning for the weekend!`;
            break;
        case 'friday':
            dayMessage = 'Woo - hoo, the weekend is comming!';
            break;
        default:
            dayMessage = 'Stay calm an keep having fun';
            break;
    }

    return(
        <div className='App'>
            <h1>
                {dayMessage}
            </h1>

            {morning ? <h2>Have you had breakfast yet?</h2> : <h2>Have you had lunch yet?</h2>} 
        </div>
    )

}

export default App;