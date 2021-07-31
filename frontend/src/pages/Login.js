import NavBar from "../components/NavBar/NavBar";
import Login from "../components/Login/Login";
import LoginTemplate from "../components/Login/LoginTemplate";
import OtherLogin from "../components/Login/OtherLogin";

const LoginPage = () => (
  <>
    <NavBar />
    <LoginTemplate form={<Login />} />
    {/* <OtherLogin /> */}
  </>
);

export default LoginPage;
