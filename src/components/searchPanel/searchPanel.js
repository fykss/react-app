import React, { Component } from 'react';
import './searchPanel.scss';

export default class searchPanel extends Component {
    state = {
        term: ''
    };

    onLabelSearch = e => {
        const term = e.target.value;
        this.setState({
            term
        });
        this.props.onLabelSearch(term);
    };

    render() {
        return (
            <form className='d-flex justify-content-between form-search'>
                <input
                    className='form-control'
                    type='text'
                    value={this.state.term}
                    onChange={this.onLabelSearch}
                    placeholder='Search'
                />
                <button type='submit' className='btn btn-outline-secondary'>
                    Confirm
                </button>
            </form>
        );
    }
}
