import React, { useState } from 'react';
import './Product.css'; 

function GMilk() {

    const options = [
        {label: "1g Sample", value: 2.50},
        {label: "10g", value: 12.75},
        {label: "30g", value: 20},
        {label: "150g", value: 129},
    ]

    const [value, setValue] = useState(options[0].value.toString());

    function handleSelect(event) {
        setValue(event.target.value);
    }

    return (
        <div className='Main' id='Shop'>
            <img src='./Assets/img1.jpg' alt='Golden Milk Packets' className='GM'/>
            <div className='Second'>
                <h2>Golden Milk Mix Powder</h2>
                <h4>$ {value}</h4>
                <select value={value} onChange={handleSelect} className='POption'>
                    {options.map(option =>(
                        <option key={option.value} value={option.value.toString()}>{option.label}</option>
                    ))}
                </select>
                <button className='BButton'>Buy Now</button>
                <p>Golden milk is a Powerful Mix of Natural Indegredients which includes Tumeric, Ginger, Pepper, Cardamon, etc. It is good for Sore Throat, Skin.</p>
            </div>
        </div>
    );
}

export default GMilk;