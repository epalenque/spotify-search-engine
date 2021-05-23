import { artistsSerializer } from 'app/artists/serializers'
import { albumsSerializer } from 'app/albums/serializers'
import { tracksSerializer } from 'app/tracks/serializers'


export function searchSerializer(search) {
  return {
    artists: artistsSerializer(search.artists),
    albums: albumsSerializer(search.albums),
    tracks: tracksSerializer(search.tracks),
  }
}
