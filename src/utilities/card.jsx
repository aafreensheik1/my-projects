import React from 'react';
import { Link } from 'react-router-dom';
import './card.css';
import '../components/main-page.css';
const Card = ({ keyName, value }) => {

    return (
        <div className='card-component'>
            <Link className='card-link' to={'/' + keyName} >{value}</Link>
        </div>
    );
}

export default Card;
