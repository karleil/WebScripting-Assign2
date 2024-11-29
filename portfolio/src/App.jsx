import React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from "./components/Layout";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";
import ProjectsScreen from "./screens/ProjectsScreen";


function App() {
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomeScreen />}/>
          <Route path="about" element={<AboutScreen />}/>
          <Route path="projects" element={<ProjectsScreen />}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
