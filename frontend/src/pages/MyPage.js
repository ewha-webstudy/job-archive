import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import ProfileTemplate from "../components/Profile/ProfileTemplate";
import Sidebar from "../components/Profile/Sidebar";

const MyPage = () => (
  <>
    <NavBar />
    <ProfileTemplate>
      <Sidebar />
    </ProfileTemplate>
  </>
);

export default MyPage;
