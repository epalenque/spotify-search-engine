import './Tracks.css'

const Tracks = ({ searchedTracks }) => (
  <div className="tracks">
    <h2 className="tracks__title">We found {searchedTracks.length} tracks!</h2>
    <ul className="tracks-list">
      {searchedTracks.map(track => (
        <li key={track.id}>{track.name}</li>
      ))}
    </ul>
  </div>
)

export { Tracks }
