import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Home from "./pages/Home/Home";
import Layout from "./layout/layout";
import Search from "./pages/Search/Search";
import Payment from "./pages/Payment/Payment";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import AuthProvider from "./contexts/AuthContext";
import Messenger from "./pages/Messenger/Messenger";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/coursedetail" element={<CourseDetail />} />
            <Route path="/Messenger" element={<Messenger />} />
          </Route>
          <Route path="/payment" element={<Payment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
export default App;
