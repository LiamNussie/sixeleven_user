
import './App.css';
import {Route, Switch, useHistory} from 'react-router-dom';
import Dashboard from './pages/dashboard/dashboard';
import { useEffect } from 'react';
import Sidebar from './components/sidebar/sidebar';
import Header from './components/header/header';
import Login from './pages/signup/login';
import ProtectedRoute from './routing/protectedRoute/protectedRoute';
import {useDispatch} from 'react-redux'
import store from './redux/store';
import { useSelector } from 'react-redux';
import { loaduser, loaduser2 } from './redux/actions/auth';
import AppLoader from './components/appLoader/appLoader';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/home/home';
import About from './pages/about/about';
import Event from './pages/events/events';
import GetInvolved from './pages/getInvolved/getInvolved';
import Contact from './pages/contact/contact';
import Career from './pages/career/career';
import ViewListing from './pages/career/view-listing/viewListing';
import Apply from './pages/career/apply/apply';
import Volunteer from './pages/volunteer/volunteer';
import Donation from './pages/donation/donation';
import RequestAid from './pages/requets-flow/requestAid/requestAid';
import Profile from './pages/signup/profile/profile';
import Category from './pages/requets-flow/category/category';
import Conditional from './pages/requets-flow/category/conditional/conditional';


const state = store.getState();


// const authData = state.userData;
// const currentUser = state.userData
// console.log(authData, currentUser);
const authToken = localStorage.SIXELEVEN_TOKEN

function App() {

  const currentUser = useSelector(({userData}) => userData.currentUser)
  console.log(currentUser)


  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    //  load user if user is logged in
    if(authToken){
      dispatch(loaduser(history))
    } 
    return ()=> null;
  }, [])

   if(!currentUser && localStorage.SIXELEVEN_TOKEN) {
     return <AppLoader />
   }
    

  return (
    <div className="App">
      <ToastContainer position="top-center" />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/events" component={Event} />
        <Route exact path="/get-involved" component={GetInvolved} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/career" component={Career} />
        <Route exact path="/view-posting" component={ViewListing} />
        <Route exact path="/posting-apply" component={Apply} />
        <Route exact path="/volunteer" component={Volunteer} />
        <Route exact path="/donation" component={Donation} />
        <Route exact path="/request-aid" component={RequestAid} />
        <Route exact path="/request-aid/category" component={Category} />
        <Route exact path="/request-aid/category/create" component={Conditional} />
        <ProtectedRoute exact path="/user/dashboard" component={Profile} />
        <Route path="/" component={Home} />
      </Switch>
    </div>
  );
}

export default App;
