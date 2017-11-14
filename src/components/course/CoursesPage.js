import * as React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as courseActions from '../actions/courseActions';
import CourseList from './CourseList';

import './CoursesPage.css';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

  }

  courseRow(course, idx) {
    return <div key={idx}>{course.title}</div>;
  }
  render() {
    const {courses} = this.props;
    return (
      <div className="courses-container">
        <h1>Courses</h1>
        <CourseList courses={courses} />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses //state.courses is the same name as in the reducer's index.js
  };
}
function mapDispatchToProps(dispatch) {
  return {
    //createCourse: course => dispatch(courseActions.createCourse(course))
    actions: bindActionCreators(courseActions, dispatch)
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
