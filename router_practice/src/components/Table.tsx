import { Fragment } from "react"

interface Props {
    data: any[],
    config: any[],
    keyFn(data: any): any
}

const Table: React.FC<Props> = (props: Props) => {

    const renderedHeaders = props.config.map((col) => {
        if(col.header){
            return <Fragment key={col.label}>{col.header()}</Fragment>
        }
        return <th key={col.label}>{col.label}</th>
    })

    const renderedRows = props.data.map((row: any) => {
        const renderedCells = props.config.map((col: any) => {
            return <td key={col.label}>{col.render(row)}</td>
        })
        
        return (
            <tr key={row.name} className="border-b">
                {renderedCells}
            </tr>
        )
    })

    return (
        <table className="table-auto border-spacing-2">
            <thead>
                <tr className="border-b-2">
                    {renderedHeaders}
                </tr>
            </thead>
            <tbody>
                {renderedRows}
            </tbody>
        </table>
    )
}
export default Table