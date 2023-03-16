import styled from 'styled-components';

export const StyledCourse = styled.div`
  width: 370px;
  margin: 20px auto;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);

  ${(props) => props.theme.media.tablet} {
    width: 400px;
    min-height: 200px;
    margin: 20px 50px;
  }
`;

export const StyledCoursePictureVideo = styled.div`
  height: 250px;
`;

export const StyledCoursePicture = styled.div<{ src: string }>`
  height: 250px;
  background-image: url(${(props) => props.src});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

export const StyledCourseVideo = styled.div``;

export const StyledCourseInfo = styled.div`
  padding: 10px;
`;

export const StyledCourseTitle = styled.h3``;

export const StyledCourseRaitingLessons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const StyledCourseRaiting = styled.div`
  display: flex;
  flex-direction: row;
`;

export const StyledCourseRaitingStars = styled.div`
  margin-left: 10px;
`;

export const StyledCourseLessons = styled.div``;

export const StyledCourseSkills = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 15px;
`;

export const StyledCourseSkillsList = styled.div`
  margin-left: 15px;
`;

export const StyledCourseSkillsItem = styled.div``;
