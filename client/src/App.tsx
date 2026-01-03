import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./pages/protected";
import Home from "./pages/home";
import SearchPage from "./pages/search";
import Post from "./pages/post";
import NotFound from "./pages/notFound";
import Hero from "./components/hero";
import Navbar from "./components/navbar";
import Blog from "./pages/blog";


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
    <div className="h-screen ">
       <RouterProvider router={router} />
       <Navbar/>
       <Hero/>
    </div>
  )
}

export default App
