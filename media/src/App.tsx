import UsersList from "./components/UsersList"

export type User = {
  id: number
  name: string
}

export type Album = {
  id: number
  title: string
  userId: number
}

export type Photo = {
  id: number
  url: string
  albumId: number
}

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <UsersList />
    </div>
  )
}

export default App
