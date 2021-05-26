import { useAuth0 } from '@auth0/auth0-react';
import { FiLogOut } from 'react-icons/fi';


const Logout = () => {
    const { logout } = useAuth0()

    return (
        
        <button className='btn-link text-white' onClick={() => logout(window.location.origin)}>
            <FiLogOut />
            Log Out
        </button>
    );
}
 
export default Logout;