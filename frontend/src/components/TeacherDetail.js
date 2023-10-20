import {Link} from 'react-router-dom';
function TeacherDetail(){
    return(
        <div className="container mt-3">
            <div className="row">
                <div className="col-4">
                    <img src="/logo512.png" className="img-thumbnail" alt="Teacher Image"/>
                </div>
                <div className="col-8">
                    <h3>Donald Trump</h3>
                    <p>Using a combination of grid and utility classes, cards can be made horizontal in a mobile-friendly and responsive way. In the example below, we remove the grid gutters with .g-0 and use .col-md-* classes to make the card horizontal at the md breakpoint. Further adjustments may be needed depending on your card content.
                    </p>
                    <p className="fw-bold"><b>Skills:</b> <Link to="/teacher-detail/1">PHP</Link>,<Link to="/teacher-detail/1">Python</Link>,<Link to="/teacher-detail/1">JavaScripts</Link></p>
                    <p className="fw-bold"><b>Recent Course:</b> <Link to="/teacher-detail/1">ReactJS Course</Link> </p>
                    <p className="fw-bold"><b>Rating:</b> 4.5/5 </p>
                </div>
            </div>
            {/* {Course Videos} */}
            <div className="card">
                <h5 className="card-header">
                    Course Lists
                </h5>
                <div className="list-group list-group-flush">
                    <Link to="/detail/1" className="list-group-item list-group-item-action">PHP Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">PHP Course 2</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">PHP Course 3</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 2</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">Python Course 3</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">JavaScripts Course 1</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">JavaScripts Course 2</Link>
                    <Link to="/detail/1" className="list-group-item list-group-item-action">JavaScripts Course 3</Link>
                </div>                
            </div>
        </div>
    )
}
export default TeacherDetail;