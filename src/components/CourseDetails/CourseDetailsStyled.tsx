import styled from 'styled-components';

export const StyledCourseDetails = styled.div`
  display: flex;
  flex-direction: column;

  ${(props) => props.theme.media.tablet} {
    flex-direction: row;
  }
`;

export const StyledCourseDetailsTitleInfoVideo = styled.div`
  width: 370px;
  margin: 10px auto;
  text-align: center;

  ${(props) => props.theme.media.tablet} {
    width: 70%;
  }

  ${(props) => props.theme.media.desktopLarge} {
    width: 60%;
  }
`;

export const StyledCourseDetailsTitleInfo = styled.div`
  height: 100%;

  ${(props) => props.theme.media.tablet} {
    height: 100px;
  }
`;

export const StyledCourseDetailsTitle = styled.h2``;

export const StyledCourseDetailsVideo = styled.video`
  width: 370px;
  height: 200px;

  ${(props) => props.theme.media.tablet} {
    width: 670px;
    height: 350px;
  }

  ${(props) => props.theme.media.desktopLarge} {
    width: 1000px;
    height: 600px;
  }
`;

export const StyledCourseDetailsInfo = styled.div``;

export const StyledCourseDetailsLessonsList = styled.div`
  width: 370px;
  margin: 10px auto;

  ${(props) => props.theme.media.tablet} {
    width: 30%;
    margin: 145px 10px 10px;
  }

  ${(props) => props.theme.media.desktopLarge} {
    width: 40%;
  }
`;

export const StyledCourseDetailsLessonInfo = styled.div`
  margin-top: 20px;
  font-weight: 700;
`;

export const StyledCourseDetailsPlaybackSpeed = styled.div``;

export const StyledCourseDetailsLessonsListItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  min-height: 50px;
  margin-bottom: 10px;
  padding: 15px 10px;
  background: antiquewhite;
  cursor: pointer;
`;

export const StyledCourseDetailsLessonsListItemNumber = styled.div`
  width: 13%;
`;

export const StyledCourseDetailsLessonsListItemIcon = styled.div`
  width: 13%;
  height: 20px;

  & > svg {
    width: 30px;
    height: 100%;
  }
`;

export const StyledCourseDetailsLessonsListItemTitle = styled.div`
  width: 70%;
`;

export const StyledCourseDetailsLessonsListItemTime = styled.div`
  width: 20%;
  text-align: right;
`;
