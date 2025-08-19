import {atom} from "jotai"
import type {Book} from "../types/book";

export const BookListAtom = atom<Book[]>([])