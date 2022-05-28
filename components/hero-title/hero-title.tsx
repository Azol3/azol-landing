import styles from './hero-title.module.css';


const HeroTitle = () => {
    return (
        <div className={styles["title-container"]}>
            <h1 className={styles["main-title"]}>The first <span className={styles.gradient}>decentralized</span> reputation solution</h1>
            <h3 className={styles.description}>Azol is on a mission to revolutionize the way that verification and authentication works on web3 dapps. Reduce the threat of botting and other bad actors by implementing a universal reputation system, so that your virtual identity follows you.</h3>
        </div>
    )
}

export default HeroTitle;