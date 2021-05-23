export function tracksSerializer(tracks) {
  return tracks.items.map(trackSerializer)
}

function trackSerializer(track) {
  return {
    id: track.id,
    name: track.name,
    href: track.href,
    appLinks: track.uri,
    duration: track.duration_ms,
  }
}