import MyPageTemplate from "../components/MyPage/MyPageTemplate";
import Sidebar from "../components/MyPage/Sidebar";
import Signup from "../components/Login/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

const SignupPage = () => {
  return (
    <MyPageTemplate>
      <Sidebar />
      <Route exact path="/member/create" component={Signup} />
    </MyPageTemplate>
  );
};

export default SignupPage;
