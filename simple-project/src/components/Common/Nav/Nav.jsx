import { StyledNav, NavLink } from "./Nav.styles";
import { useNavigate } from "react-router-dom";

const Nav = () => {

  const navi = useNavigate();
  
  return (
    <>
      <StyledNav>
        <NavLink onClick={() => navi("/")}>Home</NavLink>
        <NavLink onClick={() => navi("/chap01")}>Chap01</NavLink>
        <NavLink onClick={() => navi("/chap02")}>Chap02</NavLink>
        <NavLink onClick={() => navi("/chap03")}>Chap03</NavLink>
        <NavLink>오후실습</NavLink>
        <NavLink>내일실습</NavLink>
        <NavLink>지도보기</NavLink>
      </StyledNav>
    </>
  );
};

export default Nav;