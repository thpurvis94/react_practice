import React, { ReactElement, useContext } from "react"
import BookShow from "./BookShow"
import { Book } from "../App"
import {BookContext} from "../context/BookContext"

const BookList: React.FC = (): ReactElement => {

    const {books} = useContext(BookContext)

    const renderedBooks = (): JSX.Element[] => {
        return books.map((x: Book) => {
            return <BookShow key={x.id}
                book={x}/>
        })
    }

    return (
        <div className="book-list">{renderedBooks()}</div>
    )
}
export default BookList