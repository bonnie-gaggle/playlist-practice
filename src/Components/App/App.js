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
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;
    if (tracks.find(song => song.id === track.id)) {
      return;
    }
    tracks.push(track);
    this.setState({playlistTracks: tracks})
  }

  removeTrack(track) {
    const tracks = this.state.playlistTracks;
    const trackIndex = tracks.findIndex(song => song.id === track.id)
    if (trackIndex > -1) {
      tracks.splice(trackIndex, 1);
      this.setState({playlistTracks: tracks})
    }
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack}
            />
            <Playlist
              playlistTracks={this.state.playlistTracks}
              playlistName={this.state.playlistName}
              onRemove={this.removeTrack}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
