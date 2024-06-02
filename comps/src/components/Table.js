
export default function Table({ data, config, keyFn }) {
    const renderedHeaders = config.map((headerData) => {
        if (headerData.header) {
            return <th key={headerData.label}> {headerData.header()} </th>;
        } else {
            return <th key={headerData.label} className='p-3'>{headerData.label}</th>
        }
    })

    const renderedRows = data.map((rowData) => {
        const renderedCells = config.map((cellData) => {
            return <td key={cellData.label} className='p-3'>{cellData.render(rowData)}</td>
        })
        return <tr className='border-b' key={keyFn(rowData)}>
            {renderedCells}
        </tr>
    });

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