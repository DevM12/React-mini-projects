
import useSort from '../hooks/use-sort'
import Table from './Table'
import { IoCaretUpSharp, IoCaretDownSharp } from "react-icons/io5";
export default function SortableTable(props) {
    
    const { config, data } = props;

    const {
        sortOrder,
        sortBy,
        handleAccendClick,
        handleDecendClick,
        sortedData
    }=useSort({data,config})

    
    

    function getIcons(label, sortBy, sortOrder) {
        if (label !== sortBy) {
            return <div className='px-1 '><IoCaretUpSharp onClick={() => handleAccendClick(label)} /> <IoCaretDownSharp onClick={() => handleDecendClick(label)} /></div>
        } else {
            if (sortOrder === null) {
                return <div className='px-1 '><IoCaretUpSharp onClick={() => handleAccendClick(label)} /> <IoCaretDownSharp onClick={() => handleDecendClick(label)} /></div>
            } else if (sortOrder === 'asc') {
                return <IoCaretDownSharp onClick={() => handleDecendClick(label)} />
            } else if (sortOrder === 'desc') {
                return <IoCaretUpSharp onClick={() => handleAccendClick(label)} />
            }
        }
    }

    const updatedConfig = config.map((column) => {
        if (column.sortValue) {
            return {
                ...column,
                header: () => (
                    <th className='flex justify-center cursor-pointer hover:bg-gray-100'>
                        {getIcons(column.label, sortBy, sortOrder)}
                        {column.label}
                    </th>
                )
            };
        } else {
            return column;
        }
    })



    return <Table {...props} data={sortedData} config={updatedConfig} />
}