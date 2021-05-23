export function artistsSerializer(artists) {
  return artists.items.map(artistSerializer)
}

function artistSerializer(artist) {
  return {
    id: artist.id,
    name: artist.name,
    image: artist.images[0],
    appLinks: artist.uri,
  }
}