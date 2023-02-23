const clientId = 'e6004135dddc4dc3bfc35096daa4689b';
const redirectUri = 'http://localhost:3000';
let accessToken;

const Spotify = {
    getAccessToken() {
        if (accessMatch) {
            return accessMatch
        }
        const url = window.location.href;
        const accessMatch = url.match(/access_token=([^&]*)/);
        const expiryMatch = url.match(/expires_in=([^&]*)/);

        if (accessMatch && expiryMatch) {
            accessToken = accessMatch[1];
            const expiresIn = Number(expiryMatch[1]);

            // Wipe access token if it's expired:
            window.setTimeout(() => accessToken = '', expiresIn * 1000);
            window.history.pushState('Access Token', null, '/');
            return accessToken;
        }

        const accessUrl = `https://accounts.spotify.com/authorize?client_id=${clientId}&response_type=token&scope=playlist-modify-public&redirect_uri=${redirectUri}`;
        window.location = accessUrl;
    },

    search(term) {
        const accessToken = Spotify.getAccessToken();
        return fetch(`https://api.spotify.com/v1/search?type=track&q=${term}`,
            {headers: {
                Authorization: `Bearer ${accessToken}`
            }}
        ).then(response => {
            return response.json();
        }).then(jsonResponse => {
            if (!jsonResponse.tracks) {
                return []
            }
            return jsonResponse.tracks.items.map(track => ({
                id: track.id,
                name: track.name,
                artist: track.artists[0].name,
                album: track.album.name,
                uri: track.uri
            }))
        });
    }
}

export default Spotify;