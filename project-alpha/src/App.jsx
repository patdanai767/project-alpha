import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Layout from "./layout/layout";
import Search from "./pages/Search/Search";
import Payment from "./pages/Payment/Payment";

function App() {
  return (
    <BrowserRouter>
      <Routes> 
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search/>}/>
        </Route>
        <Route path="/payment" element={<Payment />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
