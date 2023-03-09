import { ReactElement, ReactNode } from "react"
import className from "classnames"

interface Props {
    children: ReactNode
    primary?: boolean
    secondary?: boolean
    success?: boolean
    warning?: boolean
    danger?: boolean
    rounded?: boolean
    outline?: boolean
    [props: string]: any
}

const Button: React.FC<Props> = (props: Props): ReactElement => {

    const {children, primary, secondary, success, warning, danger, rounded, outline, ...rest} = props

    const finalClassName = className({
        'bg-blue-400 border-blue-500 text-white': primary,
        'bg-gray-300 border-gray-400 text-black': secondary,
        'bg-green-300 border-green-500 text-white': success,
        'bg-yellow-200 border-yellow-500 text-black': warning,
        'bg-red-300 border-red-500 text-black': danger,
        'rounded-xl': rounded,
        'bg-white': outline,
        'text-blue-400': outline && primary,
        'text-gray-500': outline && secondary,
        'text-green-500': outline && success,
        'text-yellow-600': outline && warning,
        'text-red-500': outline && danger
    }, 'px-3', 'py-1.5', 'border', 'm-1', 'flex', 'items-center')

    return (
        <button className={finalClassName} {...rest}>{children}</button>
    )
}

Button.defaultProps = {
    primary: false,
    secondary: false,
    success: false,
    warning: false,
    danger: false,
    rounded: false,
    outline: false
}

export default Button