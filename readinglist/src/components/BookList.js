import useBookContext from '../hooks/use-book-context';
import BookShow from './BookShow'
export default function Booklist() {

    const {book}=useBookContext();

    const renderedBooks = book.map((book) => (
        <div key={book.id}>
        <BookShow book={book}  />
    </div>
    ))
    
    return (
        <div className='book-list'>{renderedBooks}</div>
    )
}

