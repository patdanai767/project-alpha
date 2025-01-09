import { Outlet } from 'react-router-dom'
import SubNavbar from '../components/SubNavbar'
import Navbar from '../components/Navbar'

export default function TNlayout() {
  return (
    <div>
        <Navbar/>
        <Outlet/>
        <SubNavbar/>
        
        
    </div>
  )
}