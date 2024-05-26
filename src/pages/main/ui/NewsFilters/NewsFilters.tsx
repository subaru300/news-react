import { useAppDispatch } from '@/app/appStore';
import Categories from '@/features/category/ui/Categories/Categories';
import Search from '@/features/search/ui/Search/Search';
import Slider from '@/features/slider/ui/Slider/Slider';
import { IFilters } from '@/shared/interfaces';
import { useGetCategoriesQuery } from '@/entities/category/api/categoriesApi';
import { setFilters } from '@/entities/news/model/newsSlice';
import styles from './NewsFilters.module.css';

interface Props {
  filters: IFilters;
}

const NewsFilters = ({ filters }: Props) => {
  const { data } = useGetCategoriesQuery(null);
  const dispatch = useAppDispatch();

  return (
    <div className={styles.filters}>
      {data ? (
        <Slider>
          <Categories
            categories={data.categories}
            selectedCategorie={filters.category}
            setSelectedCategorie={(category) =>
              dispatch(setFilters({ key: 'category', value: category }))
            }
          />
        </Slider>
      ) : null}
      <Search
        keywords={filters.keywords}
        setKeyWords={(keywords) =>
          dispatch(setFilters({ key: 'keywords', value: keywords }))
        }
      />
    </div>
  );
};

export default NewsFilters;
