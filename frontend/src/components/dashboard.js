import {Link} from 'react-router-dom';
function Dashboard(){
    return(
        <div className="container mt-4">
            <div className="row">
                <aside className="col-md-3">
                    <div className="card">
                        <h5 className="card-header">Dashboard</h5>
                        <div className="list-group list-group-flush">
                            <link to='/' className="list-group-item list-group-item-action">My Course</link>
                            <link to='/' className="list-group-item list-group-item-action">My Course</link>
                            <link to='/' className="list-group-item list-group-item-action">My Course</link>
                            <link to='/' className="list-group-item list-group-item-action">My Course</link>
                            <link to='/' className="list-group-item list-group-item-action">My Course</link>
                            <link to='/' className="list-group-item list-group-item-action text-danger">My Course</link>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    )
}
export default Dashboard;