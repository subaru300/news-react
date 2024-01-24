import NewsFilters from '../NewsFilters/NewsFilters';
import NewsList from '../NewsList/NewsList';
import Pagination from '../Pagination/Pagination';
import { TOTAL_PAGES } from '../constants/constants';
import styles from './NewsByFilters.module.css';


const NewsByFilters = ({filters, changeFilter, isLoading, news}) => {
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

    const onClickPageHandler = (pageNumber) => {
        changeFilter('page_number', pageNumber);
    };

    return (
<section className={styles.section}>
    <NewsFilters filters={filters} changeFilter={changeFilter}/>
    <Pagination
        totalPages={TOTAL_PAGES} 
        currentPage={filters.page_number}
        onNextPageHandler={onNextPageHandler} 
        onPrevPageHandler={onPrevPageHandler} 
        onClickPageHandler={onClickPageHandler}
    />
    <NewsList
        isLoading={isLoading} 
        news={news} />
    <Pagination 
        totalPages={TOTAL_PAGES} 
        currentPage={filters.page_number}
        onNextPageHandler={onNextPageHandler} 
        onPrevPageHandler={onPrevPageHandler} 
        onClickPageHandler={onClickPageHandler}
    />
</section>
    )
};

export default NewsByFilters;