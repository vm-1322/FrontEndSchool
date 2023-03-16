import { Fragment, useEffect, useState } from 'react';

import Course from '../Course';

import {
  StyledCourses,
  StyledCoursesTitle,
  StyledCoursesList,
} from './CoursesStyled';

import { ICourse } from '../../types';

import { getCoursesList } from '../../api/courses';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Array<ICourse>>([]);

  const renderCourse = (course: ICourse) => {
    return (
      <Fragment key={course.id}>
        <Course
          title={course.title}
          lessonsCount={course.lessonsCount}
          rating={course.rating}
          skills={course.skills}
          previewImageLink={course.previewImageLink}
          courseVideoPreview={course.courseVideoPreview}
        />
      </Fragment>
    );
  };

  const retrieveData = async () => {
    const coursesList = await getCoursesList();

    const curCourses: ICourse[] = coursesList.map((item: any) => {
      return {
        id: item.id,
        title: item.title,
        lessonsCount: item.lessonsCount,
        rating: item.rating,
        skills: item.meta.skills || [],
        previewImageLink: item.previewImageLink,
        courseVideoPreview: {
          link: item.meta.courseVideoPreview?.link || '',
          duration: item.meta.courseVideoPreview?.duration || 0,
          previewImageLink:
            item.meta.courseVideoPreview?.previewImageLink || '',
        },
      };
    });

    setCourses(curCourses);
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <StyledCourses>
      <StyledCoursesTitle>List of courses</StyledCoursesTitle>
      <StyledCoursesList>{courses.map(renderCourse)}</StyledCoursesList>
    </StyledCourses>
  );
};

export default Courses;
