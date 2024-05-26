import { useAppDispatch, useAppSelector } from '@/app/appStore';
import { TOTAL_PAGES } from '@/shared/constants/constants';
import NewsList from '@/widgets/news/ui/NewsList/NewsList';
import { useDebounce } from '@/shared/hooks/useDebounce';
import NewsFilters from '../NewsFilters/NewsFilters';
import styles from './NewsByFilters.module.css';
import { useGetNewsQuery } from '@/entities/news/api/newsApi';
import { setFilters } from '@/entities/news/model/newsSlice';
import { Pagination } from '@/features/pagination';

const NewsByFilters = () => {
  const dispatch = useAppDispatch();
  const filters = useAppSelector((state) => state.news.filters);
  const news = useAppSelector((state) => state.news.news);

  const debouncedKeywords = useDebounce(filters.keywords, 1500);

  const { isLoading } = useGetNewsQuery({
    ...filters,
    keywords: debouncedKeywords,
  });

  const onNextPageHandler = () => {
    if (filters.page_number < TOTAL_PAGES) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number + 1 })
      );
    }
  };

  const onPrevPageHandler = () => {
    if (filters.page_number > 1) {
      dispatch(
        setFilters({ key: 'page_number', value: filters.page_number - 1 })
      );
    }
  };

  const onClickPageHandler = (pageNumber: number) => {
    dispatch(setFilters({ key: 'page_number', value: pageNumber }));
  };

  return (
    <section className={styles.section}>
      <NewsFilters filters={filters} />

      <Pagination
        top
        bottom
        totalPages={TOTAL_PAGES}
        currentPage={filters.page_number}
        onNextPageHandler={onNextPageHandler}
        onPrevPageHandler={onPrevPageHandler}
        onClickPageHandler={onClickPageHandler}
      >
        <NewsList isLoading={isLoading} news={news} />
      </Pagination>
    </section>
  );
};

export default NewsByFilters;
