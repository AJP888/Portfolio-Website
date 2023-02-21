import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link className="link" to="/aboutus">
            1. About Us
          </Link>
        </li>
        <li>
          <Link className="link" to="/work">
            2. Our Work
          </Link>
        </li>
        <li>
          <Link className="link" to="/contact">
            3. Contact Us
          </Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 10rem;
  background: #282828;

  a {
    color: white;
    text-decoration: none; // text decoration gets rid of the lines.
  }

  ul {
    display: flex; // display flex puts the data into a line. / instead of being horizontal
    list-style: none;
  }
  h1 {
    font-size: 1.5rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  #logo {
    font-size: 1.8rem;
  }

  li {
    padding-left: 10rem;
    position: relative; // spaces out the text
  }
`;

export default Nav;
