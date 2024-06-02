import { useContext } from 'react'
import BookContext from '../context/book'

export default function useBookContext(){
    return useContext(BookContext)
}