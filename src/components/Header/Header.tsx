import { Link, useLocation } from 'react-router-dom';

import {
  StyledHeader,
  StyledHeaderLogo,
  StyledHeaderNav,
  StyledHeaderNavItem,
} from './HeaderStyled';

const Header: React.FC = () => {
  const location = useLocation();

  return (
    <StyledHeader>
      <StyledHeaderLogo>
        <a href='https://www.academy.gen.tech/'>
          <img
            src='https://static.wixstatic.com/media/676f5c_f9dd8bb47b2b4409ae131990a4c0f919~mv2.png/v1/fill/w_194,h_73,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20GA.png'
            alt='Genesis Academy'
          />
        </a>
      </StyledHeaderLogo>
      <StyledHeaderNav>
        <StyledHeaderNavItem isActive={location.pathname === '/'}>
          <Link to='/'>Courses</Link>
        </StyledHeaderNavItem>
        <StyledHeaderNavItem isActive={location.pathname === '/about-us'}>
          <Link to='/about-us'>About us</Link>
        </StyledHeaderNavItem>
      </StyledHeaderNav>
    </StyledHeader>
  );
};

export default Header;
