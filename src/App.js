import React, { useState, useEffect } from 'react';
import Quote from './components/Quote';

const initialQuote = {
  text: 'Quote',
  author: 'Author :)'
}

function App() {
  // ESTADO
  const [quote, setQuote] = useState(initialQuote);

  // LOADING
  const [loading] = useState(true);

  const updateQuote = async () => {
    
    const url = "https://www.breakingbadapi.com/api/quote/random";
    const res = await fetch(url);
    const [newQuote] = await res.json();
    const {quote: text, author} = newQuote;

    setQuote({
      text,
      author,
    })
  
  }

  useEffect(() => {

  updateQuote();
    

  }, []);
  
    return (
      <div className='app'>
      <img src='https://upload.wikimedia.org/wikipedia/commons/7/77/Breaking_Bad_logo.svg' alt='logo' />
      <button onClick={()=>updateQuote()}>Get Another</button>

      {/* OPERADOR TERNARIO LOADING */}

      { loading ? <h1></h1>: <Quote quote={quote} />}

      <Quote quote={quote}/>
  

      

      </div>
    );
  }


export default App;
