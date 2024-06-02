import { useState } from "react"
import useBookContext from '../hooks/use-book-context';
export default function BookEdit({ book, handleEdit }) {
    const {editBookById}=useBookContext();
    const [title,setTitle]=useState([book.title]);

    const handleChange=(event)=>{
        setTitle(event.target.value)
    }
    

    const handleSubmit=(event)=>{
        event.preventDefault();  
        editBookById(book.id,title)  
        handleEdit()
    }



    return (
        <form className="book-edit" onSubmit={handleSubmit}>
            <input type="text" value={title} onChange={handleChange} className="input" />   
            <button className='button is-primary'>submit</button> 
        </form>
    )
}