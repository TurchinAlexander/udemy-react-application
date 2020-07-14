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
                {label: 'Going to learn React', important: true, id: 1},
                {label: 'That is so good', important: false, id: 2},
                {label: 'I need a break', important: false, id: 3},
            ]
        };

        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);

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
            // const newArray = data.slice();

            // newArray.push(newItem);

            const newArray = [...data, newItem];

            return {
                data: newArray
            };
        });
    }

    render() {
        const {data} = this.state;

        return (
            <div className="app">
                <AppHeader/>
                <div className="search-panel d-flex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList 
                    posts={data}
                    onDelete={this.deleteItem}
                />
                <PostAddForm
                    onAdd={this.addItem}    
                />
            </div>
        );
    }
};

export default App;