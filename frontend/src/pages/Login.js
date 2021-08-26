import NavBar from "../components/NavBar/NavBar";
import LoginTemplate from "../components/Login/LoginTemplate";
import LoginContainer from "../containers/LoginContainer";
const LoginPage = () => (
  <>
    <NavBar />
    <LoginTemplate form={<LoginContainer />} />
  </>
);

export default LoginPage;
