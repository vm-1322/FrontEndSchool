import styled from 'styled-components';

export const StyledCourses = styled.div`
  padding: 10px;
`;

export const StyledCoursesTitle = styled.h1``;

export const StyledCoursesList = styled.div`
  ${(props) => props.theme.media.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;
