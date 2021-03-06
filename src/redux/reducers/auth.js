import {
  AUTH_LOGIN_REQUEST,
  AUTH_LOGIN_SUCCESS,
  AUTH_LOGIN_ERROR,
  AUTH_REGISTER_REQUEST,
  AUTH_REGISTER_SUCCESS,
  AUTH_REGISTER_ERROR,
} from '../actions/auth';

const initialState = {
  loading: false,
  error: null,
  success: false,
  user: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        user: action.payload,
      };
    case AUTH_LOGIN_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    case AUTH_REGISTER_REQUEST:
      return {
        ...state,
        loading: true,
        success: false,
        error: null,
      };
    case AUTH_REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        success: true,
        error: null,
        user: action.payload,
      };
    case AUTH_REGISTER_ERROR:
      return {
        ...state,
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
