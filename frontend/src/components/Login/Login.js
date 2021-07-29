const Login = () => (
  <div>
    <form>
      <input type="text" placeholder="ID" required />
      <input type="password" placeholder="PW" required />
      <input type="submit" value="Log In" />
    </form>
    <div>
      <button>Google 계정으로 로그인</button>
      <button>회원 가입</button>
    </div>
  </div>
);

export default Login;
