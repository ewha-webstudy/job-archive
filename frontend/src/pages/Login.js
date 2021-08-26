import NavBar from "../components/NavBar/NavBar";
import Login from "../components/Login/Login";
import LoginTemplate from "../components/Login/LoginTemplate";
import LoginContainer from "../containers/LoginContainer";
const LoginPage = () => (
  <>
    <NavBar />
    <LoginTemplate form={<LoginContainer />} />
  </>
);

export default LoginPage;
