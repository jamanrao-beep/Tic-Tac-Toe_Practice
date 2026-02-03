import "./App.css";

// export default function FirstPage() {
//     async function Welcome() {
//         return (
//             <div className="entry">
//                 <h1>Welcome to Aman's gaming site</h1>
//             </div>
//         );
//     }

//     async function Name() {
//         return (
//             <div className="entry">
//                 <h2>Tic Tac Toe !</h2>
//             </div>
//         );
//     }

//     Welcome();
//     setTimeout(Name(), 2000);
// }

import { useState, useEffect } from "react";

export default function FirstPage() {
    // 1. Create a state to track which view to show
    const [view, setView] = useState("welcome");

    useEffect(() => {
        // 2. Set a timer to change the view after 2 seconds
        const timer = setTimeout(() => {
            setView("tictactoe");
        }, 5000);



    }, []);

    // 3. Conditional rendering based on the state
    return (
        <div className="entry">
            {view === "welcome" ? (
                <h1>Welcome to Aman's gaming site</h1>
            ) : (<div>
                <h1>Welcome to Aman's gaming site</h1>
                <h2>Tic Tac Toe !</h2>
            </div>
            )}
        </div>
    );
}

export function Counter() {
    const [count, setCount] = useState(1);

    return (
        <div>
            <p>Clicked {count} times</p>
            <button onClick={() => setCount(count + 1)}>
                Click me
            </button>
        </div>
    );
}

export function Check() {
    return (
        <div>
            <div className="option">Would you like to play again ?</div>
            <div className="both">
                <div className="first">Yes</div>
                <div className="second">No</div>
            </div>
        </div>
    );
}

export function App() {
    return (
        <div>
            <div className="option">Choose one of the following symbols to play</div>
            <div className="both">
                <div className="first">X</div>
                <div className="second">O</div>
            </div>
        </div>
    );
}
