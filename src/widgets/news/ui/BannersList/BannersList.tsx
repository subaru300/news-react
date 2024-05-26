import NewsBanner from '@/entities/news/ui/NewsBanner/NewsBanner';
import withSkeleton from '@/shared/hocs/withSkeleton';
import { INews } from '@/entities/news/model/types';
import styles from './BannersList.module.css';

interface Props {
  banners?: INews[] | null;
}

const BannersList = ({ banners }: Props) => {
  return (
    <ul className={styles.banners}>
      {banners?.map((banner) => {
        return <NewsBanner key={banner.id} item={banner} />;
      })}
    </ul>
  );
};

const BannersListWithSkeleton = withSkeleton<Props>(
  BannersList,
  'banner',
  10,
  'row'
);

export default BannersListWithSkeleton;
