import styles from './navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.root}>
            <img className={styles.logo} src="/logo.png"></img>
        </div>
    )
}

export default Navbar;