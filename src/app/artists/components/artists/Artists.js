import './Artists.css'
import notFound from 'system-ui/images/image-not-found.svg'

const Artists = ({ searchedArtists }) => (
  <div className="artists">
    <h2 className="artists__title">We found {searchedArtists.length} artists!</h2>
    <ul className="artists-list">
      {searchedArtists.map(artist => {
        return (
        <li key={artist.id} className="artists-item">
          {artist.image
            ? <img className="artists-item__image" src={artist.image.url} alt={artist.name}/>
            : <img className="artists-item__image" src={notFound} alt="not found"/>
          }
          <a className="artists-item__title" href={artist.appLinks}>{artist.name}</a>
        </li>
      )})}
    </ul>
  </div>
)

export { Artists }
