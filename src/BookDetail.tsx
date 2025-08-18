import {useEffect, useState} from "react";
import type {Book} from "./types/book";
import {useParams} from "react-router";
import toast from "react-hot-toast";

export default function BookDetail() {

    const [book, setBook] = useState<Book>()

    const params = useParams();

    useEffect(() => {
       fetch('https://fakerestapi.azurewebsites.net/api/v1/Books/' + params.bookId)
           .then(res => {
               res.json().then(book =>{
                   setBook(book);
                   toast.success("Book details successfully loaded!");
               })
           })
    }, [])

    return (
        <>
            <div className='w-full h-full flex justify-center items-center p-10'>
            <div className="card bg-base-100 w-96 shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{book?.title}</h2>
                    <p>{book?.description}</p>
                </div>
            </div>
            </div>
        </>
    )
}