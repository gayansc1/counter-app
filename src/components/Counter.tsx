import React, { useState, CSSProperties } from "react";

const Counter: React.FC = () => {
const [count, setCount] = useState<number>(0);


// css styles
const styles: Record<string, CSSProperties> = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '50px'
    },
    button: {
        padding: '10px 16px',
        margin: '5px',
        borderRadius: '5px',
        backgroundColor: '#0055B3',
        color: '#fff',
        cursor: 'pointer',
        border: 'none',
        width: '150px'
    },
    counterText: {
        color: '#00008B',
        fontFamily: 'inherit',
        fontSize: 'x-large',
        fontWeight:'bold'
    }
};

// increase button click
const increaseCount = ():void => {
    if (count < 10) {
        setCount(count + 1);
    } else {
        alert("Count can't be more than 10");
    }
};

// decrease button click
const decreaseCount = ():void => {
    if (count > 0) {
        setCount(count - 1);
    } else {
        alert("Count can't be less than 0");
    }
};

// reset button click
const reset = ():void => {
    setCount(0);
};

return (
    <div style={styles.container}>
         <p style={styles.counterText}>Count: {count}</p>
            <button style={styles.button} onClick={increaseCount}>
                Increase
            </button>
            <button style={styles.button} onClick={decreaseCount}>
                Decrease
            </button>
            <button style={styles.button} onClick={reset}>
                Reset
            </button>
    </div>
);

};

export default Counter;