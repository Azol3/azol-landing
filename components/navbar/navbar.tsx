import styles from './navbar.module.css';


const Navbar = () => {
    return (
        <div className={styles.root}>
            <img className={styles.logo} src="/logo.png"></img> 
            <a href="" className={styles["nav-link"]}>Documentation</a>
            <a href="" className={styles["nav-link"]}>Team</a>
            {/* <button className={styles["connect-wallet"]}>Connect Wallet</button> */}
        </div>
    )
}

export default Navbar;