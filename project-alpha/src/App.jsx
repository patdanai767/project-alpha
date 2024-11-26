import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
import Home from './pages/Home/Home';

function App  ()  {
  return (
    <BrowserRouter>
    <Routes>
      {/* <Route path='/' element={<Intro />} />
      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/table" element={<Table />} />
        <Route path="/history" element={<History />} />
      </Route> */}
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path='/' element={<Home/>}/>
    </Routes>
  </BrowserRouter>
  )
}
export default App
