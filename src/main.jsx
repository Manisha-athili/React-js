import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Todo from './todo.jsx'
import Lottery from './lottery.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    < div style={{display:"flex", flexDirection: "row"}}>
    <App />
    < Todo />
    <Lottery/>
    </div>
  // {/* </React.StrictMode>, */}
)
