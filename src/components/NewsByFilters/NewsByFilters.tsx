import { useDebounce } from '../../helpers/hooks/useDebounce';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import { TOTAL_PAGES } from '../constants/constants';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import styles from './NewsByFilters.module.css';
import { useGetNewsQuery } from '../../store/services/newsApi';
import { useAppDispatch, useAppSelector } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

const NewsByFilters = () => {

    const dispatch = useAppDispatch();
    const filters = useAppSelector(state => state.news.filters);
    const news = useAppSelector(state => state.news.news);

    const debouncedKeywords = useDebounce(filters.keywords, 1500)

    const { isLoading } = useGetNewsQuery({
        ...filters,
        keywords: debouncedKeywords,
    })

    const onNextPageHandler = () => {
        if(filters.page_number < TOTAL_PAGES) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number + 1 }))
        }
    };

    const onPrevPageHandler = () => {
        if(filters.page_number > 1) {
            dispatch(setFilters({key: 'page_number', value: filters.page_number - 1 }))
        }
    };

    const onClickPageHandler = (pageNumber: number) => {
        dispatch(setFilters({key: 'page_number', value: pageNumber }))
    };

    return (
<section className={styles.section}>
    <NewsFilters filters={filters}/>

   <PaginationWrapper  
        top
        bottom
        totalPages={TOTAL_PAGES} 
        currentPage={filters.page_number}
        onNextPageHandler={onNextPageHandler} 
        onPrevPageHandler={onPrevPageHandler} 
        onClickPageHandler={onClickPageHandler}>
        <NewsList
            isLoading={isLoading} 
            news={news} />
   </PaginationWrapper>
</section>
    )
};

export default NewsByFilters;