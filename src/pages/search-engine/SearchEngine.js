import { Fragment, useState } from 'react'
import { Layout } from 'system-ui/components/layout'
import { Header } from 'system-ui/components/header'
import { SearchForm } from 'system-ui/components/search-form'
import { SearchResults } from 'app/search/components/search-results'
import { SearchClient } from 'app/search/client'
import { LIMIT_LENGTH_SEARCH } from 'app/search/constants'

const SearchEngine = () => {
  const [searchedArtists, setSearchedArtists] = useState(null)
  const [searchedAlbums, setSearchedAlbums] = useState(null)
  const [searchedTracks, setSearchedTracks] = useState(null)

  const onChange = async (event) => {
    const { value } = event.target

    if (!value || value.length <= LIMIT_LENGTH_SEARCH) return

    const { artists, albums, tracks } = await SearchClient.search(value)
    setSearchedArtists(artists)
    setSearchedAlbums(albums)
    setSearchedTracks(tracks)
  }

  return (
    <Fragment>
      <Header title="Spotify Search Engine">
        <SearchForm onChange={onChange}/>
      </Header>
      <Layout>
        <SearchResults
          searchedArtists={searchedArtists}
          searchedAlbums={searchedAlbums}
          searchedTracks={searchedTracks}
        />
      </Layout>
    </Fragment>
  )
}

export { SearchEngine }
