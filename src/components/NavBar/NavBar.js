import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';

const NavBar = (props) => {
    return (
        <div className='header'>
            <GiHamburgerMenu onClick={props.handleNav} />
        </div>
    );
}
 
export default NavBar;