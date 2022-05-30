import styles from './hero-title.module.css';

import { useRouter } from '../../node_modules/next/router';


const HeroTitle = () => {

    const router = useRouter();

    return (
        <div className={styles["title-container"]}>
            <h1 className={styles["main-title"]}>The first <span className={styles.gradient}>decentralized</span> reputation solution</h1>
            <h3 className={styles.description}>Azol is on a mission to revolutionize the way that verification and authentication works on web3. We want to implement a universal reputation system, so that your virtual identity follows you.</h3>
            <div className={styles["button-container"]}>
                
                <button onClick={e => router.push('https://discord.gg/azol')} className={styles["join-discord"]}>Join Discord</button>
                {/* <button onClick={e => router.push('https://azol.io/whitepaper.pdf')} className={styles["view-whitepaper"]}>Whitepaper</button> */}
                <button className={styles.btn}>Whitepaper</button>

            </div>
        </div>
    )
}

export default HeroTitle;