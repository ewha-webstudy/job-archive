import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import API from "../../utils/api";

const Profile = ({ islogin }) => {
  const history = useHistory();
  const [member, setMember] = useState({
    name: "",
    born: "",
    email: "",
    id: "",
    psword: "",
    confirmPsword: "",
  });

  // 로그인 여부 확인 & 기존 데이터 불러오기
  useEffect(() => {
    if (!islogin) {
      alert("로그인 후 이용 가능합니다.");
      history.push("/member/auth");
    } else {
      API.get("/api/mypage/profile").then((res) => {
        setMember(res.data);
      });
    }
  }, []);

  // 입력한 값으로 변경
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  // 저장 버튼을 누르면 서버로 전송
  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/api/mypage/profile", member)
      .then((res) => {
        alert("저장되었습니다!");
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Toekn expired");
        }
        if (err.response.status === 412) {
          alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        }
      });
  };

  return (
    <ProfileForm
      value={member}
      onChange={handleChange}
      onClick={handleSubmit}
      disabled={true}
    />
  );
};

export default Profile;
