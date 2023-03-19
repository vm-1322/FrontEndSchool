import { Routes, Route } from 'react-router-dom';

import AboutUs from '../AboutUs';
import Courses from '../Courses';
import CourseDetails from '../CourseDetails';
import Header from '../Header';

import { StyledApp } from './AppStyled';

const App: React.FC = () => {
  return (
    <StyledApp>
      <Header />
      <Routes>
        <Route path='/' element={<Courses />} />
        <Route path='/about-us' element={<AboutUs />} />
        <Route path='/course/:courseId' element={<CourseDetails />} />
      </Routes>
    </StyledApp>
  );
};

export default App;
