import Table from "./Table"
import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go"
import useSort from "../hooks/useSort"

interface Props {
    data: any[],
    config: any[],
    keyFn(data: any): any
}

const SortableTable: React.FC<Props> = (props: Props) => {
    const {sortOrder, sortBy, setSortColumn, sortedData} = useSort(props)
    const {config} = props

    const updatedConfig = config.map((col) => {
        if(!col.sortValue){
            return col
        }

        return {
            ...col,
            header: () => 
                <th className="cursor-pointer hover:bg-gray-100" onClick={() => setSortColumn(col.label)}>
                    <div className="flex items-center">
                        {getIcons(col.label, sortBy, sortOrder)}
                        {col.label}
                    </div>
                </th>
        }
    })

    return (
            <Table {...props} data={sortedData} config={updatedConfig} />
    )
}

const getIcons = (label: string, sortBy: string | null, sortOrder: string | null): JSX.Element => {
    if (label !== sortBy){
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    }

    if (sortOrder === null){
        return <div>
            <GoArrowSmallUp />
            <GoArrowSmallDown />
        </div>
    } else if (sortOrder === 'asc'){
        return <div>
            <GoArrowSmallUp />
        </div>
    } else {
        return <div>
            <GoArrowSmallDown />
        </div>
    }
}

export default SortableTable