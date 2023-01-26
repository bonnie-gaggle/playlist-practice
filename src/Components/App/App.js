import './App.css';
import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      searchResults: [
        {name: 'Name 1', artist: 'Artist 1', album: 'Album 1', id: 1},
        {name: 'Name 2', artist: 'Artist 2', album: 'Album 2', id: 2},
        {name: 'Name 3', artist: 'Artist 3', album: 'Album 3', id: 3},
      ],
      playlistName: 'Playlist Name',
      playlistTracks: [
        {name: 'Song 1', artist: 'Artist 1', album: 'Album 1', id: 1},
        {name: 'Song 2', artist: 'Blur', album: 'Album 2', id: 2},
        {name: 'Song 3', artist: 'Artist 3', album: 'Album 3', id: 3},
      ]
    }
  }
  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults}/>
            <Playlist playlistTracks={this.state.playlistTracks} playlistName={this.state.playlistName}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
