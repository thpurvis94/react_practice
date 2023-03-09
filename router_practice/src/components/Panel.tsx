import classNames from "classnames"
import { ReactNode } from "react"

interface Props {
    children: ReactNode,
    className: string,
    [props: string]: any
}

const Panel: React.FC<Props> = (props: Props) => {

    const {children, className, ...rest} = props
    const finalClassNames = classNames('border rounded p-3 shadow bg-white w-full', props.className)

    return (
        <div className={finalClassNames} {...rest}>
            {props.children}
        </div>
    )
}

export default Panel