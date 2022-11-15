import logo from "../../assets/logo.svg";
import Banner from "../Banner/Banner";
import { Button, Logo, NavStyle, TextInButton } from "./NavBarStyle";
import Navigation from "./Navigation";

const NavBar = () => {
  return (
    <>
      <NavStyle>
        <Logo src={logo} alt="logo"></Logo>
        <Navigation />

        <Button>
          <TextInButton> Connect wallet</TextInButton>
        </Button>
      </NavStyle>
      <Banner />
    </>
  );
};

export default NavBar;
