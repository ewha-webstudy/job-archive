import { Route } from "react-router-dom";
import MyPageTemplate from "../components/MyPage/MyPageTemplate";
import NavBar from "../components/NavBar/NavBar";
import Sidebar from "../components/MyPage/Sidebar";
import Profile from "../components/MyPage/Profile";
import Notification from "../components/MyPage/Notification";

const MyPage = () => {
  return (
    <>
      <NavBar />
      <MyPageTemplate>
        <Sidebar />
        <Route path="/signup">
          <Profile />
        </Route>
        <Route path="/mypage/1">
          <Profile />
        </Route>
        <Route path="/mypage/2">
          <Notification />
        </Route>
        <Route path="/mypage/3"></Route>
      </MyPageTemplate>
    </>
  );
};

export default MyPage;
