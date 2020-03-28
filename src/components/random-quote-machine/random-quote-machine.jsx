import React, { useEffect } from 'react';
import './random-quote-machine.css';
import axios from 'axios';
import { useState } from 'react';
const RandomQuoteMachine = () => {
    const randomQuoteSource = 'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
    const [quotes, setQuotes] = useState([]);
    const [quote, setQuote] = useState('');
    const [author, setAuthor] = useState('');



    useEffect(async () => {
        const { data: { quotes } } = await axios.get(randomQuoteSource);
        setQuotes(quotes);
    }, [])


    const handleClick = () => {
        const index = Math.floor(Math.random() * quotes.length + 1);
        setQuote(quotes[index].quote);
        setAuthor(quotes[index].author);
    }
    return (
        <div className="quote-machine-container" >
            <div className="quote-text">{quote}
            </div>
            <div className="quote-author">-{author}</div>
            <button className="quote-button" onClick={handleClick}>Generate</button>
        </div>);
}

export { RandomQuoteMachine };