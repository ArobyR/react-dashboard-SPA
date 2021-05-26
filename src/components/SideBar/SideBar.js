import { Link } from 'react-router-dom';
import './sidebar.css'
import { BiSpreadsheet } from 'react-icons/bi';
import { RiHomeSmileFill, RiAdminFill } from 'react-icons/ri';
import { ImTicket } from 'react-icons/im';
import { FiUsers } from 'react-icons/fi';
import Logout from '../Logout/Logout';

const SideBar = ({ show }) => {
    return (
        <div className={show ? 'sidenav active' : 'sidenav'}>
            <span className='title-p'>Dashboard</span>
            <ul>
                <li>
                    <Link className='link' to='/'>
                        <RiHomeSmileFill />
                        Dashboard
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/reports'>
                        <BiSpreadsheet />
                        Reports
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/ticket'>
                        <ImTicket />
                        Ticket
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/admin/users'>
                        <FiUsers />
                        Users
                    </Link>
                </li>
                <li>
                    <Link className='link' to='/admin'>
                        <RiAdminFill />
                        Admin
                    </Link>
                </li>
                <li>
                    <Logout/>
                </li>
            </ul>    
        </div>
    );
}
 
export default SideBar;