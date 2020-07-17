import React from 'react';

import './search-panel';

class SearchPanel extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ''
        };

        this.onUpdateSearch = this.onUpdateSearch.bind(this);
    }

    onUpdateSearch(event) {
        const term = event.target.value;

        this.setState({
            term
        });

        this.props.onUpdateSearch(term);
    }

    render() {
        return (
            <input
                className="form-control search-input"
                type="text"
                placeholder="Records search"
                onChange={this.onUpdateSearch}
            />
        );
    }
};

export default SearchPanel;