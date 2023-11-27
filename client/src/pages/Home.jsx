import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { Link } from 'react-router-dom'; 
import {
  DashboardIcon, ShoppingCartIcon, CalculatorIcon, PieChartIcon, MedicalFolder, Pharmacie
} from '../assets/icons';
import { BiUser } from 'react-icons/bi';

const Dashboard = () => {
  const menuItem = [
    {
      path: "/",
      name: "Dashboard",
      icon: <DashboardIcon />,
    },
    {
      path: "/users",
      name: "Users",
      icon: <BiUser />,
    },
    {
      path: "/comptabilite",
      name: "Comptabilité",
      icon: <CalculatorIcon />,
    },
    {
      path: "/statistiques",
      name: "Statistiques",
      icon: <PieChartIcon />,
    },
    {
      path: "/dossiers_patient",
      name: "Dossiers patient",
      icon: <MedicalFolder />,
    },
    {
      path: "/pharmacie",
      name: "Pharmacie",
      icon: <Pharmacie />,
    },
  ];

  return (
    <Sidebar className=' flex h-screen w-full m-10 bg-gray-800 text-white justify-center items-center'>
      <Menu className='flex p-4 rounded-xl bg-gray-800 w-full  justify-center items-center'>
        {menuItem.map((item, index) => (
          <Link to={item.path} className='flex text-xl w-full justify-center items-center' key={index}>
              <span>
                {item.icon}
                </span>
            <MenuItem className='w-full'>
              {item.name}
              </MenuItem>
          </Link>
        ))}
      </Menu>
    </Sidebar>
  );
}

export default Dashboard;