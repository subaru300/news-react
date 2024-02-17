import LatestNews from '../../LatestNews/LatestNews';
import NewsByFilters from '../../NewsByFilters/NewsByFilters';
import styles from './Main.module.css';

const Main = () => {

    return (
<main className={styles.main}>
    <LatestNews/>
    <NewsByFilters/>
</main>
    )
};

export default Main;