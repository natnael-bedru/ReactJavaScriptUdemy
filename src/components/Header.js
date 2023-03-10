import Logo from "../assets/logo.png"
import './stylesheet/Header.css';

export const Header = () => {
  return (
    <header>
        <img className="logo" src={Logo} alt="logo" />
        <a href="/" >Home</a>
    </header>
  )
}
