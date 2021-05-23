import './Albums.css'

const Albums = ({ searchedAlbums }) => (
  <div className="albums">
    <h2 className="albums__title">We found {searchedAlbums.length} albums!</h2>
    <ul className="albums-list">
      {searchedAlbums.map(album => (
        <li key={album.id}>{album.name}</li>
      ))}
    </ul>
  </div>
)

export { Albums }
