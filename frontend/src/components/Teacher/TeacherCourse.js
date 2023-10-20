import {Link} from 'react-router-dom';
import TeacherSlidebar from './TeacherSlidebar';
import {useEffect,useState} from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function TeacherCourse(){
    const [courseData,setCourseData]=useState([]);
    const teacherId=localStorage.getItem('teacherId');
    // Fetch course when page load
    useEffect(()=>{
    try{
        axios.get(baseUrl+'/teacher-course/'+teacherId)
        .then((res)=>{
            setCourseData(res.data);
    }); 
    }catch(error){
        console.log(error);
    }
    },[]);
    return(
        <div clasName="container mt-4">
            <div className="row">
               <aside className="col-md-3">
                    <TeacherSlidebar />
               </aside>
               <section className='col-md-9'>
               <div className="card">
                <h5 className="card-header">My Courses</h5>
                    <div className='card-body'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Image</th>
                                <th>Total Enrolled</th>
                                <th>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                                {courseData.map((course,index)=> 
                                <tr>
                                    <td><Link to={'/all-chapters/'+course.id}>{course.title}</Link></td>
                                    <td ><img src={course.featured_img} width='100' className="rounded" alt={course.title} /></td>
                                    <td><Link to="/">123</Link></td>
                                    <td>
                                    <button className="btn btn-danger btn-sm">Delete</button>
                                    <Link className="btn btn-success btn-sm ms-2" to={'/add-chapter/'+course.id}>Add Chapter</Link>
                                    </td>
                                </tr>
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </div>
    </div>
    );
}
export default TeacherCourse;