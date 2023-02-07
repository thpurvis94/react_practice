import axios from "axios"
import { createContext, FC, ReactNode, useState } from "react"
import { Book } from "../App"

export type BookContextState = {
    books: Book[]
    createBook: (title: string) => Promise<void>
    readBooks: () => Promise<void>
    editBook: (book: Book) => Promise<void>
    deleteBook: (book: Book) => Promise<void>
}

const defaultValues: BookContextState = {
    books: [],
    createBook: async (title: string) => {},
    readBooks: async () => {},
    editBook: async (book: Book) => {},
    deleteBook: async (book: Book) => {}
}

export const BookContext = createContext<BookContextState>(defaultValues)

type Props = {
    children?: ReactNode
}

const BookProvider: FC<Props> = ({children}) => {
    const [books, setBooks] = useState<Book[]>(defaultValues.books)

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

    const readBooks = async (): Promise<void> => {
        const response = await axios.get('http://localhost:3001/books')
        setBooks(response.data)
    }
    
    const editBook = async (book: Book): Promise<void> => {
        const response = await axios.put(`http://localhost:3001/books/${book.id}`, {"title": book.title})

        const updatedBooks: Book[] = books.map((x: Book) => {
            if(x.id === book.id){
                return response.data
            }
            return x;
        })
        setBooks(updatedBooks)
    }
    
    const deleteBook = async (book: Book): Promise<void> => {
        const updatedBooks = books.filter(x => x.id !== book.id)
        await axios.delete(`http://localhost:3001/books/${book.id}`)
        setBooks(updatedBooks)
    }

    return (
        <BookContext.Provider value={{
            books,
            createBook,
            readBooks,
            editBook,
            deleteBook
        }}>
            {children}
        </BookContext.Provider>
    )
}
export default BookProvider