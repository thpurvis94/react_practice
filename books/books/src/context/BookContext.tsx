import axios from "axios"
import React, { createContext, useContext, useEffect, useState } from "react"
import { Book } from "../App"

type BookContextProviderProps = {
    children: React.ReactNode
}

export type BookContextType = {
    books: Book[],
    createBook(title: string): Promise<void>,
    fetchBooks(): Promise<void>,
    editBookById(id: number, title: string): Promise<void>,
    deleteBookById(id: number): Promise<void>
}

const defaultValues: BookContextType = {
    books: [],
    createBook: async (title: string): Promise<void> => {},
    fetchBooks: async (): Promise<void> => {},
    editBookById: async (id: number, title: string): Promise<void> => {},
    deleteBookById: async (id: number): Promise<void> => {}
}

export const BookContext = createContext<BookContextType>(defaultValues)

export const BookContextProvider = ({children}: BookContextProviderProps) =>{

    const [books, setBooks] = useState<Book[]>([])

    const fetchBooks = async (): Promise<void> => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }

    const createBook = async (title: string): Promise<void> => {
        const response = await axios.post('http://localhost:3001/books', {
            title
        })
        
        const updatedBooks: Book[] = [
            ...books,
            response.data
        ]
        setBooks(updatedBooks)
    }
    
    const editBookById = async (id: number, title: string): Promise<void> => {
        const response = await axios.put(`http://localhost:3001/books/${id}`, {"title": title})

        const updatedBooks: Book[] = books.map((x: Book) => {
            if(x.id === id){
                return response.data
            }
            return x;
        })
        setBooks(updatedBooks)
    }
    
    const deleteBookById = async (id: number): Promise<void> => {
        const updatedBooks = books.filter(x => x.id !== id)
        await axios.delete(`http://localhost:3001/books/${id}`)
        setBooks(updatedBooks)
    }

    return (
        <BookContext.Provider value={{
            books: books,
            createBook: createBook,
            fetchBooks: fetchBooks,
            editBookById: editBookById,
            deleteBookById: deleteBookById
        }}>
            {children}
        </BookContext.Provider>
    )
}