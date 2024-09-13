import {BrowserRouter,Routes,Route} from 'react-router-dom'
import LandingPage from './Components/LandingPage'
import TeacherRegister from './Components/Teacher/TeacherRegister'
import TeacherLogin from './Components/Teacher/teacherLogin'
import TeacherDashboard from './Components/Teacher/TeacherDashboard'
import StudentDashboard from './Components/Student/Dashboard'
import Registration from './Components/Student/Register'
import Login from './Components/Student/Login'
import PrincipalLogin from './Components/Principal/PrincipalLogin'
import AddNotice from './Components/Principal/AddNotice'
import Notices from './Components/Principal/Notices'
import PrincipalDashboard from './Components/Principal/PrincipalDashboard'
import HomeworkList from './Components/Teacher/HomeworkList'
import AboutPage from './Components/AboutPage'
import DeleteHomework from './Components/Teacher/DeleteHomework'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Registration/>}/>
        <Route path='/dashboard' element={<StudentDashboard/>}/>
        <Route path='/teacherregister' element={<TeacherRegister/>}/>
        <Route path='/teacherlogin' element={<TeacherLogin/>}/>
        <Route path='/teacherdashboard' element={<TeacherDashboard/>}/>
        <Route path='/about' element={<AboutPage/>}/>


        <Route path='/prinlogin' element={<PrincipalLogin/>}/>
        <Route path='/add' element={<AddNotice/>}/>
        <Route path='/notices' element={<Notices/>}/>PrincipalDashboard
        <Route path='/principal' element={<PrincipalDashboard/>}/>
        <Route path='/hwlist' element={<HomeworkList/>}/>DeleteHomework
        <Route path='/dlt' element={<DeleteHomework/>}/>









      </Routes>
    </BrowserRouter>
  )
}

export default App
