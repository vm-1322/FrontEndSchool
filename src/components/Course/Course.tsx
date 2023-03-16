import ReactPlayer from 'react-player';

import Stars from '../Stars';

import {
  StyledCourse,
  StyledCoursePictureVideo,
  StyledCoursePicture,
  StyledCourseVideo,
  StyledCourseInfo,
  StyledCourseTitle,
  StyledCourseRaiting,
  StyledCourseRaitingLessons,
  StyledCourseRaitingStars,
  StyledCourseLessons,
  StyledCourseSkills,
  StyledCourseSkillsList,
  StyledCourseSkillsItem,
} from './CourseStyled';

import { ICourse } from '../../types';
import { useState } from 'react';

const Course: React.FC<ICourse> = ({
  title,
  lessonsCount,
  rating,
  skills = [],
  previewImageLink,
  courseVideoPreview = {},
}) => {
  const [isHovering, setIsHovering] = useState(false);

  const renderSkills = () => {
    return skills.map((item, index) => (
      <StyledCourseSkillsItem key={index}>{item}</StyledCourseSkillsItem>
    ));
  };

  return (
    <StyledCourse>
      <StyledCoursePictureVideo
        onMouseEnter={() => setIsHovering(false)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {isHovering ? (
          <StyledCourseVideo>
            <ReactPlayer
              url='https://wisey.app/videos/lack-of-motivation-how-to-overcome-it/preview/AppleHLS1/preview.m3u8/'
              playing
              loop
            />
          </StyledCourseVideo>
        ) : (
          <StyledCoursePicture src={`${previewImageLink}/cover.webp`} />
        )}
      </StyledCoursePictureVideo>
      <StyledCourseInfo>
        <StyledCourseTitle>{title}</StyledCourseTitle>
        <StyledCourseRaitingLessons>
          <StyledCourseRaiting>
            Rating: {rating}
            <StyledCourseRaitingStars>
              <Stars rating={rating} />
            </StyledCourseRaitingStars>
          </StyledCourseRaiting>
          <StyledCourseLessons>{lessonsCount} lessons</StyledCourseLessons>
        </StyledCourseRaitingLessons>
        {skills.length > 0 && (
          <StyledCourseSkills>
            Skills:{' '}
            <StyledCourseSkillsList>{renderSkills()}</StyledCourseSkillsList>
          </StyledCourseSkills>
        )}
      </StyledCourseInfo>
    </StyledCourse>
  );
};

export default Course;
