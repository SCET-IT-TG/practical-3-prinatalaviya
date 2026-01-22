import React, { useState } from 'react';

function TweetInput() {
    const [tweet, setTweet] = useState('');

    const handleChange = (e) => {
        setTweet(e.target.value);
    };

    const isValid = tweet.length > 0 && tweet.length <= 50;

    return (
        <div className="component-container">
            <h2>Tweet Input Component</h2>
            <textarea
                rows="4"
                cols="30"
                value={tweet}
                onChange={handleChange}
                placeholder="What's happening?"
                style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    fontSize: '1rem',
                }}
            />
            <div style={{
                color: tweet.length > 50 ? 'red' : 'black',
                marginTop: '8px',
                fontWeight: tweet.length > 50 ? 'bold' : 'normal'
            }}>
                {tweet.length}/50
            </div>
            <button
                disabled={!isValid}
                style={{
                    backgroundColor: isValid ? '#0077cc' : '#ccc',
                    color: '#fff',
                    marginTop: '10px',
                    width: '100%'
                }}
            >
                Tweet
            </button>
        </div>
    );
}

export default TweetInput;
