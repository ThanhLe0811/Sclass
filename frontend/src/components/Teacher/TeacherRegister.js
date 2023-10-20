import {Link} from 'react-router-dom';
import {useEffect,useState} from 'react';
import axios from 'axios';
function TeacherRegister(){
    useEffect(()=>{
        document.title="Teacher Register";
    });
    const [teacherData,setteacherData]=useState({
        'full_name' : '',
        'email' : '',
        'password' : '',
        'qualification' : '',
        'mobile' : '',
        'skills' : '',
        'status' : '',
    });
    // Change Element value
    const handleChange=(event)=>{
        setteacherData({
            ...teacherData,
            [event.target.name]:event.target.value
        });
    }
    console.log(teacherData);
    // end
    // Submit Form
    const submitForm=()=>{
        const teacherFormData= new FormData();
        teacherFormData.append("full_name",teacherData.full_name)
        teacherFormData.append("email",teacherData.email)
        teacherFormData.append("password",teacherData.password)
        teacherFormData.append("qualification",teacherData.qualification)
        teacherFormData.append("mobile",teacherData.mobile)
        teacherFormData.append("skills",teacherData.skills)
        try{
            axios.post('http://127.0.0.1:8000/api/teacher/',teacherFormData,).then((response)=>{
                setteacherData({
                    'full_name' : '',
                    'email' : '',
                    'password' : '',
                    'qualification' : '',
                    'mobile' : '',
                    'skills' : '',
                    'status' : 'success',
                });
        });
        }catch(error){
            console.log(error);
            setteacherData({status:'error'});
        }
    };
    //end
    useEffect(() => {
        document.title = 'LMS | Teacher Resgister';
    });
    const teacherLoginStatus=localStorage.getItem('teacherLoginStatus')
        if(teacherLoginStatus=='true'){
            window.location.href='/teacher-dashboard';
        }
    return(
        <div clasName="container mt-4">
            <div className="row">
                <div className="col-6 offset-3">
                    {teacherData.status=="success" && <p className="text-success">Thanks for your registeration</p>}
                    {!teacherData.status=="error" && <p className="text-danger">Something Wrong!!!</p>}
                    <div className="card">
                        <h3 className="card-header"> Teacher Register</h3>
                        <div className="card-body">
                            <form>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Full Name</label>
                                    <input value={teacherData.full_name} onChange={handleChange} name="full_name" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Email</label>
                                    <input value={teacherData.email} onChange={handleChange} name="email" type="email" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Password</label>
                                    <input value={teacherData.password} onChange={handleChange} name="password" type="password" className="form-control" id="exampleInputPassword1"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Qualification</label>
                                    <input value={teacherData.qualification} onChange={handleChange} name="qualification" type="text" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Mobile Number</label>
                                    <input value={teacherData.mobile} onChange={handleChange} name="mobile"type="number" className="form-control" />
                                </div>
                                <div className="mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Skills</label>
                                    <textarea value={teacherData.skills} onChange={handleChange} className="form-control" name="skills"></textarea>
                                    <div id="emailHelp" className="form-text">python,java,ect</div>
                                </div>
                                <button onClick={submitForm} type="submit" className="btn btn-primary">Register</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )};
export default TeacherRegister;