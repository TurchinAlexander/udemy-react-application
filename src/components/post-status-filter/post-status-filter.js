import React from 'react';

import './post-status-filter.css';

class PostStatusFilter extends React.Component {
    constructor(props) {
        super(props);
        this.buttons = [
            {name: 'all', label: 'All'},
            {name: 'like', label: 'Liked'}
        ];
    }

    render() {
        const {filter, onFilterSelect} = this.props;

        const buttons = this.buttons.map(({name, label}) => {
            const active = filter === name;

            return (
                <button
                    key={name}
                    type="button"
                    className={`btn ${(active) ? 'btn-info' : 'btn-outline-secondary'}`}
                    onClick={() => onFilterSelect(name)}
                >
                    {label}
                </button>
            );
        });

        return (
            <div className="btn-group">
                {buttons}
            </div>
        );
    }
}

export default PostStatusFilter;