/* eslint-disable react/jsx-pascal-case */
import './App.css';
import Com_A from './components/Com/Com_A';
import { createContext } from 'react';

const data = createContext()
const data1 = createContext()

// import Recepi from './components/props/Recepi';
// import Number from './components/props/Number';
// import Searchbar from './components/Searchbar/Searchbar.jsx'
// import SearchBar from './components/props/SearchBar';
// import Tabel from './components/props/Tabel';
// import Props from './components/props/Props.jsx'
// import Props1 from './components/props/Props1.jsx'
// import Grid from './components/task1/Grid.jsx';
// import Grid1 from './components/task1/Grid1.jsx';
// import Grid2 from './components/task1/Grid2.jsx';
// import Grid3 from './components/task1/Grid3.jsx';
// import Props2 from './components/props/Props2';


function App() {

  const name = "vrutik"
  const Age = 20
  return (
    
   <div>

     <data.Provider value = {name}>
      <data1.Provider value = {Age}>
        <Com_A/>
        </data1.Provider>
      </data.Provider>
    
    {/* <Recepi/> */}
    {/* <Number/> */}
    {/* <Searchbar/> */}
    {/* <Tabel/> */}
    {/* <Props2/> */}
    {/* <Props/> */}
    {/* <SearchBar/> */}
    {/* <div className='flex justify-center mt-32 gap-12'>
    <Props1 name = 'Snow' img = 'https://images.pexels.com/photos/691668/pexels-photo-691668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    <Props1 name = 'River' img = 'https://images.pexels.com/photos/1525041/pexels-photo-1525041.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    <Props1 name = 'Mountain' img = 'https://images.pexels.com/photos/730981/pexels-photo-730981.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'/>
    </div> */}
    {/* <Grid/> */}
    {/* <Grid1/> */}
    {/* <Grid2/> */}
    {/* <Grid3/> */}
   </div>
  ); 
}
export default App;
export {data , data1 }