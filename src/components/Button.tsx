import { useState } from "react";

interface ButtonProps{
    color: string;
    children: string;
}

export function Button(props: ButtonProps) {
    const [counter, setCounter] = useState(1)

    function increment() {
        
    }
    return(
        <>
        <button type="button" style={{backgroundColor: props.color}} >
            {props.children} 
        </button>
        <p>
        contador:<strong>{counter}</strong>
        </p>
        </>
    )
}