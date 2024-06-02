import { useState } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleDown } from "react-icons/fa";
export default function ExpandablePanel({ header, children }) {
    const [expanded, setExpanded] = useState(false)
    const handleClick = () => {
        setExpanded(!expanded)
    }
    return (
        <div className='mb-2 border rounded'>
            <div className="flex p-2 justify-between items-center">
                <div className="flex flex-row items-center justify-between">
                    {header}
                </div>
                <div className="cursor-pointer" onClick={handleClick}>
                    {expanded ? <FaArrowAltCircleDown /> : <FaArrowAltCircleLeft />}
                </div>
            </div>
            <div className="p-2 border-t">
                {expanded && children}
            </div>
        </div>
    )
}