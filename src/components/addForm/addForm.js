import React, { Component } from 'react';
import './addForm.scss';

export default class addForm extends Component {
    render() {
        return (
            <div className='add-form'>
                <button
                    type='submit'
                    className='btn btn-outline-primary'
                    onClick={() => this.props.onItemAdded('Hello World')}
                >
                    Add
                </button>
            </div>
        );
    }
}
