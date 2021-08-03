import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/MyPage/Profile";
import MyPageTemplate from "../components/MyPage/MyPageTemplate";
import Sidebar from "../components/MyPage/Sidebar";
import Notification from "../components/MyPage/Notification";

const MyPage = () => (
  <>
    <NavBar />
    <MyPageTemplate>
      <Sidebar />
      {/* <Profile /> */}
      <Notification />
    </MyPageTemplate>
  </>
);

export default MyPage;
