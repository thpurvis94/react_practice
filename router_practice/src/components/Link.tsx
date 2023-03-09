import { ReactNode } from "react"
import classNames from "classnames"
import useNavigation from "../hooks/useNavigation"

type Props = {
    to: string,
    children: ReactNode,
    className: string,
    activeClassName: string
}

const Link: React.FC<Props> = (props: Props) => {

    const context = useNavigation()

    const classes = classNames(
        'text-blue-500', 
        props.className,
        context.currentPath === props.to && props.activeClassName)

    const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        if (event.metaKey || event.ctrlKey){
            return
        }
        
        event.preventDefault()
        context.navigate(props.to)
    }

    return (
        <a className={classes} href={props.to} onClick={handleClick}>
            {props.children}
        </a>
    )
}
export default Link