import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./pages/protected";
import Home from "./pages/home";
import SearchPage from "./pages/search";
import Post from "./pages/post";
import NotFound from "./pages/notFound";


const router = createBrowserRouter([
  {
    path:"/",
    element:<ProtectedRoute />,
    children:[
      {
        index: true,
        element:<Home/>
      },
      {
        path: "search",
        element: <SearchPage />,
      },
      { path: "*",
       element: <NotFound /> 
      },
      {
        path: "posts/:id",
        element: <Post />,
      },
    ]
  }
]);
function App() {
  

  return (
    <>
       <RouterProvider router={router} />
    </>
  )
}

export default App
