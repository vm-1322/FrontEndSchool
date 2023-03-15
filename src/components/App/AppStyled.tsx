import styled from 'styled-components';

export const StyledApp = styled.div`
  height: 200px;
  width: 300px;
  color: ${(props) => props.theme.colors.common.white};
  background: ${(props) => props.theme.colors.primary};
`;
