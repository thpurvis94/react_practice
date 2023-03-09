import { ReactNode } from 'react'
import useNavigation from '../hooks/useNavigation'

type Props = {
    path: string,
    children: ReactNode
}

const Route: React.FC<Props> = (props: Props) => {

    const context = useNavigation()

    const result = props.path === context.currentPath ? props.children : null

    return (
        <div>{result}</div>
    )
}
export default Route