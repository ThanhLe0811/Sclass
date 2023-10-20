import {Link} from 'react-router-dom';
import Slidebar from './Slidebar';
function Dashboard(){
    return(
        <div clasName="container mt-4">
            <div className="row">
               <aside className="col-md-3">
                    <Slidebar />
               </aside>
               <section className='col-md-9'>
                    Dashboard
               </section>
            </div>
        </div>
    )
    
}
export default Dashboard;