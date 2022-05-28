import styles from '../styles/Home.module.css';
import HeroTitle from '../components/hero-title/hero-title.tsx';

export default function Home() {
  return (
    <div className={styles.root}>
      <HeroTitle />
    </div>
  )
}
