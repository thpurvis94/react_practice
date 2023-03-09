import { useEffect } from "react"
import { useSelector } from 'react-redux'
import { User } from "../App"
import { useThunk } from "../hooks/useThunk"
import { fetchUsers, RootState, addUser } from "../store"
import Button from "./Button"
import Skeleton from "./Skeleton"
import UsersListItem from "./UsersListItem"

const UsersList: React.FC = () => {
    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers)
    const [doCreateUser, isCreatingUser, creatingUserError] = useThunk(addUser)

    const { data } = useSelector((state: typeof RootState) => {
        return state.users
    })

    useEffect(() => {
        doFetchUsers()
    }, [doFetchUsers])

    let content;

    if (isLoadingUsers){
        content = <Skeleton times={6} className='h-10 w-full' />
    } else if (loadingUsersError){
        content = <div>Error fetching data</div>
    } else {
        content = data.map((user: User) => {
            return <UsersListItem key={user.id} user={user} />
        })
    }

    return (
        <div>
            <div className="flex flex-row justify-between items-center m-3">
                <h1 className="m-2 text-xl">Users</h1>
                {
                    <Button loading={isCreatingUser ? 'true' : 'false'} onClick={() => doCreateUser()}>
                        + Add User
                    </Button>
                }
                {creatingUserError?.message}
            </div>
            {content}
        </div>
    )
}
export default UsersList