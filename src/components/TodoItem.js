import React, {Component} from 'react';
import PropTypes from 'prop-types';


class TodoItem extends Component {
    render() {
        return (
            <div style={itemStyle}>
               <p>{this.props.todo.title}</p>
            </div>
        )
    }
}

TodoItem.propType = {
    todos: PropTypes.object.isRequired
}

const  itemStyle = {
    backgroundColor: 'green'
}

export default TodoItem;
