import './App.css'
import HomePage from './Pages/HomePage'
import Data from './Pages/Data'
import Axios from './Pages/Axios'
import Page from './Pages/Page'
import Shoppage from './Pages/Shoppage'
import Login from './Pages/Login'
import {BrowserRouter,Routes,Route} from  'react-router-dom'
import Navbar from './Componetes/Navbar'
import Footer from './Componetes/Footer'



function App() {

  /* react router dom */

  return (
    <>


    <BrowserRouter>
       <Navbar/>
         <Routes>
           <Route path='/' element={<HomePage/>}></Route>
           <Route path='/Shoppage' element={<Shoppage/>}></Route>
           <Route path='/Page' element={<Page/>}></Route>
           <Route path='/Data' element={<Data/>}></Route>
           <Route path='/Axios' element={<Axios/>}></Route>
           <Route path='/Login'element={<Login/>}></Route>
          </Routes>
        {<Footer/> }
     </BrowserRouter>
     
   </>
  )
}

export default App
