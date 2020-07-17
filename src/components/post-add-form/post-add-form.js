import React from 'react';

import './post-add-form.css';

class PostAddForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: ''
        };

        this.onValueChange = this.onValueChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onValueChange(event) {      
        this.setState({
            text: event.target.value
        });
    }

    onSubmit(event) {
        event.preventDefault();

        const {onAdd} = this.props;
        const {text} = this.state;

        event.currentTarget.reset();

        onAdd(text);
    }

    render() {
        return (
            <form 
                className='bottom-panel d-flex'
                onSubmit={this.onSubmit}
            >
                <input 
                    type="text"
                    placeholder="What do you thinking right now?"
                    className="form-control new-post-label"
                    onChange={this.onValueChange}
                />
                <button
                    type="submit"
                    className="btn btn-outline-secondary"
                >
                    Add
                </button>
            </form>
        );
    }
}

export default PostAddForm;