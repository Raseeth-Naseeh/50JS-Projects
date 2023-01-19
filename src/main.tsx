import React from 'react'
import ReactDOM from 'react-dom/client'
import * as App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App.Main />
  </React.StrictMode>,
)
