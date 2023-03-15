import styled from 'styled-components';

export const AboutUsStyled = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  justify-content: space-around;
  align-items: center;
  margin-top: 50px;
  text-align: center;

  ${(props) => props.theme.media.tablet} {
    flex-direction: row;
  }
`;

export const AboutUsStyledInfo = styled.div`
  width: 300px;
  height: 300px;
  font-size: 64px;

  & :first-child {
    color: ${(props) => props.theme.colors.textInfo};
  }

  & :last-child {
    color: ${(props) => props.theme.colors.textInfo};
  }
`;

export const AboutUsStyledVideo = styled.div`
  width: 300px;
  height: 300px;
`;
