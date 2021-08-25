import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Withdrawal from "./Withdrawal";
import { Box, Button, Grommet, Layer } from "grommet";
import { MdClose } from "react-icons/md";
import { FormClose } from "grommet-icons";

const Modal = () => {
  //모달 창 띄우기, 닫기
  const [open, setOpen] = useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <>
      <button class="outbutton" onClick={onOpen}>
        회원 탈퇴
      </button>
      <Grommet theme={theme}>
        {open && (
          <Layer position="center" onClickOutside={onClose} onEsc={onClose}>
            <Box
              pad="medium"
              gap="small"
              width={{ min: "medium" }}
              height={{ min: "medium" }}
              fill
            >
              <Button alignSelf="end" icon={<FormClose />} onClick={onClose} />
              <Withdrawal />
            </Box>
          </Layer>
        )}
      </Grommet>
    </>
  );
};

const sidebarMenu = [
  { id: "profile", title: "프로필 관리" },
  { id: "notification", title: "디데이 알림" },
  { id: "like", title: "저장 목록 관리" },
];

const SidebarItem = ({ menu, isActive }) => {
  return isActive === true ? (
    <SidebarButton className="sidebar-item active">{menu.title}</SidebarButton>
  ) : (
    <SidebarButton>{menu.title}</SidebarButton>
  );
};

const theme = {
  global: {
    colors: {
      brand: "white",
      focus: "none",
    },
  },
};

const Sidebar = () => {
  const pathName = useLocation().pathname;

  const SidebarMenu = () => {
    return (
      <>
        {sidebarMenu.map((menu) => {
          return (
            <NavLink to={"/mypage/" + menu.id}>
              <SidebarItem menu={menu} />
            </NavLink>
          );
        })}
        <Modal />
      </>
    );
  };

  const RegisterMenu = () => {
    return (
      <NavLink to={"/signup"}>
        <SidebarButton>회원 가입</SidebarButton>
      </NavLink>
    );
  };

  return (
    <SidebarBlock>
      {pathName === "/signup" ? <RegisterMenu /> : <SidebarMenu />}
    </SidebarBlock>
  );
};

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

  .active & {
    color: #ef8d21;
  }

  height: 10%;
  width: 100%;

  border: none;
  font-size: 24px;

  background: none;
  margin-top: 15px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

export default Sidebar;
