import React from 'react';
import './Playlist.css';

export default class Playlist extends React.Component {
    render() {
        <div className="Playlist">
            <input defaultValue={'New Playlist'}/>
            {/* <!-- Add a TrackList component --> */}
            <button className="Playlist-save">SAVE TO SPOTIFY</button>
        </div>
    }
}