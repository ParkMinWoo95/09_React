import Nav from "../Nav/Nav"
import { StyledHeader } from "./Header.styles";

const Header = () => {
    return (
      <>
        <StyledHeader>오늘도 리액트를 알차게 배워볼까요?</StyledHeader>
        <br />
        <Nav />
      </>
    );
};

export default Header;