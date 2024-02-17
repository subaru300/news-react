import BannersList from '../BannersList/BannersList';
import { useFetch } from '../../helpers/hooks/useFetch';
import { getLatestNews } from '../../api/apiNews';
import styles from './LatestNews.module.css';
import { NewsApiResponse } from '../../interfaces/index';

const LatestNews = () => {
    const {data, isLoading} = useFetch<null, NewsApiResponse>(getLatestNews);
    
    return (
    <section className={styles.section}>
        <BannersList banners={data && data.news} isLoading={isLoading}/>
    </section>
    )
};

export default LatestNews;