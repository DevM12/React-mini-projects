import useBookContext from '../hooks/use-book-context';
import { useState } from "react";
import BookEdit from "./BookEdit";

export default function BookShow({ book }) {
       
    const { deleteBookById}=useBookContext();
    const [showEdit,setShowEdit]= useState(false);
    const handleDeleteClick=()=>{
        deleteBookById(book.id);
    };

    const handleEditClick=()=>{
        setShowEdit(!showEdit);
    };

    let content =<h3>{book.title}</h3>
    if(showEdit){
        content=<BookEdit handleEdit={handleEditClick} book={book} />
    }
    return (
        <div className="book-show">
            <img alt='books' src={`https://picsum.photos/seed/${book.id}/200/200`} />
            {content}
            <div className="actions">
            <button onClick={handleEditClick} className="edit">Edit</button>
            <button onClick={handleDeleteClick} className="delete">X</button>
            </div>
        </div>
    )
}