import React from 'react';
import { FaBars } from 'react-icons/fa';

import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink
} from './styles';

const Navbar = ({ toggle }) => {
  return (
    <React.Fragment>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            dolla
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about" smooth duration={500} spy exact="true" offset={-80}>About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="discover" smooth duration={500} spy exact="true" offset={-80}>Discover</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="services" smooth duration={500} spy exact="true" offset={-80}>Services</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </React.Fragment>
  )
}

export default Navbar;