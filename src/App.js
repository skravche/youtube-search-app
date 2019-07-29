import React, { Component } from 'react';
import SearcPanel from './components/SearchPanel/SearcPanel';
import YTSearch from 'youtube-api-search';
import VideoList from './components/VideoList/VideoList';
import MainVideo from './components/MainVideo/MainVideo';
import WacthHistory from './components/WatchHistory/WacthHistory';
const API_KEY = 'AIzaSyBdVut9QCzqAHBzfDEh30yUp4E529som6s';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('React Tutorials');
  }

  videoSearch(searchTerm) {
    YTSearch({ key: API_KEY, term: searchTerm }, data => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0],
      });
    });
  }
  render() {
    return (
      <div>
        <SearcPanel
          onSearchTermChange={searchTerm => this.videoSearch(searchTerm)}
        />
        <section className="row">
          <WacthHistory />
          <MainVideo video={this.state.selectedVideo} />
          <VideoList
            onVideoSelect={userSelected =>
              this.setState({ selectedVideo: userSelected })
            }
            videos={this.state.videos}
          />
        </section>
      </div>
    );
  }
}

export default App;
