import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

import Layout from './Component/Content/Layout'
import Home from './Component/Content/Home'
import About from './Component/Content/About'
import Contact from './Component/Content/Contact'
import Project from './Component/Content/Project'

import WeatherReact from "./Component/Content/projectDetails/WeatherReact"
import TodoReact from "./Component/Content/projectDetails/TodoReact"
import WeatherJs from "./Component/Content/projectDetails/WeatherJs"
import TodoJs from "./Component/Content/projectDetails/TodoJs"
import TicTacToeJs from "./Component/Content/projectDetails/TicTacToejs"
import NetflixClone from "./Component/Content/projectDetails/NetflixClone"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='project' element={<Project />} />

        <Route path='project/weather-react' element={<WeatherReact />} />
        <Route path='project/todo-react' element={<TodoReact />} />
        <Route path='project/weather-js' element={<WeatherJs />} />
        <Route path='project/todo-js' element={<TodoJs />} />
        <Route path='project/tictactoe' element={<TicTacToeJs />} />
        <Route path='project/netflix' element={<NetflixClone />} />

      </Route>
    )
  )

  return <RouterProvider router={router} />
}

export default App