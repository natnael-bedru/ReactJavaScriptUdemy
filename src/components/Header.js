import Logo from "../assets/logo.png"
//Module level styling 
import styles from './stylesheet/Header.module.css';

export const Header = () => {
  return (
    <header className={styles.header}>
        <img className={styles.img} src={Logo} alt="logo" />
        <a href="/" >Home</a>
    </header>
  )
}
