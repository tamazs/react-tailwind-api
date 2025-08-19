import {useAtom} from "jotai";
import {BookListAtom} from "../atom/bookatom.ts";

export function useBooks() {
    const [books, setBooks] = useAtom(BookListAtom)

    const getBookById = (id: number) => books.find((book) => book.id === id)

    return {books, setBooks, getBookById}
}