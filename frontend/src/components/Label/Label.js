import Dropdown from "../Dropdown/Dropdown";
import { useState } from "react";
import "../../style/main.css";

/* 
UI만 짠 상태
- custom hooks
- map 배열 렌더링
- 객체 비구조화
*/

function LabelList({ label }) {
  return (
    <div>
      <b>{label.name}</b> <span>({label.tag})</span>
    </div>
  );
}

export default function Label() {
  const labelArr = [
    { id: 1, name: "경력", tag: ["신입", "경력", "경력무관"] },
    {
      id: 2,
      name: "급여",
      tag: ["1000", "2000~3000", "5000~6000", "8000이상"]
    },
    {
      id: 3,
      name: "직무",
      tag: ["프론트", "웹퍼블리싱", "ai", "백엔드", "서버"]
    },
    { id: 4, name: "학력", tag: ["대졸", "석/박사 이상", "고졸", "학력무관"] },
    { id: 5, name: "지역", tag: ["서울", "경기도", "충청도", "인천"] }
  ];
  const [selected1, setSelected1] = useState(labelArr[0].name);
  const [selected2, setSelected2] = useState(labelArr[1].name);
  const [selected3, setSelected3] = useState(labelArr[2].name);
  const [selected4, setSelected4] = useState(labelArr[3].name);
  const [selected5, setSelected5] = useState(labelArr[4].name);
  return (
    <div className="label">
      {/*
      <div>
        {labelArr.map(
          label => (
            (<Dropdown selected={selected} setSelected={setSelected} />),
            (<LabelList label={label} />)
          )
        )}
          
      </div>
      */}
      <span>
        <Dropdown selected={selected1} setSelected={setSelected1} />
      </span>
      <span>
        <Dropdown selected={selected2} setSelected={setSelected2} />
      </span>
      <span>
        <Dropdown selected={selected3} setSelected={setSelected3} />
      </span>
      <span>
        <Dropdown selected={selected4} setSelected={setSelected4} />
      </span>
      <span>
        <Dropdown selected={selected5} setSelected={setSelected5} />
      </span>
    </div>
  );
}
