// import Table from '../components/Table'
import SortableTable from '../components/SortableTable'
export default function TablePage() {
    const data = [
        { name: 'Apple', color: 'bg-red-500', score: 5, des: 'Newtons Shit' },
        { name: 'Orange', color: 'bg-orange-500', score: 1, des: 'Random Shit' },
        { name: 'Grape', color: 'bg-purple-500', score: 3, des: 'Just a Shit' },
        { name: 'Mango', color: 'bg-yellow-500', score: 6, des: 'Not a Shit' },
    ]

    const config = [
        {
            label: 'Name',
            render: (fruit) => fruit.name,
            sortValue: (fruit) => fruit.name
        },
        {
            label: 'Color',
            render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`}></div>
        },
        {
            label: 'Score',
            render: (fruit) => fruit.score,
            sortValue: (fruit) => fruit.score
        },
        {
            label: 'Description',
            render: (fruit) => fruit.des
        },
    ]
    const keyFn = (fruit) => {
        return fruit.name
    }
    return (
        <div>
            < SortableTable data={data} config={config} keyFn={keyFn} />
        </div>
    )
}