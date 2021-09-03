import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import styled from "styled-components";
import Withdrawal from "./Withdrawal";
import { Box, Button, Grommet, Layer } from "grommet";
import { FormClose } from "grommet-icons";

const Modal = () => {
  //모달 창 띄우기, 닫기
  const [open, setOpen] = useState();
  const onOpen = () => setOpen(true);
  const onClose = () => setOpen(undefined);

  return (
    <>
      <button className="outbutton" onClick={onOpen}>
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

const theme = {
  global: {
    colors: {
      brand: "white",
      focus: "none",
    },
  },
};

const Sidebar = () => {
  // 현재 위치를 저장
  const pathName = useLocation().pathname;

  // 사이드바 메뉴에 URL 연결
  const SidebarMenu = () => {
    return (
      <>
        {sidebarMenu.map((menu) => {
          return (
            <NavLink key={menu.id} to={"/mypage/" + menu.id}>
              <SidebarButton key={menu.id}>{menu.title}</SidebarButton>
            </NavLink>
          );
        })}
        <Modal />
      </>
    );
  };

  // 회원가입 페이지일 때
  const RegisterMenu = () => {
    return (
      <NavLink to={"/member/create"}>
        <SidebarButton>회원 가입</SidebarButton>
      </NavLink>
    );
  };

  return (
    // 현재 위치가 "/member/create"이라면 회원가입을, 그렇지 않으면 사이드바 메뉴를 보여줌
    <SidebarBlock>
      {pathName === "/member/create" ? <RegisterMenu /> : <SidebarMenu />}
    </SidebarBlock>
  );
};

const SidebarBlock = styled.div`
  width: 20%;
  height: 80%;
  margin-top: 7%;
  float: left;
  border-right: 2px solid #ef8d21;
  text-align: center;

  .outbutton {
    &:hover {
      cursor: pointer;
    }
    margin-top: 150%;
    background: white;
    color: darkgrey;
    font-size: 1rem;
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
  font-size: 1.2rem;

  background: none;
  margin-top: 0.8rem;
`;

export default Sidebar;
