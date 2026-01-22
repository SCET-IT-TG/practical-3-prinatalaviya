import React, { useState, useEffect } from 'react';

function ThemeSwitcher() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    };

    useEffect(() => {
        document.body.style.backgroundColor = isDarkMode ? '#222' : '#f5f5f5';
        document.body.style.color = isDarkMode ? '#fff' : '#000';
    }, [isDarkMode]);

    return (
        <div className="component-container" style={{
            backgroundColor: isDarkMode ? '#333' : '#fff',
            color: isDarkMode ? '#fff' : '#000',
        }}>
            <h2>Theme Switcher Component</h2>
            <p>Toggle between Light and Dark modes for the entire page.</p>
            <button
                onClick={toggleTheme}
                style={{
                    backgroundColor: isDarkMode ? '#f1c40f' : '#333',
                    color: isDarkMode ? '#000' : '#fff',
                    width: '60%',
                }}
            >
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    );
}

export default ThemeSwitcher;
