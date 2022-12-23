import React, { useState } from 'react'
import SingleColor from './SingleColor'

import Values from 'values.js'

function App() {
    const [color, setColor] = useState("");
    const [error, setError] = useState(false);
    const [list, setList] = useState(new Values ('#f83423').all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try{
            let colors  = new Values(color).all(10);
            setList(colors)
            console.log(colors)
        }catch (error){
            setError(true)
            console.log(error)
        }
        
    }

    return (
        <>
        <section className="container">
            <h3>Color Generator</h3>
            <form action="" onSubmit={handleSubmit}>
                <input 
                type="text" 
                value={color} 
                onChange ={(e) => setColor(e.target.value)} 
                placeholder = '#f150525' 
                className={`${error ? 'error': null}`}
                />
                <button className="btn" type = "submit">Submit</button>
            </form>
        </section>
        <section className="colors">
            {list.map((color, index) => {
                return (
                    <SingleColor key = {index} {...color} index = {index} hexColor={color.hex}/>
                )
            })}
        </section>
        </>
    );
}

export default App