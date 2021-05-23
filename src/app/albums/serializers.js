export function albumsSerializer(albums) {
  return albums.items.map(albumSerializer)
}

function albumSerializer(album) {
  return {
    id: album.id,
    name: album.name,
    href: album.href,
    image: album.images[0],
    appLinks: album.uri,
  }
}