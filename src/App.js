import { BrowserRouter as Router } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react'
import Dashboard from './components/Dashboard/Dashboard';
import Login from './components/Login/Login';
import Loding from './components/Loding/Loding';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const { isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return (
      <Loding />
    )
  }

  return (
    <div>
        { isAuthenticated ?
          <Router>
            <Dashboard />
          </Router>
          :
          <Login />
        }
    </div>
  );
}

export default App;
