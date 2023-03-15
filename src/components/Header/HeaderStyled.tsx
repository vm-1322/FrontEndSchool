import styled from 'styled-components';

export const StyledHeader = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: space-between;
  height: 80px;
  padding: 10px 20px;
  background: linear-gradient(rgb(227, 216, 206), rgb(255, 255, 255));
  text-transform: uppercase;
`;

export const StyledHeaderLogo = styled.div`
  width: 160px;
  height: 100%;

  & img {
    height: 100%;
  }
`;

export const StyledHeaderNav = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 20px 0;
`;

export const StyledHeaderNavItem = styled.div<{ isActive?: boolean }>`
  margin-right: 20px;
  font-family: 'Open Sans', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.4;
  color: ${(props) =>
    props.isActive ? props.theme.colors.secondary : props.theme.colors.primary};

  &:last-child {
    margin-right: 0;
  }
`;
