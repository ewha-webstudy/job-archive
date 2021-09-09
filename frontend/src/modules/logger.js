const LOG_IN = "logger/LOG_IN";
const LOG_OUT = "logger/LOG_OUT";


export const login = token => ({ type: LOG_IN, token });
export const logout = () => ({ type: LOG_OUT });

const initialState = {
  islogin: false,
  token: ""
};


export default function logger(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        islogin: true,
        token: action.token 
      };

    case LOG_OUT:
      localStorage.clear();
      return {
        ...state,
        islogin: false,
        token: "" 
      };

    default:
      return state;
  }
}
