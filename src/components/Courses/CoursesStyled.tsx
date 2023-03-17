import styled from 'styled-components';

export const StyledCourses = styled.div`
  padding: 10px;
`;

export const StyledCoursesTitle = styled.h1``;

export const StyledCoursesList = styled.div`
  width: 370px;
  margin: 0 auto;

  ${(props) => props.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
    width: 1000px;
  }

  ${(props) => props.theme.media.desktop} {
    width: 1500px;
  }
`;
