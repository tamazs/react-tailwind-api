import {useEffect, useState} from 'react'
import toast from "react-hot-toast";
import type {Book} from "./types/book";
import {useNavigate} from "react-router";

function BooksList() {
    const [books, setBooks] = useState<Book[]>([])

    const navigate = useNavigate();

    useEffect(() => {
        fetch("https://fakerestapi.azurewebsites.net/api/v1/Books")
            .then(res => {
                res.json().then(books => {
                    setBooks(books)
                    toast.success("Books found!")
                });
            })
    }, [])

    return (
        <>
            <div className="flex flex-wrap justify-between items-center gap-3">
                {books.map(book => {
                    return (

                        <div key={book.id} className="card card-dash bg-base-100 w-96">
                            <div className="card-body">
                                <h2 className="card-title">{book.title}</h2>
                                <p>{book.description}</p>
                                <div className="card-actions justify-end">
                                    <button onClick={() => {
                                        navigate(`/books/${book.id}`)
                                    }} className="btn btn-primary">Details</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default BooksList
