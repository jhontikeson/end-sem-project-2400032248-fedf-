import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import GifIntro from "./components/GifIntro";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GifIntro>
  <App />
</GifIntro>

  </React.StrictMode>,
)