import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import Hls from 'hls.js';

import Lock from '../../icons/lock';

import { ICourse, ILesson } from '../../types';

import { getCourse } from '../../api/courses';

import {
  StyledCourseDetails,
  StyledCourseDetailsTitleInfoVideo,
  StyledCourseDetailsTitleInfo,
  StyledCourseDetailsTitle,
  StyledCourseDetailsVideo,
  StyledCourseDetailsInfo,
  StyledCourseDetailsLessonInfo,
  StyledCourseDetailsLessonsList,
  StyledCourseDetailsLessonsListItem,
  StyledCourseDetailsLessonsListItemNumber,
  StyledCourseDetailsLessonsListItemIcon,
  StyledCourseDetailsLessonsListItemTitle,
  StyledCourseDetailsLessonsListItemTime,
} from './CourseDetailsStyled';

const CourseDetails: React.FC = () => {
  const [course, setCourse] = useState<ICourse>();
  const [lesson, setLesson] = useState<ILesson>();
  const { courseId } = useParams();

  const courseDetailsVideo: HTMLVideoElement = document.getElementById(
    'course-details-video'
  ) as HTMLVideoElement;

  if (courseDetailsVideo)
    courseDetailsVideo.onpause = () =>
      sessionStorage.setItem(
        `paramsVideo-time-lesson ${lesson?.id}`,
        courseDetailsVideo.currentTime.toString()
      );

  const playVideo = async () => {
    if (courseDetailsVideo) {
      courseDetailsVideo.currentTime = Number(
        sessionStorage.getItem(`paramsVideo-time-lesson ${lesson?.id}`)
      );

      await courseDetailsVideo.play();
    }
  };

  if (lesson) {
    if (Hls.isSupported()) {
      const newHls = new Hls();
      newHls.loadSource(lesson.link);
      newHls.attachMedia(courseDetailsVideo);
    }

    if (courseDetailsVideo && courseDetailsVideo.paused) {
      playVideo();
    }
  }

  const handlerClickLesson = (curId: string) => {
    const founded = course?.lessons?.find((el) => el.id === curId);

    if (founded && founded.status !== 'locked') setLesson(founded);
  };

  const renderLessonsList = () => {
    return course?.lessons?.map((item, index) => {
      return (
        <StyledCourseDetailsLessonsListItem
          key={item.id}
          onClick={() => handlerClickLesson(item.id)}
        >
          {item.status === 'locked' ? (
            <StyledCourseDetailsLessonsListItemIcon>
              <Lock />
            </StyledCourseDetailsLessonsListItemIcon>
          ) : (
            <StyledCourseDetailsLessonsListItemNumber>
              № {item.order}
            </StyledCourseDetailsLessonsListItemNumber>
          )}
          <StyledCourseDetailsLessonsListItemTitle>
            {item.title}
          </StyledCourseDetailsLessonsListItemTitle>
          <StyledCourseDetailsLessonsListItemTime>
            {item.duration}
          </StyledCourseDetailsLessonsListItemTime>
        </StyledCourseDetailsLessonsListItem>
      );
    });
  };

  const retrieveData = async () => {
    const curCourse = await getCourse(String(courseId));

    curCourse.lessons.sort((i1: ILesson, i2: ILesson) => i1.order - i2.order);

    setCourse(curCourse);

    try {
      setLesson(curCourse.lessons[0]);
    } catch (error) {}
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <StyledCourseDetails>
      <StyledCourseDetailsTitleInfoVideo>
        <StyledCourseDetailsTitleInfo>
          <StyledCourseDetailsTitle>{course?.title}</StyledCourseDetailsTitle>
          <StyledCourseDetailsInfo>
            {course?.description}
          </StyledCourseDetailsInfo>
        </StyledCourseDetailsTitleInfo>
        <StyledCourseDetailsVideo id='course-details-video' controls />
        <StyledCourseDetailsLessonInfo>
          {`Lesson ${lesson?.order} - ${lesson?.title}`}
        </StyledCourseDetailsLessonInfo>
      </StyledCourseDetailsTitleInfoVideo>
      <StyledCourseDetailsLessonsList>
        {renderLessonsList()}
      </StyledCourseDetailsLessonsList>
    </StyledCourseDetails>
  );
};

export default CourseDetails;
