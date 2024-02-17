import { getNews } from '../../api/apiNews';
import { useDebounce } from '../../helpers/hooks/useDebounce';
import { useFetch } from '../../helpers/hooks/useFetch';
import { useFilters } from '../../helpers/hooks/useFilters';
import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import { PAGE_SIZE, TOTAL_PAGES } from '../constants/constants';
import PaginationWrapper from '../PaginationWrapper/PaginationWrapper';
import styles from './NewsByFilters.module.css';
import { NewsApiResponse, ParamsType } from '../../interfaces/index';

const NewsByFilters = () => {

    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    });

    const debouncedKeywords = useDebounce(filters.keywords, 1500)

    const {data, isLoading} = useFetch<ParamsType, NewsApiResponse>(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    });

    const onNextPageHandler = () => {
        if(filters.page_number < TOTAL_PAGES) {
            changeFilter('page_number', filters.page_number + 1);
        }
    };

    const onPrevPageHandler = () => {
        if(filters.page_number > 1) {
            changeFilter('page_number', filters.page_number - 1);
        }
    };

    const onClickPageHandler = (pageNumber: number) => {
        changeFilter('page_number', pageNumber);
    };

    return (
<section className={styles.section}>
    <NewsFilters filters={filters} changeFilter={changeFilter}/>

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
            news={data?.news} />
   </PaginationWrapper>
</section>
    )
};

export default NewsByFilters;