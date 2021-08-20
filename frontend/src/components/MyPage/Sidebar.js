import { NavLink } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Withdrawal from "./Withdrawal";
import { Box, Button, Grommet, Heading, Layer } from "grommet";
import { MdClose } from "react-icons/md";

const SidebarBlock = styled.div`
  width: 20%;
  height: 80%;

  margin-top: 7%;

  float: left;
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

const CloseModalButton = styled(MdClose)`
  cursor: pointer;

  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

const sidebarMenu = [
  { id: "1", title: "프로필 관리" },
  { id: "2", title: "디데이 알림" },
  { id: "3", title: "저장 목록 관리" },
];

const SidebarItem = ({ menu }) => {
  return <SidebarButton>{menu.title}</SidebarButton>;
};

const theme = {
  global: {
    colors: {
      brand: "white",
      focus: "none",
    },
  },
};

export const CornerLayer = () => {
  const [open, setOpen] = useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);
  const [showModal, setShowModal] = useState(true);
  return (
    <>
      <button class="outbutton" onClick={onOpen}>
        회원 탈퇴
      </button>
      <Grommet theme={theme}>
        {open && (
          <Layer position="center" onClickOutside={onClose}>
            <CloseModalButton onClick={onClose} />
            <Withdrawal showModal={showModal} setShowModal={setShowModal} />
          </Layer>
        )}
      </Grommet>
    </>
  );
};

const Sidebar = () => {
  return (
    <>
      {/* <Withdrawal showModal={showModal} setShowModal={setShowModal} /> */}
      <SidebarBlock>
        {sidebarMenu.map((menu) => {
          return (
            <NavLink to={"/mypage/" + menu.id}>
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}

        {/* <button class="outbutton" onClick={CornerLayer}>
          회원 탈퇴
        </button> */}
        <CornerLayer />
      </SidebarBlock>
    </>
  );
};

export default Sidebar;
