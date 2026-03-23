import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
import Layout from './Component/Content/Layout'
import Home from './Component/Content/Home'
import About from './Component/Content/About'
import Contact from './Component/Content/Contact'
import Project from './Component/Content/Project'

function App() {
  const router = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element= {<Layout/>} >
      <Route path='' element ={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='contact' element={<Contact/>}/>
      <Route path='project' element={<Project/>}/>
    </Route>
  ))
  return (
    <div>
      <RouterProvider router = {router}/>
    </div>
  )
}

export default App
