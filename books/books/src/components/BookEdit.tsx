import { ChangeEvent, FormEvent, ReactElement, useContext, useEffect, useState } from "react";
import { Book } from "../App";
import { BookContext, BookContextType } from "../context/BookContext";

interface Props {
    book: Book,
    handleSubmit(): void
}

const BookEdit: React.FC<Props> = (props: Props): ReactElement => {

    const [title, setTitle] = useState<string>(props.book.title)
    const context = useContext(BookContext) as BookContextType

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        props.handleSubmit()
        await context.editBookById(props.book.id, title)
    }
    
    return (
        <form onSubmit={handleSubmit} className="book-edit">
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button is-primary">
                Save
            </button>
        </form>
    )
}
export default BookEdit