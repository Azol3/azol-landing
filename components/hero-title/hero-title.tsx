import styles from './hero-title.module.css';


const HeroTitle = () => {
    return (
        <div className={styles["title-container"]}>
            <h1 className={styles["main-title"]}>The first decentralized reputation solution</h1>
            <h3 className={styles.description}>Azol is on a mission to revolutionize the way that verification and authentication works on web3 dapps.</h3>
        </div>
    )
}

export default HeroTitle;