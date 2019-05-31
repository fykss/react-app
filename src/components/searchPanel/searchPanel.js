import React, { Component } from 'react';
import './searchPanel.scss';

export default class searchPanel extends Component {
    render() {
        return (
            <form className='form-inline'>
                <input
                    className='form-control'
                    type='text'
                    placeholder='Search'
                />
                <button type='submit' className='btn btn-primary'>
                    Confirm
                </button>
            </form>
        );
    }
}
