import { userActionTypes } from '../constants/userActionTypes';

const INIT_STATE = {
    token: localStorage.getItem('SIXELEVEN_TOKEN'),
    isLoading: true,
    currentUser: null,
    isAuthenticated: false,
    // bikereqloader: false,
    authError: {
        signUpError: '',
        signInError: '',
        signOutError: '',
        loadUserError: ''
    }
}

const userReducer = (state = INIT_STATE, action) => {
    switch (action.type) {
        case userActionTypes.SIGNUP_SUCCESS:
          return {
            ...state,
            isLoading: false
          };
        case userActionTypes.SIGNUP_FAIL:
          return {
            ...state,
            authError: {
              signUpError: action.payload
            }
          }
        case userActionTypes.SIGNIN_SUCCESS:
          return {
            ...state,
            isLoading: false,
            currentUser: action.payload,
            isAuthenticated: true,
          }
        case userActionTypes.SIGNIN_FAIL:
          return {
            ...state,
            isLoading: false,
            authError: {
              signInError: action.payload
            }
          }
        case userActionTypes.LOGOUT_FAIL:
          return {
            ...state,
            isLoading: false,
            authError: {
              signOutError: action.payload
            }
          }
        case userActionTypes.LOGOUT_SUCCESS:
          localStorage.removeItem('SIXELEVEN_TOKEN')
          return {
            ...state,
            isLoading: false,
            currentUser: null,
            isAuthenticated: false
          }
        case userActionTypes.LOADUSER_SUCCESS:
          return {
            ...state,
            isLoading: false,
            currentUser: action.payload,
            isAuthenticated: true
          }
        case userActionTypes.LOADUSER_FAIL:
          localStorage.removeItem('SIXELEVEN_TOKEN')
          return {
            ...state,
            isLoading: false,
            isAuthenticated: false,
            token: null,
            authError: {
              loadUserError: action.payload
            }
          }
        case userActionTypes.BIKEREQLOADER:
          return {
            ...state,
            bikereqloader: action.payload
          }
        default: 
           return state;
    }
};

export default userReducer;