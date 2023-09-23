import { useState } from "react";

export default function InputComp(){
    const [inputText, setText] = useState("hello");

    function handleChange(e){
        setText(e.target.value);
    }

    return(
        <div>
            <input value={inputText} onChange={handleChange} />
            <p>You type: {inputText}</p>
            <button onClick={() => setText('hello')}>
                Reset
            </button>
        </div>
    );
}