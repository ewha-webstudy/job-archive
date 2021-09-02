import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import API from "../../utils/api";

/* 수정 중 */
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

  // 로그인 여부 확인
  useEffect(() => {
    if (!islogin) {
      alert("로그인 후 이용 가능합니다.");
      history.push("/member/auth");
    } else {
      API.get("api/mypage/profile")
        .then((res) => {
          console.log(res.data);
          setMember(res.data);
          console.log(member);
        })
        .catch((err) => {
          console.log("ERR: ", err);
        });
    }
  }, [islogin]);

  // 입력한 값으로 변경
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  // 저장 버튼을 누르면 서버로 전송
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("member:", member);

    API.post("/api/mypage/profile", member)
      .then((res) => {
        alert("저장되었습니다!");
        console.log("RES: ", res);
      })
      .catch((err) => {
        console.log("ERR: ", err);
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
