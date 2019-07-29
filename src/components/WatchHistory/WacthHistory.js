import React, { Component } from 'react';
import { getVideos, addVideo } from '../../api';

export class WacthHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    getVideos
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Failed to load data!');
        }
        return response.json();
      })
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json,
        });
      });
  }

  handleClick() {}

  render() {
    const { isLoaded, items } = this.state;
    if (!isLoaded) {
      return <div>Loading the data...</div>;
    } else {
      return (
        <div>
          {items.map(items => (
            <ul key={items.id}>
              <li>{items.title}</li>
              <li align="right">{items.text}</li>
            </ul>
          ))}
          <button onClick={this.handleClick}>Delete</button>
        </div>
      );
    }
  }
}

export default WacthHistory;
