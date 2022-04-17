import { userActionTypes } from '../constants/userActionTypes'
import baseUrl from '../../config';
import axios from 'axios';
// import { toast } from 'react-toastify'

// export const signup = (formData, history) => 
//    async(dispatch) => {
//      try {
//            const { data } = await axios.post(baseUrl + '/auth/sign-up', formData);
//            console.log(data)
//            dispatch({ type: userActionTypes.SIGNUP_SUCCESS, data });
           
//            history.push('/login');
//          } catch (error) {
//            console.log(error?.response?.data?.message)
//          }
// }

// export const signin = (formData, history) => 
//    async(dispatch) => {
//      try {
//         const { data } = await axios.post(`${baseUrl}/auth/admin/login`, formData);
//         console.log(data, data.token)
//         localStorage.setItem("WEHAUL_ADMIN_TOKEN", data.token);
//         dispatch({ type: userActionTypes.SIGNIN_SUCCESS, payload: data });
//         window.location.reload();
//      } catch (error) {
//         console.log(error?.response?.data?.message)
//         toast.error(error?.response?.data?.message, {
//            position: toast.POSITION.TOP_CENTER
//         })
//      }
// }

// // export async function getAllReports() {
// //    if(vehicleType) {
// //       switch (key) {
// //          case value:
            
// //             break;
      
// //          default:
// //             break;
// //       }
// //    }
// // }

// // let socket;
// // socket.on("connected", getAllReports)

// export const logout = (history) => async(dispatch) => {
//    try {
//       localStorage.removeItem('WEHAUL_CUSTOMER_TOKEN');
//       await dispatch({ type: userActionTypes.LOGOUT_SUCCESS })
//    } catch (error) {
//       if(error.response){
//          console.log(error?.response?.data)
//       }
//    }
// }

export const loaduser = (history, id) => async dispatch => {
   try {
       const id = localStorage.SIXELEVEN_ID
      const config = {
         headers: {
            "Authorization": `Bearer ${localStorage.SIXELEVEN_TOKEN}`
            }
      }
      if(localStorage.SIXELEVEN_TOKEN){
         const {data} = await axios.get(`${baseUrl}/user/${id}`, config);
            console.log('line 55b', data)
            dispatch({type: userActionTypes.LOADUSER_SUCCESS, payload: data.result});
      }else{
         // throw Error('token is absent')
         localStorage.removeItem('SIXELEVEN_TOKEN')
         window.location.href = '/'
      }
       
   } catch (error) {
      localStorage.removeItem('SIXELEVEN_TOKEN')
      window.location.href = '/'
      console.log('heloooooo')
      if(error.response){
         console.log(error.response.data)
         localStorage.removeItem('SIXELEVEN_TOKEN')
         window.location.href = '/'
      }
   }
}
   