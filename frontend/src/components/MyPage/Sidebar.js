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
    margin-top: 460px;
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

  font-size: 24px;
  background: white;
  color: black;
  border: none;

  margin-top: 15px;
  margin-left: auto;
`;

const Sidebar = () => {
  return (
    <SidebarBlock>
      <SidebarButton>프로필 관리</SidebarButton>
      <SidebarButton>디데이 알림</SidebarButton>
      <SidebarButton>저장 목록 관리</SidebarButton>
      <button class="outbutton">회원 탈퇴</button>
    </SidebarBlock>
  );
};

export default Sidebar;
