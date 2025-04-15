
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Brands from './Componets/brands/Brands'
import Footer from './Componets/footer/Footer'
import Header from './Componets/header/Header'
import Headstart from './Componets/headstart/Headstart'
import SecHeadstart from './Componets/headstart/SecHeadstart'
import Higher from './Componets/higher/Higher'
import How from './Componets/how/How'
import SectionWithToggle from './Componets/togglesection/SectionWithToggle'
import Clients from './Componets/video/clients/Clients'
import Video from './Componets/video/Video'
import Home from './pages/Home'


function App() {

  return  (

    <>
<BrowserRouter>
<Routes>
<Route  path='/'>
  <Route index  element={<Home/>}/>

</Route>

</Routes>
</BrowserRouter>
    </>
  )
}

export default App
