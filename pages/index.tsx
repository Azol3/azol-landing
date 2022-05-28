import styles from '../styles/Home.module.css';
import HeroTitle from '../components/hero-title/hero-title';
import Navbar from '../components/navbar/navbar';

export default function Home() {
  return (
    <div className={styles.root}>
      <Navbar />
      <HeroTitle />
    </div>
  )
}
