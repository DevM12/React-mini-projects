import { useState, useEffect } from 'react'

export default function useCounter({initialCount}){
        const [count, setCount] = useState(initialCount)
    
        useEffect(() => {
            console.log(count)
        }, [count]);
    
        const handleIncrementClick = () => {
            setCount(count + 1)
        }
        return {
            count,
            handleIncrementClick
        }

}