import React from 'react'
import Header from '../Componets/header/Header'
import Headstart from '../Componets/headstart/Headstart'
import Higher from '../Componets/higher/Higher'
import How from '../Componets/how/How'
import Video from '../Componets/video/Video'
import Clients from '../Componets/video/clients/Clients'
import SectionWithToggle from '../Componets/togglesection/SectionWithToggle'
import Brands from '../Componets/brands/Brands'
import Footer from '../Componets/footer/Footer'

export default function Home() {
  return (
    <div>
         <Header></Header>
   <Headstart></Headstart>
   <Higher></Higher>
   <How></How>
   <Video></Video>
   <Clients></Clients>
   <SectionWithToggle></SectionWithToggle>
   <Brands></Brands>
   <Footer></Footer>
    </div>
  )
}
