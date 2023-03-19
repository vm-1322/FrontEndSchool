import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { ICourse } from '../../types';

import { getCourse } from '../../api/courses';

import {
  StyledCourseDetails,
  StyledCourseDetailsTitleInfo,
  StyledCourseDetailsTitle,
  StyledCourseDetailsInfo,
  StyledCourseDetailsVideoPreview,
  StyledCourseDetailsLessonsTitle,
  StyledCourseDetailsLessonsList,
  StyledCourseDetailsLessonsListItem,
} from './CourseDetailsStyled';

const CourseDetails: React.FC = () => {
  const [course, setCourse] = useState<ICourse>();
  const { courseId } = useParams();

  const renderedLessons = () => {
    return course?.lessons?.map((item, index) => {
      return (
        <StyledCourseDetailsLessonsListItem
          key={item.id}
          isUnLocked={item.status === 'unlocked'}
        >
          {item.order}. {item.title} <span>{item.duration}</span>
        </StyledCourseDetailsLessonsListItem>
      );
    });
  };

  const retrieveData = async () => {
    const curCourse = await getCourse(String(courseId));

    setCourse(curCourse);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <StyledCourseDetails>
      <StyledCourseDetailsTitleInfo>
        <StyledCourseDetailsTitle>{course?.title}</StyledCourseDetailsTitle>
        <StyledCourseDetailsInfo>{course?.description}</StyledCourseDetailsInfo>
      </StyledCourseDetailsTitleInfo>
      <StyledCourseDetailsVideoPreview />
      <StyledCourseDetailsLessonsTitle>
        List of lessons
      </StyledCourseDetailsLessonsTitle>
      <StyledCourseDetailsLessonsList>
        {renderedLessons()}
      </StyledCourseDetailsLessonsList>
    </StyledCourseDetails>
  );
};

export default CourseDetails;
