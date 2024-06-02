import { createContext, useState } from "react";

import { v4 as uuid } from 'uuid';
import axios from 'axios';


const BookContext = createContext();
function Provider({ children }) {
    const [book, setBook] = useState([]);

    const fetchBooks = async () => {
        const response = await axios.get('http://localhost:3001/book');
        setBook(response.data);
    }

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/book', {
            id: uuid(), title
        })
        const updatedBooks = [...book, response.data]
        setBook(updatedBooks)
    }

    const deleteBookById = async (id) => {
        await axios.delete(`http://localhost:3001/book/${id}`)
        const updatedBooks = book.filter((books) => {
            return books.id !== id;
        });
        setBook(updatedBooks)
    }

    const editBookById = async (id, title) => {
        const response = await axios.put(`http://localhost:3001/book/${id}`, {
            title: title
        })

        const updatedBooks = book.map((e) => {
            if (e.id === id) { return { ...e, ...response.data } }
            return e;
        }
        )
        setBook(updatedBooks)
    }

    const valueToShare = {
        book,
        fetchBooks,
        createBook,
        deleteBookById,
        editBookById

    };
    return <BookContext.Provider value={valueToShare}>
        {children}
    </BookContext.Provider>

}

export { Provider };
export default BookContext;