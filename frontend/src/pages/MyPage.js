import MyPageTemplate from "../components/MyPage/MyPageTemplate";
import Sidebar from "../components/MyPage/Sidebar";
import ProfileContainer from "../containers/MyPage/ProfileContainer";
import NotiContainer from "../containers/MyPage/NotiContainer";
import Like from "../components/MyPage/Like";
import { BrowserRouter as Router, Route } from "react-router-dom";

const MyPage = () => {
  return (
    <MyPageTemplate>
      <Sidebar />
      <Route exact path="/mypage/profile" component={ProfileContainer} />
      <Route exact path="/mypage/notification" component={NotiContainer} />
      <Route exact path="/mypage/like" component={Like} />
    </MyPageTemplate>
  );
};

export default MyPage;
