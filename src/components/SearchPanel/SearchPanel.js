import React, { Component } from 'react';
import './style.css';

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = { term: '' };
    this.onInputChange = this.onInputChange.bind(this);
  }

  onInputChange(event) {
    this.setState({ term: event.target.value });
    this.props.onSearchTermChange(event.target.value);
  }

  render() {
    return (
      <div className="input-header">
        <input
          className="input-header input-group mb-3"
          value={this.state.term}
          onChange={this.onInputChange}
          name="search"
        />
      </div>
    );
  }
}

export default SearchPanel;
