import NavBar from "../components/NavBar/NavBar";
import Login from "../components/Login/Login";
import LoginTemplate from "../components/Login/LoginTemplate";
<<<<<<< HEAD
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

=======
import LoginContainer from "../containers/LoginContainer";
>>>>>>> 27a44cc92aae759ce77b8de6c684e0072beb6de9
const LoginPage = () => (
  <Router>
    <NavBar />
<<<<<<< HEAD
    <Route path="/login">
      <LoginTemplate form={<Login />} />
    </Route>
  </Router>
=======
    <LoginTemplate form={<LoginContainer />} />
  </>
>>>>>>> 27a44cc92aae759ce77b8de6c684e0072beb6de9
);

export default LoginPage;
