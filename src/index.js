import React from 'react';
import ReactDOM from 'react-dom';

const AppHeader = () => {
    return <h1>My Todo List</h1>;
};

const Search = () => {
    const searchStyle = {
        fontSize: '20px'
    }
    return <input style={searchStyle} type='text' placeholder='Search' />;
};

const TodoList = () => {
    const items = ['Learn react', 'Build'];
    return (
        <ul>
            <li>{items[0]}</li>
            <li>{items[1]}</li>
        </ul>
    );
};

const App = () => {
    return (
        <div>
            <AppHeader />
            <Search />
            <TodoList />
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
