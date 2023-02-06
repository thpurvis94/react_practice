import React, { ChangeEvent, FormEvent, ReactElement, useContext, useState } from "react";
import { BookContext, BookContextType } from "../context/BookContext";

const BookCreate: React.FC = (): ReactElement => {

    const [title, setTitle] = useState<string>('')
    const context = useContext(BookContext) as BookContextType

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value)
    }

    const handleSubmit = (event: FormEvent<HTMLFormElement>): void =>{
        event.preventDefault()
        context.createBook(title)
        setTitle('')
    }

    return (
        <div className="book-create">
            <h3>Add a Book</h3>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type={'text'} className={'input'} value={title} onChange={handleChange} />
                <button className={'button'}>Create</button>
            </form>
        </div>
    )
}
export default BookCreate