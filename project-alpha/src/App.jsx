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
import Profile from "./pages/Trainer/Profile";
import TNlayout from "./layout/TNlayout";
import MessengerDetails from "./pages/Messenger/MessengerDetails";
import Account from "./pages/Account/Account";
import Mycourse from "./pages/Trainee/Mycourse";
import Dashboard from "./pages/Trainer/Dashboard";
import Myevents from "./pages/Trainer/Myevents";
import Addevents from "./pages/Trainer/Addevents";
import Overviewevents from "./pages/Trainer/Overviewevents";
import Token from "./pages/Token/Token";
import Favorite from "./pages/Favorite/Favorite";
import TrainerLayOut from "./layout/TrainerLayout";

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/favorite" element={<Favorite />} />
            <Route path="/search" element={<Search />} />
            <Route path="/coursedetail/:id" element={<CourseDetail />} />
            <Route path="/token" element={<Token />} />
            <Route element={<TNlayout />}>
              <Route path="/messenger" element={<Messenger />} />
              <Route path="/messenger/:id" element={<MessengerDetails />} />
              <Route path="/account" element={<Account />} />
              <Route path="/mycourse" element={<Mycourse />} />
              <Route element={<TrainerLayOut />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/dashboard/myevents" element={<Myevents />} />
                <Route path="/dashboard/addevents" element={<Addevents />} />
                <Route
                  path="/dashboard/overview"
                  element={<Overviewevents />}
                />
              </Route>
            </Route>
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
