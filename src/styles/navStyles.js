import styled from "styled-components";
import {Link} from "gatsby";

export const NavWrapper = styled.div`
  display: flex;
  height: 70px;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5vw;
  >div:last-of-type {
   display: flex;
    p {
      margin: 0 10px;
    }
  }
  * {
    transition: 300ms ease-in-out;
  }
`;

export const NavLink = styled(Link)`
    margin: 0 10px;
`;