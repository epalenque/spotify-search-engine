import './Header.css'

const Header = ({ title, children }) => (
  <header className="header">
    <h1 className="header__title">{title}</h1>
    {children}
  </header>
)

export { Header }