import styles from '../styles/Home.module.css';
import HeroTitle from '../components/hero-title/hero-title';
import Navbar from '../components/navbar/navbar';
import ThreeScene from '../threejs/three.scene';

export default function Home() {
  return (
    <div className={styles.root}>
      <img src="/cards.svg"></img>
      <HeroTitle />
      <Navbar />
    </div>
  )
}
