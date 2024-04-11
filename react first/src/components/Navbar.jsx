
import styled from 'styled-components';

const NavbarContainer = styled.nav`
  background-color: white;
  color: black;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.a`
  color:black;
  text-decoration: none;
  font-size: 1.5rem;
`;



const Navbar = () => {
  return (
    <NavbarContainer>
      <Logo href="#">WELCOME</Logo>
    </NavbarContainer>
  );
};

export default Navbar;
