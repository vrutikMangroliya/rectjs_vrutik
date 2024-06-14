// import CakeContainer from './components/CakeContainer';
import  './App.css'
import ProductData from './components/ProductData'
import Axios_Get from './redux/cake/Axios_Get'
import Axios_Post from './redux/cake/Axios_Post'


const App = () => {
  return (
    <div>
      {/* <CakeContainer/> */}
      <ProductData/>
      <Axios_Post/>
      <Axios_Get/>
    </div>
  )
}

export default App
