import { ChangeEvent, FormEvent, ReactElement, useState } from "react";
import { Book } from "../App";
import useBookContext from "../hooks/useBookContext";

interface Props {
    book: Book,
    handleSubmit(): void
}

const BookEdit: React.FC<Props> = (props: Props): ReactElement => {

    const [title, setTitle] = useState<string>(props.book.title)
    const context = useBookContext()

    const handleChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setTitle(event.target.value)
    }

    const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
        event.preventDefault()
        props.handleSubmit()
        props.book.title = title
        await context.editBook(props.book)
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