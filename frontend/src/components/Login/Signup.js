import { useState } from "react";
import { useHistory } from "react-router-dom";
import ProfileForm from "../MyPage/ProfileForm";
import API from "../../utils/api";

const Signup = () => {
  const history = useHistory();
  const [member, setMember] = useState({
    name: "",
    born: "",
    email: "",
    id: "",
    psword: "",
    confirmPsword: "",
  });

  //입력한 값으로 변경
  const handleChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  //저장 버튼을 누르면 서버로 전송
  const handleSubmit = (e) => {
    e.preventDefault();

    API.post("/api/member/create", member)
      .then((res) => {
        alert("환영합니다!");
        console.log("RES: ", res);
        history.push("/member/auth");
      })
      .catch((err) => {
        console.log("ERR: ", err);
        // if (err.response.status === 400) {
        //   alert("아이디를 입력해 주세요.");
        // }
        // if (err.response.status === 412) {
        //   alert("비밀번호 확인이 일치하지 않습니다.");
        // }
      });
  };

  return (
    <ProfileForm
      value={member}
      onChange={handleChange}
      onClick={handleSubmit}
      disabled={false}
    />
  );
};

export default Signup;
