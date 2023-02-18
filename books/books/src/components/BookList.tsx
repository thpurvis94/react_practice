import React, { ReactElement } from "react"
import BookShow from "./BookShow"
import { Book } from "../App"
import useBookContext from "../hooks/useBookContext"

const BookList: React.FC = (): ReactElement => {

    const context = useBookContext()

    const renderedBooks = (): JSX.Element[] => {
        return context.books.map((x: Book) => {
            return <BookShow key={x.id} book={x}/>
        })
    }

    return (
        <div className="book-list">{renderedBooks()}</div>
    )
}
export default BookList