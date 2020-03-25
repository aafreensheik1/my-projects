import React from 'react';
import './calculator.css';
const Calculator = () => {
    const cInput = ['C', '.', '%', '/', 7, 8, 9, 'x', 4, 5, 6, '-', 1, 2, 3, '+', '', 0, '00', '='];
    return (
        <div className='calculator-container'>

            <input className='screen' />
            <div className='button-container'>
                {cInput.map(value => <button className='button'>{value}</button>)}
            </div>
        </div>
    );
}

export { Calculator };