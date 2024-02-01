import React from "react"
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom"
import TodoList from "./page/TodoList"
import Ex from "./page/useMediaQuery"
import Api from "./page/ApiConnect"
import React_Modal from "./page/React_Modal"
import VWVH from "./page/vh, vw"
import Project from "./page/Carousel"
import Paging from "./page/Pagination"



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/api" element={<Api />} />
        <Route path="/TodoList" element={<TodoList />} />
        <Route path="/responsive" element={<Ex />} />
        <Route path="/Modal" element={<React_Modal /> } />
        <Route path="/VWVH" element={<VWVH />} />
        <Route path="/Carousel" element={<Project />} />
        <Route path="/Pagination" element={<Paging />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App