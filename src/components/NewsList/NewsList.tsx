import NewsItem from '../NewsItem/NewsItem';
import styles from './NewsList.module.css';
import withSkeleton from '../../helpers/hocs/withSkeleton';
import { INews } from '../../interfaces';

interface Props {
    news?: INews[];
}

const NewsList = ({ news }: Props) => {
    return (
<ul className={styles.list}>
 {news?.map((item)=>{
    return <NewsItem key={item.id} item={item}></NewsItem>
 })}
</ul>
    )
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;