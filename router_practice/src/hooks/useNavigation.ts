import { NavigationContext } from "../contexts/NavigationContext"
import { useContext } from "react"

const useNavigation = () => {
    return useContext(NavigationContext)
}

export default useNavigation