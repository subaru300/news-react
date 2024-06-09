import NewsItem from '@/entities/news/ui/NewsItem/NewsItem';
import withSkeleton from '@/shared/hocs/withSkeleton';
import { INews } from '@/entities/news/model/types';
import styles from './NewsList.module.css';

interface Props {
  news?: INews[];
}

const NewsList = ({ news }: Props) => {
  return (
    <ul className={styles.list}>
      {news?.map((item) => {
        return <NewsItem key={item.id} item={item}></NewsItem>;
      })}
    </ul>
  );
};

const NewsListWithSkeleton = withSkeleton<Props>(NewsList, 'item', 10);

export default NewsListWithSkeleton;
