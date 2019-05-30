import React, {Component} from 'react';
import './todoList.scss'
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as todoListActions from "../../store/todoList/actions";
export default class todoList extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return <div className="component-todo-list">Hello! component todoList</div>;
    }
  }
// export default connect(
//     ({ todoList }) => ({ ...todoList }),
//     dispatch => bindActionCreators({ ...todoListActions }, dispatch)
//   )( todoList );