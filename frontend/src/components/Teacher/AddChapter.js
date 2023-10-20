import {Link} from 'react-router-dom';
import TeacherSlidebar from './TeacherSlidebar';
import {useEffect,useState} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
const baseUrl = 'http://127.0.0.1:8000/api';
function AddChapter(){
    const [chapterData,setChapterData]=useState({
        title:'',
        description:'',
        video:'',
        remarks:'',
    })
    const handleChange = (event) =>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.value
        });
    };
    const handleFileChange = (event) =>{
        setChapterData({
            ...chapterData,
            [event.target.name]:event.target.files[0]
        });
    };
    const {course_id} = useParams();
    const submitForm=()=>{
        const _formData = new FormData();
        _formData.append('course',course_id);
        _formData.append('title',chapterData.title);
        _formData.append('description',chapterData.description);
        _formData.append('video',chapterData.video,chapterData.video.name);
        _formData.append('remarks',chapterData.remarks); 
        try{
            axios.post(baseUrl+'/chapter/',_formData,{
                headers:    {
                'content-type': 'mutilpart/form-data'
            }
        })
            .then((res)=>{
                window.location.href='/add-chapter/1';
            });
        }catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
        document.title = 'LMS | Add Chapter';
    });
    return(
        <div clasName="container mt-4">
            <div className="row">
               <aside className="col-md-3">
                    <TeacherSlidebar />
               </aside>
               <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Add Chapter</h5>
                        <div className="card-body">
                            <form>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input  name="title" onChange={handleChange} id="title" type="text" className="form-control"  />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea name="description" onChange={handleChange} className="form-control" id="description" ></textarea>
                            </div>
                            <div className="mb-3 row">
                                <label for="video" className="form-label">video</label>
                                <div className="col-sm-10">
                                    <input type="file" onChange={handleFileChange}  name='video'  className="form-control" id="video"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="techs" className="form-label">Remarks</label>
                                <textarea className="form-control" onChange={handleChange} name="remarks" id="techs" placeholder='Php,Python,Javascript,HTML,CSS,...' ></textarea>
                            </div>
                            <hr/>
                            <button type='button' onClick={submitForm}  className="btn btn-primary">Update</button>
                            </form>
                        </div>
                    </div>
               </section>
            </div>
        </div>
    )
    
}
export default AddChapter;