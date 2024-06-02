import { useState } from 'react';
import { FaArrowAltCircleDown, FaArrowAltCircleLeft } from "react-icons/fa";

export default function Accordion({ items }) {
    const [expandedIndex, setExpandedIndex] = useState(-1);

    
    const handleClick=(index)=>{
        if(expandedIndex===index){
            setExpandedIndex(-1)
        }else{
            setExpandedIndex(index)
        }
            
    }

    const renderedItems = items.map((i, index) => {
        const isExpanded = index === expandedIndex

        return (
            <div key={i.id} onClick={() => handleClick(index)} className='p-1 w-1/2'>
                <div className='flex p-3 bg-gray-200 border-b items-center cursor-pointer justify-between'>
                    {i.label}
                    <span className='ml-1'>{isExpanded ? <FaArrowAltCircleDown /> : <FaArrowAltCircleLeft />}</span>
                </div>
                {isExpanded && <div  className='bg-gray-50 border-b p-5'>{i.content}</div>}
            </div>
        );
    });
    return <div className='border-x border-t rounded'>
        {renderedItems}
    </div>
}