import React, { ReactElement, useContext } from "react"
import BookShow from "./BookShow"
import { Book } from "../App"
import {BookContextType, BookContext} from "../context/BookContext"

const BookList: React.FC = (): ReactElement => {

    const context = useContext(BookContext) as BookContextType

    const renderedBooks = (): JSX.Element[] => {
        return context.books.map((x: Book) => {
            return <BookShow key={x.id}
                book={x}/>
        })
    }

    return (
        <div className="book-list">{renderedBooks()}</div>
    )
}
export default BookList