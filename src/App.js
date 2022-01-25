import Home from './Pages/Home'
import About from './Pages/About'

import { Route,Routes,Outlet } from "react-router"



function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/curriculum" element={<About/>}/>
    </Routes>
  );
}

export default App;