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
            this.createTodoItem('Eat'),
            this.createTodoItem('Sleep'),
            this.createTodoItem('Code'),
            this.createTodoItem('Repeat')
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            id: this.maxId++
        };
    }

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
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [...todoData, newItem];

            return {
                todoData: newArr
            };
        });
    };

    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter(item => {
            return item.label.toLowerCase().indexOf(term.toLowerCase()) > -1;
        });
    }

    onSearchChange = term => {
        this.setState({ term });
    };

    render() {
        const { todoData, term } = this.state;

        const visibleItem = this.search(todoData, term);

        return (
            <div>
                <AppHeader />
                <AddForm onItemAdded={this.addItem} />
                <TodoList todos={visibleItem} onDeleted={this.deleteItem} />
                <Search onLabelSearch={this.onSearchChange} />
            </div>
        );
    }
}
