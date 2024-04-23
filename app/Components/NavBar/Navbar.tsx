import React from 'react';
import styled from 'styled-components';
import { home } from "../../utils/icons";

const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #333;
  color: #fff;
`;

const NavbarIcon = styled.div`
  margin-right: 20px;
`;

const NavbarLinks = styled.div`
  display: flex;
`;

const NavbarLink = styled.a`
  text-decoration: none;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  margin-right: 20px;
  padding: 5px 10px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 5px;
  }
`;

const links = [
  { text: 'Home', url: '/landingPage' },
  { text: 'About Us', url: '/about' },
  { text: 'Sign In', url: '/signin' },
];

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarIcon>
        {home}
      </NavbarIcon>
      <NavbarLinks>
        {links.map((link, index) => (
          <NavbarLink key={index} href={link.url}>{link.text}</NavbarLink>
        ))}
      </NavbarLinks>
    </NavbarContainer>
  );
};

export default Navbar;
