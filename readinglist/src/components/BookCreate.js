import { useState,useContext} from "react"
import BookContext from "../context/book";
export default function BookCreate(){
    const [title,setTitle]=useState('');
    const {createBook}=useContext(BookContext)
    const handleChange=(event)=>{
        setTitle(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault();
        createBook(title);
        setTitle('');
    };

    return <div className="book-create">
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" value={title} onChange={handleChange} />
            <button className="button is-black">Create Book</button>
        </form>
    </div>
}