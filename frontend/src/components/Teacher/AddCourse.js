import {Link} from 'react-router-dom';
import TeacherSlidebar from './TeacherSlidebar';
import {useEffect,useState} from 'react';
import axios from 'axios';
const baseUrl = 'http://127.0.0.1:8000/api';
function AddCourse(){
    const [cats,setcats] = useState([]);
    const [courseData,setCourseData]=useState({
        category:'',
        title:'',
        description:'',
        f_img:'',
        techs:'',
    })
     // Fetch category when page load
    useEffect(()=>{
        try{
            axios.get(baseUrl+'/category')
            .then((res)=>{
                    setcats(res.data);
            });
        }catch(error){
            console.log(error);
        }
    },[]);
    const handleChange = (event) =>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.value
        });
    };
    const handleFileChange = (event) =>{
        setCourseData({
            ...courseData,
            [event.target.name]:event.target.files[0]
        });
    };
    const submitForm=()=>{
        const _formData = new FormData();
        _formData.append('category',courseData.category);
        _formData.append('teacher',3);
        _formData.append('title',courseData.title);
        _formData.append('description',courseData.description);
        _formData.append('featured_img',courseData.f_img,courseData.f_img.name);
        _formData.append('techs',courseData.techs); 
        try{
            axios.post(baseUrl+'/course/',_formData,{
                headers:    {
                'content-type': 'mutilpart/form-data'
            }
        })
            .then((res)=>{
                window.location.href='/add-course';
            });
        }catch(error){
            console.log(error);
        }
    };
    useEffect(() => {
        document.title = 'LMS | Add Course';
    });
    return(
        <div clasName="container mt-4">
            <div className="row">
               <aside className="col-md-3">
                    <TeacherSlidebar />
               </aside>
               <section className='col-md-9'>
                    <div className="card">
                        <h5 className="card-header">Add Course</h5>
                        <div className="card-body">
                        <div className="mb-3">
                                <label for="title" className="form-label">Category</label>
                                <select name="category" onChange={handleChange} class='form-control'>
                                    {cats.map((category,index)=>{return <option key={index} value={category.id}>{category.title}</option>})}
                                </select>
                            </div>
                            <div className="mb-3">
                                <label for="title" className="form-label">Title</label>
                                <input  name="title" id="title" onChange={handleChange}  type="text" className="form-control"  />
                            </div>
                            <div className="mb-3">
                                <label for="description" className="form-label">Description</label>
                                <textarea name="description" onChange={handleChange} className="form-control" id="description" ></textarea>
                            </div>
                            <div className="mb-3 row">
                                <label for="video" className="form-label">Featured Images</label>
                                <div className="col-sm-10">
                                    <input type="file" onChange={handleFileChange} name='f_img'  className="form-control" id="video"/>
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="techs" className="form-label">Teachnologies</label>
                                <textarea className="form-control" onChange={handleChange}  id="techs" placeholder='Php,Python,Javascript,HTML,CSS,...' ></textarea>
                            </div>
                            <hr/>
                            <button type='button' onClick={submitForm} className="btn btn-primary">Update</button>
                        </div>
                    </div>
               </section>
            </div>
        </div>
    )
    
}
export default AddCourse;