import NewsByFilters from '@/pages/main/ui/NewsByFilters/NewsByFilters';
import LatestNews from '@/pages/main/ui/LatestNews/LatestNews';
import styles from './Main.module.css';

const MainPage = () => {
  return (
    <main className={styles.main}>
      <LatestNews />
      <NewsByFilters />
    </main>
  );
};

export default MainPage;
