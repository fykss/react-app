import React from 'react';
import './todoList.scss';

import TodoListItem from '../todoListItem/todoListItem';

const TodoList = ({ todos, onDeleted }) => {
    const elements = todos.map(item => {
        const { id, ...itemProps } = item;
        return (
            <li key={id} className='list-group-item'>
                <TodoListItem {...itemProps} onDeleted={() => onDeleted(id)}/>
            </li>
        );
    });

    return <ul className='list-group todo-list'>{elements}</ul>;
};

export default TodoList;
