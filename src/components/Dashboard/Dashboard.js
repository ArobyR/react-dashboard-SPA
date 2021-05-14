import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import SideBar from '../SideBar/SideBar';
import NotFound from '../NotFount/NotFound';
import NavBar from '../NavBar/NavBar';
import UserList from '../UserList/UserList';
import TicketList from '../TicketList/TicketList';
import ReportContainer from '../ReportContainer/ReportContainer';
import UserRegister from '../UserRegister/UserRegister';
import ChartDashboard from '../ChartDashboard/ChartDashboard';

const Dashboard = () => {
    const [navActive, setNavActive] = useState(false)
    const handleShowNav = () => setNavActive(!navActive)

    return (
        <div>
            <NavBar handleNav={handleShowNav}/>
            <SideBar show={navActive}/>
            <Switch>
                <Route exact path='/admin'>
                    <UserRegister />
                </Route>
                <Route path='/reports'>
                    <ReportContainer />
                </Route>
                <Route path='/ticket'>
                    <TicketList />
                </Route>
                <Route path='/admin/users' >
                    <UserList />
                </Route>
                <Route exact path='/'>
                    <ChartDashboard />
                </Route>
                <Route component={NotFound}/>
            </Switch>
        </div>
    );
}
 
export default Dashboard;