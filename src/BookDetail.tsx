import {useParams} from "react-router";
import {useBooks} from "./hooks/useBooks.ts";
import {useEffect} from "react";
import toast from "react-hot-toast";

export default function BookDetail() {

    const params = useParams();
    const {getBookById} = useBooks();
    const book = getBookById(Number(params.bookId));

    useEffect(() => {
        if (book) {
            toast.success("Book details loaded!");
        } else {
            toast.error("Book details could not be loaded!");
        }
    }, [book]);

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