import { useState, useEffect, useRef } from "react"
import Panel from "./Panel"
import { GoChevronDown, GoChevronLeft } from "react-icons/go"

export type LookupTable = {
    code: string,
    name: string
}

interface Props {
    values: LookupTable[],
    value: LookupTable | null,
    onChange(x: LookupTable): void
}

const Dropdown: React.FC<Props> = (props: Props) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const divEl = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handler = (event: Event) => {
            if(!divEl.current?.contains(event.target as Node)){
                setIsOpen(false)
            }
        }
        document.addEventListener('click', handler, true)

        return () => {
            document.removeEventListener('click', handler)
        }
    }, [])

    const handleItemSelect = (item: LookupTable): void => {
        props.onChange(item)
        setIsOpen(false)
    }

    const toggleOpen = (): void => {
        setIsOpen(!isOpen)
    }

    const renderedOptions = (): JSX.Element[] => {
        return props.values.map(x => {
            return (
                <div className="hover:bg-sky-100 rounded cursor-pointer p-1"
                    onClick={() => handleItemSelect(x)} 
                    key={x.code}>
                    {x.name}
                </div>
            )
        });
    }

    const arrow = isOpen ? <GoChevronLeft className="lg" /> : <GoChevronDown className="lg" />

    return (
        <div ref={divEl} className="w-48 relative">
            <Panel className="flex justify-between items-center cursor-pointer" 
                onClick={toggleOpen}>
                    {props.value?.name || 'Select...'}
                    {arrow}
            </Panel>
            {!isOpen || 
            <Panel className="absolute top-full">
                {renderedOptions()}
            </Panel>}
        </div>
    )
}

export default Dropdown