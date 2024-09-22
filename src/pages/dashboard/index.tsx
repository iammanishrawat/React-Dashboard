// import SidebarComponent, { SidebarItem } from './components/sidebar';
import SidebarComponent, { SidebarItem } from '@/components/sidebar';
import TopbarComponent from '@/components/topbar';
import {
  LifeBuoy,
  Receipt,
  Boxes,
  Package,
  UserCircle,
  BarChart3,
  LayoutDashboard,
  Settings,
  LogOut
} from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardComponent = () => {
  const handleLoginClick = () => {
    // useEffect(() => {
    // }, [])
  }
  return (
    <main className="App flex">
      <SidebarComponent>
        <SidebarItem icon={<LayoutDashboard size={20} />} text="Dashboard" active />
        <SidebarItem icon={<BarChart3 size={20} />} text="Statistics" />
        <SidebarItem icon={<UserCircle size={20} />} text="Users" />
        <SidebarItem icon={<Boxes size={20} />} text="Inventory" />
        <SidebarItem icon={<Package size={20} />} text="Orders" alert />
        <SidebarItem icon={<Receipt size={20} />} text="Billings" />
        <SidebarItem icon={<Settings size={20} />} text="Settings" />
        <SidebarItem icon={<LifeBuoy size={20} />} text="Help" />
        <Link to="/logout" onClick={handleLoginClick}><SidebarItem icon={<LogOut  size={20} />} text="Logout" /></Link>
      </SidebarComponent>
      <TopbarComponent />
    </main>
  )
}

export default DashboardComponent