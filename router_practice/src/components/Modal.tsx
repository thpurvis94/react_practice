import { ReactNode, useEffect } from "react"
import ReactDOM from "react-dom"

interface Props {
    onClose(): void,
    children: ReactNode,
    actionBar: ReactNode
}

const Modal: React.FC<Props> = (props: Props) => {

    useEffect(() => {
        document.body.classList.add('overflow-hidden')

        return (() => {
            document.body.classList.remove('overflow-hidden')
        })
    }, [])

    return ReactDOM.createPortal(
        <div>
            <div onClick={props.onClose} className="fixed inset-0 bg-gray-300 opacity-80"/>
            <div className="fixed inset-40 p-10 bg-white">
                <div className="flex flex-col justify-between h-full">
                    {props.children}
                    <div className="flex justify-end">
                        {props.actionBar}
                    </div>
                </div>
            </div>
        </div>,
        document.querySelector('.modal-container')!
    )
}
export default Modal