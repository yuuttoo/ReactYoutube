import React from 'react';

class SearchBar extends React.Component {
    state = { term: ''};

    onInputChange = event => {
        this.setState({ term: event.target.value })
    };

    onFormSubmit = event => {
        event.preventDefault();//送出表單不會reload整個頁面

        this.props.onFormSubmit(this.state.term);
    };

    render() {
        return (
            <div className="search-bar uisegment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label>Video Search</label>
                        <input type="text" 
                        value={this.state.term}
                        onChange={this.onInputChange}
                        />          
                    </div>
                </form>
            </div>
        );
    }
}

export default SearchBar;