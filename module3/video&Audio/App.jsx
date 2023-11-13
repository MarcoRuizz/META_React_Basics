/* 
    There are 3 principal ways to add a video to your App
        1.- Embedding the video directly in the HTML with VIDEO tag
        2.- Passing it as a prop
        3.- NPM package
*/

// npm install react-player 

import App from "../assetsLab/App"
import ReactPlayer from "react-player/youtube"

function App(){
    return (
        <div>
            <MyVideo />
        </div>
    )
}

const MyVideo = () => {
    return  (
        <ReactPlayer url="insertUrl" playing={false} volume={0.5}/>
    )
}

export default App;