import { combineReducers } from '@reduxjs/toolkit';
import authReducer from './AuthSlice';
// import EducationReducer from './EducationSlice';
// import ExperienceReducer from './ExperienceSlice';
// import SubjectReducer from './SubjectSlice';
import userReducer from './UserSlice';
// import CertificationReducer from './CertificationSlice';
// import countriesReducer from './CountriesSlice';
// import chatReducer from './ChatSlice';
// import CourseReducer from './CourseSlice';
// import CourseLectureReducer from './CourseLectureSlice';
import FirebaseReducer from './FirebaseSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  user: userReducer,
  // education: EducationReducer,
  // experience: ExperienceReducer,
  // subject: SubjectReducer,
  // certification: CertificationReducer,
  // countries: countriesReducer,
  // chat: chatReducer,
  // course: CourseReducer,
  // courseLecture: CourseLectureReducer,
  firebaseN: FirebaseReducer
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;