import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileForm from "./ProfileForm";
import API from "../../utils/api";

const Profile = () => {
  const history = useHistory();
  const [member, setMember] = useState({
    name: "",
    born: "",
    email: "",
    id: "",
    psword: "",
    confirmPsword: "",
  });

  //입력한 값으로 변경 (수정 중)
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  //저장 버튼을 누르면 서버로 전송
  //수정 중
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("member:", member);

    API.post("/api/mypage/profile", member)
      .then((res) => {
        alert("저장되었습니다!");
        console.log("RES: ", res);
        history.push("/");
      })
      .catch((err) => {
        console.log("ERR: ", err);

        // if (err.response.status === 401) {
        //   alert("Toekn expired");
        // }
        // if (err.response.status === 412) {
        //   alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
        // }
      });
  };

  return (
    <ProfileForm
      value={member}
      onChange={handleChange}
      onClick={handleSubmit}
    />
  );
};

export default Profile;
