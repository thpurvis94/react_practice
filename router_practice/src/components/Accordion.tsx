import {  useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

type Item = {
    id: number,
    label: string,
    content: string
}

interface Props {
    items: Item[]
}

const Accordion: React.FC<Props> = (props: Props) => {
    const [expandedIndex, setExpandedIndex] = useState(-1)

    const handleClick = (target: number) => {
        if(target === expandedIndex){
            target = -1
        }
        setExpandedIndex(target)
    }

    const renderedItems = (): JSX.Element[] => {
        return props.items.map((x: Item, index: number) => {
            const isExpanded = index === expandedIndex
            const icon = (
                <span className="text-xl">
                    {isExpanded ? <GoChevronDown/> : <GoChevronLeft/>}
                </span>
            )

            return (
                <div key={x.id}>
                    <div className="flex justify-between p-3 bg-gray-50 border-b items-center cursor_pointer" onClick={() => handleClick(index)}>
                        {x.label}
                        {icon}
                    </div>
                    {isExpanded && <div className="border-b p-5">{x.content}</div>}
                </div>
            )
        });
    };

    return (
        <div className="border-x border-t rounded">
            {renderedItems()}
        </div>
    )
}

export default Accordion