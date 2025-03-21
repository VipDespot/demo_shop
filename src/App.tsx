import { Button, MantineProvider } from "@mantine/core";
import '@mantine/core/styles.css';
import { Routes, Route } from "react-router";


import React from "react";
import Home from "./Home/Home";
import Basket from "./pages/Basket";
import Header from "./pages/Header/Header";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";

export const App = () => {
 
  return (
    <MantineProvider>
    <div>
      <Header/>
      <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/basket' element={<Basket/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        
      </Routes>
      </div>
    </div>
    </MantineProvider>
  )
}
