import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

export default function Layout() {
  return (
    <div className='bg-sky'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}
