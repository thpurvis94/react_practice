import React from 'react'
import ReactDOM from 'react-dom/client'
import App, { Book } from './App'
import BookProvider from './context/BookContext'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <BookProvider>
      <App />
    </BookProvider>
  </React.StrictMode>,
)