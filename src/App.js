import React, { Component } from "react";
import YTSearch from "youtube-api-search";

const _API_KEY = "AIzaSyCAJiqovaCAKuMXBJy0xOTAdqBXD7f3jn4";

export class App extends Component {
  state = {
    videos: [],
    selectedVideo: null
  };

  videoSearch(searchTerm) {
    YTSearch({ key: _API_KEY, term: searchTerm }, data => {
      // console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }

  render() {
    return (
      <div>
        <header className="App-header">
          <h1>Youtube Search App</h1>
        </header>
      </div>
    );
  }
}

export default App;
