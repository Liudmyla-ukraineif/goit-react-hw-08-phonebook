import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
  padding: 0 16px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  border-bottom: 3px solid #e3e3e3;
  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 20px;
  border-radius: 4px;
  font-family:sans-serif;
  text-transform: capitalize;
  text-decoration: none;
  color: black;
  font-weight: 500;
  &.active {
    color: #E91E63;
    text-decoration: underline;
    text-decoration-color: #E91E63;
  }
`;