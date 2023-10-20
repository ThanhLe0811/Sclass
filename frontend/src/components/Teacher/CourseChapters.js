import {Link} from 'react-router-dom';
import TeacherSlidebar from './TeacherSlidebar';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const baseUrl = 'http://127.0.0.1:8000/api';

function CourseChapters(){
    const {course_id} = useParams();
    const [chapterData,setchapterData]=useState([]);
    // Fetch course when page load
    useEffect(()=>{
    try{
        axios.get(baseUrl+'/course-chapters/'+course_id)
        .then((res)=>{
            setchapterData(res.data);
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
            <h5 className="card-header">ALL Chapters</h5>
                <div className='card-body'>
                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Video</th>
                                <th>Remarks</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {chapterData.map((chapter,index)=> 
                            <tr>
                                <td><Link to="#">{chapter.title}</Link></td>
                                <td ></td>
                                <td>{chapter.remarks}</td>
                                <td>
                                <button className="btn btn-danger btn-sm">Delete</button>
                                <button className="btn btn-success btn-sm " >Edit</button>
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
    )
}
export default CourseChapters;