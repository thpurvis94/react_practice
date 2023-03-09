import SortableTable from "../components/SortableTable"
import Table from "../components/Table"

type Fruit = {
    name: string,
    color: string,
    score: number
}

const TablePage: React.FC = () => {

    const fruits: Fruit[] = [
        {name: 'Orange', color: 'bg-orange-500', score: 5},
        {name: 'Apple', color: 'bg-red-500', score: 3},
        {name: 'Banana', color: 'bg-yellow-500', score: 1},
        {name: 'Lime', color: 'bg-green-500', score: 4},
        {name: 'Cherry', color: 'bg-red-700', score: 75}
    ]
    const config = [
        {
            label: 'Name',
            render: (fruit: Fruit) => fruit.name,
            sortValue: (fruit: Fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit: Fruit) => <div className={`p-3 m-2 ${fruit.color}`} />
        },
        {
            label: 'Score',
            render: (fruit: Fruit) => fruit.score,
            sortValue: (fruit: Fruit) => fruit.score
        },
        {
            label: 'Score Squared',
            render: (fruit: Fruit) => fruit.score ** 2,
            sortValue: (fruit: Fruit) => fruit.score ** 2
        }
    ]

    const keyFn = (fruit: Fruit) => {
        return fruit.name
    }

    return (
        <div>
            <Table data={fruits} config={config} keyFn={keyFn} />
            <br/>
            <SortableTable data={fruits} config={config} keyFn={keyFn} />
        </div>
    )
}
export default TablePage