
import Home from  './pages/home/home'
import Product from  './pages/Product/Product'
import User from  './pages/User/User'
import Menu from './components/menu/Menu'
import Navbar from './components/navbar/Navbar'
import './styles/globle.css'


import {
  createBrowserRouter,
  RouterProvider,
 
  Outlet,

} from "react-router-dom";





function App() {

  const Layout = () =>{
    return (
      < div className='main0'>
          <div className='main1'>
            <Menu/>
          </div>
          <div className='main2'>
              <div className='container'>
                 <div className='navcontainer'>
                     <Navbar/>
                 </div>
                 <div className='contentcontainer'>
                     <Outlet/>
                 </div>
              </div>
          </div>
      </div>
    );
  }

  const router = createBrowserRouter([
   
    {
      path: "/",
        element: <Layout />,

        children:[
          {
            path: "/",
              element: <Home />,
            },
            {
              path: "/Product",
              element: <Product />,
            },
            {
              path: "/User",
              element: <User />,
            },



        ]

      },
   
   
  ]);


  return  <RouterProvider router={router} />;
}

export default App;
