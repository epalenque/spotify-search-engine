import './SearchForm.css'
import magnifier from 'system-ui/images/magnifier.svg'

const SearchForm = ({ onChange }) => (
  <form className="search-form">
    <input className="search-form__input" onChange={ onChange } placeholder="Search artist"></input>
    <button className="search-form__button"><img className="icon" src={ magnifier } alt="lupa"/></button>
  </form>
)


export { SearchForm }