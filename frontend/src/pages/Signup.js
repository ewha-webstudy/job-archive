import MyPageTemplate from "../components/MyPage/MyPageTemplate";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/MyPage/Sidebar";
import Signup from "../components/Login/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

const SignupPage = () => {
  return (
    <Router>
      <NavBar />
      <MyPageTemplate>
        <Sidebar />
        <Route exact path="/member/create" component={Signup} />
      </MyPageTemplate>
    </Router>
  );
};

export default SignupPage;
