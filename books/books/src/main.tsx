import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Book } from './App'
import { BookContext } from './context/BookContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BookContext.Provider value={[]}>
      <App />
    </BookContext.Provider>
  </React.StrictMode>,
)