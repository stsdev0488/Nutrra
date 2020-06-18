import ApiHandler from '../../services/apis';

export const AUTH_LOGIN_REQUEST = 'AUTH_LOGIN_REQUEST';
export const AUTH_LOGIN_SUCCESS = 'AUTH_LOGIN_SUCCESS';
export const AUTH_LOGIN_ERROR = 'AUTH_LOGIN_ERROR';
export const AUTH_REGISTER_REQUEST = 'AUTH_REGISTER_REQUEST';
export const AUTH_REGISTER_SUCCESS = 'AUTH_REGISTER_SUCCESS';
export const AUTH_REGISTER_ERROR = 'AUTH_REGISTER_ERROR';

/* Login */
const loginRequest = () => ({
  type: AUTH_LOGIN_REQUEST,
});

const loginSuccess = (payload) => ({
  type: AUTH_LOGIN_SUCCESS,
  payload,
});

const loginError = (payload) => ({
  type: AUTH_LOGIN_ERROR,
  payload,
});

export const login = (data) => (dispatch) => {
  dispatch(loginRequest());
  ApiHandler.auth
    .login(data)
    .then(({ data }) => dispatch(loginSuccess(data)))
    .catch((error) => dispatch(loginError(error.response.data.errors[0])));
};

/* Register */
const registerRequest = () => ({
  type: AUTH_REGISTER_REQUEST,
});

const registerSuccess = (payload) => ({
  type: AUTH_REGISTER_SUCCESS,
  payload,
});

const registerError = (payload) => ({
  type: AUTH_REGISTER_ERROR,
  payload,
});

export const register = (data) => (dispatch) => {
  dispatch(registerRequest());
  ApiHandler.auth
    .register(data)
    .then(({ data }) => dispatch(registerSuccess(data)))
    .catch((error) => dispatch(registerError(error.response.data.errors[0])));
};
