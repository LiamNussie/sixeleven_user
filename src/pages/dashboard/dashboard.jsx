import './dashboard.scss';
import { Route, Switch } from 'react-router-dom';
import Header from '../../components/header/header';
import Sidebar from '../../components/sidebar/sidebar';
import Requests from './requests/requests';
import requests from './requests/requests';
import DashboardLanding from './dashboardLanding/dashboardLanding';
import Donations from './donations/donations';
import Events from './events/events';
import Staff from './staff/staff';
import Volunteers from './volunteers/volunteers';
import Careers from './career/career';
import Settings from './settings/settings';
import ViewRequest from './requests/viewRequest/viewRequest';
import Profile from './requests/profile/profile';
import AddEvent from './events/addEvent/addEvent';
import AddJob from './career/addJob/addJob';
import ViewJob from './career/viewJob/viewJob';
import AddStaff from './staff/addStaff/addStaff';
import Invite from './settings/invite/invite';
import ViewVolunteer from './volunteers/viewVolunteer/viewVolunteer';
import AddVolunteer from './volunteers/addVolunteer/addVolunteer';
import ViewDonation from './donations/viewDonation/viewDonation';

const Dashboard = () => {
    // const { url, path} = useRouteMatch();
    return (
        <div className="dashboard">
            <div className="left">
                <Sidebar />
            </div>
            <div className="right">
                <Header />
                    <Switch>
                        <Route exact path="/" component={DashboardLanding} />
                        <Route exact path="/dashboard/requests" component={Requests} />
                        <Route exact path="/dashboard/requests/view" component={ViewRequest} />
                        <Route exact path="/dashboard/requests/view/profile" component={Profile} />
                        <Route exact path="/dashboard/donations" component={Donations} />
                        <Route exact path="/dashboard/donations/view-donation" component={ViewDonation} />
                        <Route exact path="/dashboard/events" component={Events} />
                        <Route exact path="/dashboard/events/add" component={AddEvent} />
                        <Route exact path="/dashboard/staff" component={Staff} />
                        <Route exact path="/dashboard/staff/add" component={AddStaff} />
                        <Route exact path="/dashboard/staff/invites" component={Invite} />
                        <Route exact path="/dashboard/volunteers" component={Volunteers} />
                        <Route exact path="/dashboard/volunteers/add" component={AddVolunteer} />
                        <Route exact path="/dashboard/volunteers/view" component={ViewVolunteer} />
                        <Route exact path="/dashboard/career" component={Careers} />
                        <Route exact path="/dashboard/career/view-job" component={ViewJob} />
                        <Route exact path="/dashboard/career/add" component={AddJob} />
                        <Route eaxct path="/dashboard/settings" component={Settings} />
                        
                        {/* <Route path='*' element={<Donations />} /> */}
                    </Switch>
                
            </div>
            
        </div>
    )
}

export default Dashboard;