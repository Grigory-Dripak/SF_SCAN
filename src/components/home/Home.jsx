import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const [count, setCount] = useState(0);
    const navigate = useNavigate();

  return (
    <>
        <h1>Vite + React</h1>
        <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
                count is {count}
            </button>
            <p>
                Edit <code>src/App.jsx</code> and save to test HMR
            </p>
        </div>
        <p className="read-the-docs">
        Click on the Vite and React logos to learn more
        </p>
        { count === 5 && navigate('/login')}
    </>
      )
}
