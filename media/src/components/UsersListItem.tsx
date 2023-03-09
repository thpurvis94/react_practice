import { GoTrashcan } from "react-icons/go"
import { User } from "../App"
import Button from "./Button"
import { deleteUser } from "../store"
import { useThunk } from "../hooks/useThunk"

interface Props {
    user: User
}

const UsersListItem: React.FC<Props> = (props: Props) => {
    
    const [doRemoveUser, isLoading, error] = useThunk(deleteUser)
    
    const handleClick = () => {
        doRemoveUser(props.user.id)
    }

    return (
        <div className='mb-2 border rounded'>
            <div className="flex p-2 justify-between items-center cursor-pointer">
                <Button loading={isLoading ? 'true' : 'false'} onClick={handleClick}>
                    <GoTrashcan />
                </Button>
                {error && <div>Error deleting user</div>}
                {props.user.name}
            </div>
        </div>
    )
}
export default UsersListItem