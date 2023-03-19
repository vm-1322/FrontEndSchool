import styled from 'styled-components';

export const StyledCourseDetails = styled.div`
  padding: 0 10px;
`;

export const StyledCourseDetailsTitleInfo = styled.div`
  width: 370px;
  margin: 10px auto;
  text-align: center;

  ${(props) => props.theme.media.tablet} {
    width: 900px;
  }
`;

export const StyledCourseDetailsTitle = styled.h2``;

export const StyledCourseDetailsInfo = styled.div``;

export const StyledCourseDetailsVideoPreview = styled.div`
  height: 300px;
  background: antiquewhite;
`;

export const StyledCourseDetailsLessonsTitle = styled.h3``;

export const StyledCourseDetailsLessonsList = styled.div`
  ${(props) => props.theme.media.tablet} {
    width: 700px;
  }
`;

export const StyledCourseDetailsLessonsListItem = styled.div<{
  isUnLocked?: boolean;
}>`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  color: ${(props) =>
    props.isUnLocked
      ? props.theme.colors.common.black
      : props.theme.colors.blocked};
`;
