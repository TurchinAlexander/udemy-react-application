import React from 'react';

import AppHeader from '../appheader';
import SearchPanel from '../search-panel';
import PostStatusFilter from '../post-status-filter';
import PostList from '../post-list';
import PostAddForm from '../post-add-form';

import './app.css';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data : [
                {label: 'Going to learn React', important: true, like: false, id: 1},
                {label: 'That is so good', important: false, like: false, id: 2},
                {label: 'I need a break', important: false, like: false, id: 3},
            ],
            term: '',
            filter: 'all'
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onToggleParam = this.onToggleParam.bind(this);
        this.onUpdateSearch = this.onUpdateSearch.bind(this);
        this.onFilterSelect = this.onFilterSelect.bind(this);

        this.maxId = 4;
    }

    deleteItem(id) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArray = data.slice();

            newArray.splice(index, 1);

            return {
                data: newArray
            };
        });
    }

    addItem(body) {
        const newItem = {
            label: body,
            important: false,
            id: this.maxId++
        };

        this.setState(({data}) => {
            const newArray = [...data, newItem];

            return {
                data: newArray
            };
        });
    }

    onToggleImportant(id) {
        this.onToggleParam(id, 'important');
    }

    onToggleLike(id) {
        this.onToggleParam(id, 'like');
    }

    onToggleParam(id, paramName) {
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id === id);
            const newArray = [...data];

            newArray[index][paramName] = !newArray[index][paramName];

            return {
                data: newArray
            };
        });
    }

    searchPost(items, term) {
        if (!term.length) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) >= 0; 
        });
    }

    filterPost(items, filter) {
        if (filter === 'like') {
            return items.filter(item => item.like);
        }

        return items;        
    }

    onUpdateSearch(term) {
        this.setState({
            term
        });
    }

    onFilterSelect(filter) {
        this.setState({
            filter
        });
    }
    
    render() {
        const {data, term, filter} = this.state;
        const liked = data.filter(item => item.like).length;
        const allPosts = data.length;

        const visiblePosts = this.filterPost(this.searchPost(data, term), filter);

        return (
            <div className="app">
                <AppHeader
                    liked={liked}
                    allPosts={allPosts}
                />
                <div className="search-panel d-flex">
                    <SearchPanel
                        onUpdateSearch={this.onUpdateSearch}
                    />
                    <PostStatusFilter
                        onFilterSelect={this.onFilterSelect}
                        filter={filter}
                    />
                </div>
                <PostList 
                    posts={visiblePosts}
                    onDelete={this.deleteItem}
                    onToggleImportant={this.onToggleImportant}
                    onToggleLike={this.onToggleLike}
                />
                <PostAddForm
                    onAdd={this.addItem}    
                />
            </div>
        );
    }
}

export default App;