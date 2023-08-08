import data from "./../data.json";
import { useState } from "react";

function MyProjects() {
    const [index, setIndex] = useState(0);

    let pushes = data.pushes;
    let push = pushes[index];

    function handleClick() {
        if (index < data.pushes.length -1){
            setIndex(index+1);
        } else {
            setIndex(0)
        }
    }

    return (
        <div>
            <button onClick={handleClick}>
                Next
            </button>
            <h2>{push.trail} at {push.trailHead}</h2>
                <p>The {push.trail} is {push.trailLengthOneWay} long</p>
                <img src={push.photoUrl} />
        </div>
    )

}

export default MyProjects;




