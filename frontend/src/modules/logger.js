// 액션 타입 만들기
const LOG_IN = "logger/LOG_IN";
const LOG_OUT = "logger/LOG_OUT";

// 액션 생성함수 만들기
export const login = token => ({ type: LOG_IN, token });
export const logout = () => ({ type: LOG_OUT });

// 초기 상태 선언
const initialState = {
  islogin: false,
  token: ""
};

// 리듀서 선언
export default function logger(state = initialState, action) {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        islogin: true,
        token: action.token // TODO: 토큰 저장 잘 되는지 확인하기
      };

    case LOG_OUT:
      return {
        ...state,
        islogin: false,
        token: "" // TODO: 토큰 상태 변경하는지 확인하기
      };
    default:
      return state;
  }
}
