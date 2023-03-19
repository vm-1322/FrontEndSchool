import { Fragment, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Course from '../Course';
import Pagination from '../Pagination';

import {
  StyledCourses,
  StyledCoursesTitle,
  StyledCoursesList,
} from './CoursesStyled';

import { ICourse, Direction } from '../../types';

import { getCoursesList } from '../../api/courses';

const Courses: React.FC = () => {
  const [courses, setCourses] = useState<Array<ICourse>>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [firstItem, setFirstItem] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const navigation = useNavigate();

  const coursesPerPage = 10;

  const handlerClickCourse = (courseId: string) => {
    navigation(`/course/${courseId}`);
  };

  const handlerClickPage = (num: number) => {
    setCurrentPage(num);
    setFirstItem(courses.length - 1 - (num - 1) * coursesPerPage);
  };

  const handlerClickDirection = (direction: Direction) => {
    let curPage = 0;

    if (direction === Direction.Left) {
      curPage = Math.max(currentPage - 1, 1);
    }

    if (direction === Direction.Right) {
      curPage = Math.min(currentPage + 1, totalPages);
    }

    if (curPage > 0 && curPage !== currentPage) {
      setCurrentPage(curPage);
      setFirstItem(courses.length - 1 - (curPage - 1) * coursesPerPage);
    }
  };

  const renderCourses = () => {
    const counter = Math.min(
      Math.min(coursesPerPage, courses.length),
      firstItem + 1
    );

    if (counter) {
      return [...Array(counter)].map((_, index) => {
        const courseIndex = firstItem - index;

        return (
          <Fragment key={courses[courseIndex].id}>
            <Course
              id={courses[courseIndex].id}
              title={courses[courseIndex].title}
              lessonsCount={courses[courseIndex].lessonsCount}
              rating={courses[courseIndex].rating}
              skills={courses[courseIndex].skills}
              previewImageLink={courses[courseIndex].previewImageLink}
              courseVideoPreview={courses[courseIndex].courseVideoPreview}
              onClickCourse={handlerClickCourse}
            />
          </Fragment>
        );
      });
    }

    return <Fragment></Fragment>;
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
    setFirstItem(curCourses.length - 1);
    setTotalPages(
      curCourses.length === 0
        ? 0
        : Math.ceil(curCourses.length / coursesPerPage)
    );
  };

  useEffect(() => {
    retrieveData();
  }, []);

  return (
    <StyledCourses>
      <StyledCoursesTitle>List of courses</StyledCoursesTitle>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        clickPage={handlerClickPage}
        clickDirection={handlerClickDirection}
      />
      <StyledCoursesList>{renderCourses()}</StyledCoursesList>
    </StyledCourses>
  );
};

export default Courses;
