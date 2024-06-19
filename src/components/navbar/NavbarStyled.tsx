import styled from "styled-components";

const NavbarStyled = styled.header`
  width: 100%;
  height: 10vh;
  background-color: ${(props) => props.theme.colors.primary};
  color: #fff !important;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 10px;
  font-size: 1.2rem;
`;

export default NavbarStyled;
