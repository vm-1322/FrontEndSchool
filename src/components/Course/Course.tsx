import { useState } from 'react';

import Hls from 'hls.js';

import Stars from '../Stars';

import {
  StyledCourse,
  StyledCoursePictureVideo,
  StyledCoursePicture,
  StyledCourseVideo,
  StyledCourseInfo,
  StyledCourseTitle,
  StyledCourseRaitingLessons,
  StyledCourseRaiting,
  StyledCourseRaitingStars,
  StyledCourseLessons,
  StyledCourseSkills,
  StyledCourseSkillsList,
  StyledCourseSkillsItem,
  StyledCourseView,
} from './CourseStyled';

import { ICourse } from '../../types';

interface ICourseExt extends ICourse {
  onClickCourse: (courseId: string) => void;
}

const Course: React.FC<ICourseExt> = ({
  id,
  title,
  lessonsCount,
  rating,
  skills = [],
  previewImageLink,
  courseVideoPreview,
  onClickCourse,
}) => {
  const [isHovering, setIsHovering] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<HTMLVideoElement>();

  const playVideo = async () => {
    if (currentVideo) {
      currentVideo.currentTime = Number(
        sessionStorage.getItem(`paramsVideo-time ${id}`)
      );

      await currentVideo.play();
    }
  };

  if (isHovering) {
    const videoId = sessionStorage.getItem('paramsVideo-videoId');

    if (!currentVideo || currentVideo.id !== videoId) {
      const video = document.getElementById(id) as HTMLVideoElement;

      setCurrentVideo(video);
      sessionStorage.setItem('paramsVideo-videoId', video.id);
    }

    if (Hls.isSupported()) {
      const newHls = new Hls();
      newHls.loadSource(courseVideoPreview.link);
      newHls.attachMedia(currentVideo as HTMLVideoElement);
    }

    if (currentVideo && currentVideo.paused) {
      playVideo();
    }
  }

  if (!isHovering && currentVideo && !currentVideo.paused) {
    currentVideo.pause();
    sessionStorage.setItem(
      `paramsVideo-time ${id}`,
      currentVideo.currentTime.toString()
    );
  }

  const renderSkills = () => {
    return skills.map((item, index) => (
      <StyledCourseSkillsItem key={index}>{item}</StyledCourseSkillsItem>
    ));
  };

  return (
    <StyledCourse>
      <StyledCoursePictureVideo
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <StyledCoursePicture
          src={`${previewImageLink}/cover.webp`}
          isHovering={isHovering}
        />
        <StyledCourseVideo id={id} isHovering={isHovering} loop muted />
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
      <StyledCourseView onClick={() => onClickCourse(id)}>
        View Details
      </StyledCourseView>
    </StyledCourse>
  );
};

export default Course;
