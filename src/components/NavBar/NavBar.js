import './navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { useAuth0 } from '@auth0/auth0-react'
const NavBar = (props) => {
    const { user } = useAuth0();

    return (
        <div className='header justify-content-between'>
            <GiHamburgerMenu onClick={props.handleNav} />
            <div className='d-flex '>
                <img src={user.picture} alt={user.nickname} />
                <p>{user.nickname}</p>
            </div>
        </div>
    );
}
 
export default NavBar;