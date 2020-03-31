import React, { useState } from 'react';
import './calculator.css';
const Calculator = () => {
    const cInput = ['C', 'CE', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', 0, '00', '.', '='];
    const [userInput, setUserInput] = useState('');
    const handleClick = (event) => {
        switch (event.target.value) {
            case 'C':
                setUserInput('');
                break;
            case 'CE':
                setUserInput(userInput.substring(0, userInput.length - 1));
                break;
            case '=':
                try {
                    setUserInput(eval((userInput).replace('x', '*')).toString());
                }
                catch (err) {
                    alert(err.message);
                }

                break;
            default:
                setUserInput(userInput + event.target.value);
                break;
        }

    }
    return (
        <div className='calculator-container'>

            <div className='screen'>{userInput}</div>
            <div className='button-container'>
                {cInput.map(value => <button className='button'
                    onClick={(event) => handleClick(event)} value={value}>{value}</button>)}
            </div>
        </div>
    );
}

export { Calculator };