import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div className="component-container">
            <h2>Counter Component</h2>
            <div>
                <button onClick={() => setCount(count - 1)} style={{ backgroundColor: '#ff6b6b', color: '#fff' }}>Decrement</button>
                <span style={{ margin: '0 20px', fontSize: '1.5rem', fontWeight: 'bold' }}>{count}</span>
                <button onClick={() => setCount(count + 1)} style={{ backgroundColor: '#4CAF50', color: '#fff' }}>Increment</button>
            </div>
        </div>
    );
}

export default Counter;
