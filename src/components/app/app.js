import React, { Component } from 'react';
import './app.scss';

import AppHeader from '../header';
import Search from '../searchPanel';
import TodoList from '../todoList';
import AddForm from '../addForm';

export default class App extends Component {
    maxId = 100;

    state = {
        todoData: [
            { label: 'drink coffee', important: false, id: 1 },
            { label: 'make app', important: true, id: 2 },
            { label: 'have a lunch', important: true, id: 3 }
        ]
    };

    deleteItem = id => {
        this.setState(({ todoData }) => {
            const idn = todoData.findIndex(el => el.id === id);

            const newArray = [
                ...todoData.slice(0, idn),
                ...todoData.slice(idn + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    addItem = text => {
        const newItem = {
            label: text,
            important: false,
            id: this.maxId++
        };

        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            };
        });
    };

    render() {
        return (
            <div>
                <AppHeader />
                <Search />
                <TodoList
                    todos={this.state.todoData}
                    onDeleted={this.deleteItem}
                />
                <AddForm onItemAdded={this.addItem} />
            </div>
        );
    }
}
