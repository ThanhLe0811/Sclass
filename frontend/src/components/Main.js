import Home from './Home';
import About from './About';
import CourseDetail from './CourseDetail';
import TeacherDetail from './TeacherDetail';
//User
import Login from './User/Login';
import Register from './User/Register';
import Dashboard from './User/Dashboard';
import MyCourse from './User/MyCourse';
import FavoriteCourse from './User/FavoriteCourse';
import RecommenedCourse from './User/RecommenedCourse';
import ProfileSetting from './User/ProfileSetting';
import ChangePassword from './User/ChangePassword';
import Header from './Header';
import Footer from './Footer';
import {Routes as Switch,Route} from 'react-router-dom';
// Teacher
import TeacherLogin from './Teacher/TeacherLogin';
import TeacherLogout from './Teacher/TeacherLogout';
import TeacherRegister from './Teacher/TeacherRegister';
import TeacherDashboard from './Teacher/TeacherDashboard';
import AddCourse from './Teacher/AddCourse';
import AddChapter from './Teacher/AddChapter';
import AllChapters from './Teacher/CourseChapters';
import TeacherCourse from './Teacher/TeacherCourse';
import MyUser from './Teacher/MyUser';
import TeacherProfileSetting from './Teacher/TeacherProfileSetting';
import TeacherChangePassword from './Teacher/TeacherChangePassword';

// List Pages
import AllCourses from './AllCourses';
import PopularCourses from './PopularCourses';
import PopularTeacher from './PopularTeacher';
function Main() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" element={<Home   />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/detail/:course_id" element={<CourseDetail />}/>
        <Route path="/user-login" element={<Login />}/>
        <Route path="/user-register" element={<Register />}/>
        <Route path="/user-dashboard" element={<Dashboard />}/>
        <Route path="/my-course" element={<MyCourse />}/>
        <Route path="/favorite-courses" element={<FavoriteCourse />}/>
        <Route path="/recommended-courses" element={<RecommenedCourse />}/>
        <Route path="/profile-setting" element={<ProfileSetting />}/>
        <Route path="/change-password" element={<ChangePassword />}/>
        <Route path="/teacher-login" element={<TeacherLogin />}/>
        <Route path="/teacher-logout" element={<TeacherLogout />}/>
        <Route path="/teacher-register" element={<TeacherRegister />}/>
        <Route path="/teacher-dashboard" element={<TeacherDashboard />}/>
        <Route path="/teacher-course" element={<TeacherCourse />}/>
        <Route path="/add-course" element={<AddCourse />}/>
        <Route path="/add-chapter/:course_id" element={<AddChapter />}/>
        <Route path="/my-user" element={<MyUser />}/>
        <Route path="/teacher-profile-setting" element={<TeacherProfileSetting />}/>
        <Route path="/teacher-change-password" element={<TeacherChangePassword />}/>
        <Route path="/teacher-detail/:teacher_id" element={<TeacherDetail />}/>
        <Route path="/all-courses" element={<AllCourses />}/>
        <Route path="/all-chapters/:course_id" element={<AllChapters />}/>
        <Route path="/popular-courses" element={<PopularCourses />}/>
        <Route path="/popular-teacher" element={<PopularTeacher />}/>
        </Switch> 
      <Footer />
    </div>
  );
}

export default Main;
