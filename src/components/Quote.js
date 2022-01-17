import React from 'react'

const Quote = ({quote}) => {
  return (
    <p>
        {quote.text}<br/>
        <span>- {quote.author}</span>
      </p>
  );
};

export default Quote;
