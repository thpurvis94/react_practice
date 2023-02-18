import { ReactElement, useState } from "react";
import BookEdit from "./BookEdit"
import { Book } from "../App"
import useBookContext from "../hooks/useBookContext";

interface Props {
    book: Book
}

const BookShow: React.FC<Props> = (props: Props): ReactElement => {

    const [editMode, setEditMode] = useState<boolean>(false)
    const context = useBookContext()

    const handleClick = async (): Promise<void> => {
        await context.deleteBook(props.book)
    }

    const handleSubmit = (): void => {
        setEditMode(false)
    }

    const toggleEdit = (): void => {
        setEditMode(!editMode)
    }

    const content = (): JSX.Element => {
        if (editMode){
            return <BookEdit handleSubmit={handleSubmit} book={props.book}/>
        }
        return <h3>{props.book.title}</h3>
    }

    return (
        <div className="book-show">
            <div>{}</div>
            <img src={`https://picsum.photos/seed/${props.book.id}/300/200`} alt="books"/>
            {content()}
                <div className="actions">
                <button className="delete" onClick={handleClick}>
                    Delete
                </button>
                <button className="edit" onClick={toggleEdit}>
                    Edit
                </button>
            </div>
        </div>
    )
}
export default BookShow