import { Artists } from 'app/artists/components/artists'
import { Albums } from 'app/albums/components/albums'
import { Tracks } from 'app/tracks/components/tracks'

import './SearchResults.css'

const SearchResults = ({ searchedArtists, searchedAlbums, searchedTracks }) => {
  const cleanSearch = !searchedArtists && !searchedAlbums && !searchedTracks

  if (cleanSearch) {
    return (
      <div className="search-results search-results__empty">
        <h2 className="search-results__empty-title">Please put your search keywords in the search box</h2>
      </div>
    )
  }

  return (
    <div className="search-results">
      <Artists searchedArtists={searchedArtists}/>
      {/* <Albums searchedAlbums={searchedAlbums}/> */}
      {/* <Tracks searchedTracks={searchedTracks}/> */}
    </div>
  )
}

export { SearchResults }
