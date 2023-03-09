import CarForm from "./components/CarForm"
import CarList from "./components/CarList"
import CarSearch from "./components/CarSearch"
import CarValue from "./components/CarValue"

export interface Car {
  id: string
  name: string
  cost: number
}

const App: React.FC = () => {

  return (
    <div className="container is-fluid">
      <CarForm />
      <CarSearch />
      <CarList />
      <CarValue />
    </div>
  )
}

export default App
