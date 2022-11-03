import React from 'react';
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLogo to="/">Founder</NavLogo>
        <Bars />

        <NavMenu>
          <NavLink to="/" activeStyle>
          About
          </NavLink>
          <NavLink to="/viewCart" activeStyle>
            Premier
          </NavLink>
          {/* <NavLink to="/mostpopular" activeStyle>
            
          </NavLink> */}
          <NavLink to="/login" activeStyle>
            Sign Up
          </NavLink>
          {/* <NavLink to="/login" activeStyle>
            In Temple
          </NavLink>
          <NavLink to="/login" activeStyle>
            In Void
          </NavLink>
          <NavLink to="/login" activeStyle>
            #BAYC
          </NavLink> */}
         
        </NavMenu>
      </Nav>
    </>
  );
};
export default Navbar;
