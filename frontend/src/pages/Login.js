import NavBar from "../components/NavBar/NavBar";
import Login from "../components/Login/Login";
import LoginTemplate from "../components/Login/LoginTemplate";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const LoginPage = () => (
  <Router>
    <NavBar />
    <Route path="/login">
      <LoginTemplate form={<Login />} />
    </Route>
  </Router>
);

export default LoginPage;
