import { NavLink } from "react-router-dom";
import styled from "styled-components";

const SidebarBlock = styled.div`
  width: 20%;
  height: 80%;

  margin-top: 7%;

  float: left;
  background-color: white;
  border-right: 2px solid #ef8d21;
  }

  .outbutton {
    &:hover {
        cursor: pointer;
      }
      
    margin-top: 150%;
    margin-left: 110px;
    
    background: white;
    color: darkgrey;
    font-size: 18px;
    border: none;
  }
`;

const SidebarButton = styled.button`
  &:hover {
    cursor: pointer;
    color: #ef8d21;
  }

  & + & {
    margin-top: 15px;
  }

  height: 10%;
  width: 100%;

  border: none;
  font-size: 24px;
  background: none;

  margin-top: 15px;
  margin-left: auto;
`;

const sidebarMenu = [
  { id: "1", title: "프로필 관리" },
  { id: "2", title: "디데이 알림" },
  { id: "3", title: "저장 목록 관리" },
];

const SidebarItem = ({ menu }) => {
  return <SidebarButton>{menu.title}</SidebarButton>;
};

const Sidebar = () => {
  return (
    <SidebarBlock>
      {sidebarMenu.map((menu) => {
        return (
          <NavLink to={"/mypage/" + menu.id}>
            <SidebarItem menu={menu} />
          </NavLink>
        );
      })}
      <button class="outbutton">회원 탈퇴</button>
    </SidebarBlock>
  );
};

export default Sidebar;
