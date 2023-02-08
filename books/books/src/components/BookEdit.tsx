import { ChangeEvent, FormEvent, ReactElement, useContext, useState } from "react";
import { Book } from "../App";
import { BookContext} from "../context/BookContext";

interface Props {
    book: Book,
    handleSubmit(): void
}

const BookEdit: React.FC<Props> = (props: Props): ReactElement => {

    const [title, setTitle] = useState<string>(props.book.title)
    const {editBook} = useContext(BookContext)

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        props.handleSubmit()
        props.book.title = title
        await editBook(props.book)
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