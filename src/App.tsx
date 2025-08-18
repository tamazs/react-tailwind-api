import {createBrowserRouter, RouterProvider} from "react-router";
import BooksList from "./BooksList.tsx";
import Layout from "./layout/Layout.tsx";
import BookDetail from "./BookDetail.tsx";

function App() {
    return (
        <RouterProvider router={createBrowserRouter([
            {path: '/',
                element: <Layout />,
            children: [{
                index: true,
                element: <BooksList />
            },
                {
                    path: '/books/:bookId',
                    element: <BookDetail />
                }
            ]}
        ])} />
    )
}

export default App
