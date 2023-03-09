import { useState } from "react"


interface Props {
    data: any[],
    config: any[]
}

const useSort = (props: Props) => {

    const [sortOrder, setSortOrder] = useState<string | null>(null)
    const [sortBy, setSortBy] = useState<string | null>(null)

    const {data, config} = props

    const setSortColumn = (label: string) => {
        if (sortBy && label !== sortBy){
            setSortOrder('asc')
            setSortBy(label)
            return
        }
        
        switch(sortOrder){
            case null:
                setSortOrder('asc')
                setSortBy(label)
                break
            case 'asc':
                setSortOrder('desc')
                setSortBy(label)
                break
            case 'desc':
                setSortOrder(null)
                setSortBy(null)
                break
            default:
                break
        }
    }

    let sortedData = data
    if (sortBy && sortOrder){
        const { sortValue } = config.find(col => col.label === sortBy)
        sortedData = [...data.sort((a: any, b: any) => {
            const valueA = sortValue(a)
            const valueB = sortValue(b)

            const reverseOrder = sortOrder === 'asc' ? 1 : -1

            if (typeof valueA === 'string'){
                return valueA.localeCompare(valueB) * reverseOrder
            }
            return (valueA - valueB) * reverseOrder
        })]
    }

    return {
        sortOrder, 
        sortBy,
        setSortColumn,
        sortedData
    }
}
export default useSort