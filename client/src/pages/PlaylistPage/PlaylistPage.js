import Song from "../../components/Song/Song";

export default function PlaylistPage() {
    return (
      <div className="playlist-page">
          <div className="playlist-page__details">
              <div className="details__left">
                  <div className="details__title">Hip Hop Party Playlist</div>
                  <div className="details__subtitle">10 songs • 2 hours, 14 minutes</div>
              </div>
              <button>Add to Spotify</button>
          </div>
          <div className="playlist-page__song-fields">
              <div className="song-fields__left">
                  <div>#</div><div>TITLE</div>
              </div>
              <div className="song-fields__middle">
                  DURATION
              </div>
              <div className="song-fields__right">
                  POPULARITY
              </div>
          </div>
          <div className="playlist-page__songs">
              <Song index={ 1 } song={ { title: 'BOP', 'author': 'DaBaby', 'duration_ms': 207959, popularity: 51 } } />
              <Song index={ 2 } song={ { title: 'Shivers', 'author': 'Ed Sheeran', 'duration_ms': 258384, popularity: 42 } } />
              <Song index={ 3 } song={ { title: 'How Should I Feel (feat. Meg & Dia)', 'author': 'Witt Lowry, Meg & Dia', 'duration_ms': 158205, popularity: 60 } } />
          </div>
      </div>
    );
}
