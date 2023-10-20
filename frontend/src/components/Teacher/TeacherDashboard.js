import {Link} from 'react-router-dom';
import TeacherSlidebar from './TeacherSlidebar';
function TeacherDashboard(){
    return(
        <div clasName="container mt-4">
            <div className="row">
               <aside className="col-md-3">
                    <TeacherSlidebar />
               </aside>
               <section className='col-md-9'>
                    Dashboard
               </section>
            </div>
        </div>
    )
    
}
export default TeacherDashboard;