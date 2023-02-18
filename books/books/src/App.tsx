import React, { ReactElement } from 'react'
import BookCreate from './components/BookCreate'
import BookList from './components/BookList'
import './App.css'

export class Book {
  id: number;
  title: string;

  constructor(id: number, title: string){
    this.id = id;
    this.title = title;
  }
}

const App: React.FC = (): ReactElement => {

  return (
    <div className='app'>
      <h1>Reading List</h1>
        <BookList />
        <BookCreate />
    </div>
  )
}
export default App