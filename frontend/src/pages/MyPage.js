import MyPageTemplate from "../components/MyPage/MyPageTemplate";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/MyPage/Sidebar";
import Profile from "../components/MyPage/Profile";
import Notification from "../components/MyPage/Notification";
import Like from "../components/MyPage/Like";
import Signup from "../components/Login/Signup";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MyPage = () => {
  return (
    <Router>
      <NavBar />
      <MyPageTemplate>
        <Sidebar />
        <Route exact path="/api/mypage/profile" component={Profile} />
        <Route exact path="/api/mypage/notification" component={Notification} />
        <Route exact path="/api/mypage/like" component={Like} />
      </MyPageTemplate>
    </Router>
  );
};

export default MyPage;
