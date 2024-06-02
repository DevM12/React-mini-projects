import { useState } from 'react'
import Dropdown from '../components/Dropdown'
export default function DropdownPage() {
    const [selection, setSelection] = useState('');

    const handleSelect = (option) => {
        const def= {label:'Select',value:'select'}
        if (option === selection) {
            setSelection(def)
        } else {
            setSelection(option)
        }
        
    };

    const options = [
        { label: 'Red', value: 'red' },
        { label: 'Green', value: 'green' },
        { label: 'Blue', value: 'blue' },
    ];

    return (
        <div className="flex">
            < Dropdown options={options} value={selection} onChange={handleSelect} />
        </div>
    );
}