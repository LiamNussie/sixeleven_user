import {Redirect, Route} from 'react-router-dom';
import { useSelector} from 'react-redux';


const ProtectedRoute = ({component: Component, ...restProp})=> {

  const currentUser = useSelector(({userData})=> userData.currentUser)
  return (
    <Route
    {...restProp}
    render={()=> currentUser ? <Component/> : <Redirect to="/"/>}
    />
  )
}

export default ProtectedRoute;