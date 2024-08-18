import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import About from './components/About/About.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home.jsx';
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx';
import UserDetails from "./components/UserDetails/UserDetails.jsx"
import Posts from './components/Posts/Posts.jsx';
import PostDetails from './components/Postdetails/PostDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    children:[
      {
        path:'/about',
        element:<About></About>
      },
      {
        path: '/contact',
        element:<Contact></Contact>
      },
      {
        path: '/user',
        loader: () => fetch('https://jsonplaceholder.typicode.com/users'),
        element:<User></User>
      },
      {
        path:'/use/:useId',
        loader:({params}) => fetch(`https://jsonplaceholder.typicode.com/users/
          ${params.useId}`),
          element:<UserDetails></UserDetails>
      },
      {
        path:'/posts',
        loader:() => fetch('https://jsonplaceholder.typicode.com/posts'),
        element:<Posts></Posts>
      },
      {
        path:'/post/:postId',
        loader: ({params}) => fetch(`https://jsonplaceholder.typicode.com/posts/${params.postI}`),
        element:<PostDetails></PostDetails>
      }
      
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router} />
  </StrictMode>,
)
