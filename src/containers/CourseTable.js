import React from 'react'
import CourseRow from '../components/CourseRow'
import {Link} from "react-router-dom";


class CourseTable extends React.Component {
    constructor(props){
        super(props);
    }

    render() {

        return (
            <div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                        <th scope="col">Title</th>

                        <th scope="col">
                            <div className="d-none d-sm-block">Owned By</div>
                        </th>
                        <th scope="col">
                            <div className="d-none d-sm-block">Last modified</div>
                        </th>
                        <th scope="col">
                            <Link to="/course-grid">
                                <div className="d-none d-sm-block">
                                    <button type="button" className="btn"><i className="fa fa-th"></i></button>
                                </div>
                            </Link>
                        </th>
                        <th scope="col">
                            <div className="d-none d-sm-block">
                                <button type="button" className="btn"><i className="fa fa-sort"></i>
                                </button>
                            </div>
                        </th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.courses.map(course => <CourseRow course={course} key={course.id} deleteCourse={this.props.deleteCourse}/>)}
                    </tbody>
                </table>

            </div>
        );

    }
}


export default CourseTable
