import NavBar from "../components/NavBar/NavBar";
import Profile from "../components/Profile/Profile";
import ProfileTemplate from "../components/Profile/ProfileTemplate";

const MyPage = () => (
  <>
    <NavBar />
    <ProfileTemplate form={<Profile />} />
  </>
);

export default MyPage;
