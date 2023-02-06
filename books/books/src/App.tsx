import React, { ReactElement, useContext, useEffect } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import './App.css'
import { BookContext, BookContextType } from './context/BookContext';

export class Book {
  id: number;
  title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}

const App: React.FC = (): ReactElement => {

  const context = useContext(BookContext) as BookContextType

  useEffect(() => {
    context.fetchBooks()
  }, [])

  return (
    <div className='app'>
      <h1>Reading List</h1>
      <BookContext.Provider value={{
        books: context.books,
        createBook: context.createBook,
        fetchBooks: context.fetchBooks,
        editBookById: context.editBookById,
        deleteBookById: context.deleteBookById
      }}>
        <BookList />
        <BookCreate />
      </BookContext.Provider>
    </div>
  )
}
export default App