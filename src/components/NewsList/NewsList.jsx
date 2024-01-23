import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';
import withSkeleton from '../../helpers/hocs/withSkeleton';

const NewsList = ({ news }) => {
    return (
<ul className={styles.list}>
 {news.map((item)=>{
    return <NewsItem key={item.id} item={item}></NewsItem>
 })}
</ul>
    )
};

const NewsListWithSkeleton = withSkeleton(NewsList, 'item', 10);

export default NewsListWithSkeleton;