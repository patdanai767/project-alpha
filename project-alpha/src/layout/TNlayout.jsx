import { Outlet } from 'react-router-dom'
import SubNavbar from '../components/SubNavbar'
import Navbar from '../components/Navbar/Navbar'

export default function TNlayout() {
  return (
    <div className='bg-sky h-[1280px]'>
        <Navbar/>
        <SubNavbar/>
        <Outlet/>
    </div>
  )
}