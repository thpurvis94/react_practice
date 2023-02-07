import React, { ReactElement, useContext, useEffect, useState } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import './App.css'
import BookProvider, {BookContext} from "./context/BookContext"

export class Book {
  id: number;
  title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}

const App: React.FC = (): ReactElement => {
  const [books, setBooks] = useState<Book[]>([])
  const { readBooks } = useContext(BookContext)

  useEffect(() => {
    readBooks()
  }, [])

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookProvider>
        <BookList />
        <BookCreate />
      </BookProvider>
    </div>
  )
}
export default App