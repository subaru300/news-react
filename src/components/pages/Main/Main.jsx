import NewsBanner from '../../NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';
import Pagination from '../../Pagination/Pagination';
import Categories from '../../Categories/Categories';
import Search from '../../Search/Search';
import { useDebounce } from '../../../helpers/hooks/useDebounce';
import { useFetch } from '../../../helpers/hooks/useFetch';
import styles from './Main.module.css';
import { PAGE_SIZE, TOTAL_PAGES } from '../../constants/constants';
import { useFilters } from '../../../helpers/hooks/useFilters';

const Main = () => {
    const {filters, changeFilter} = useFilters({
        page_number: 1,
        page_size: PAGE_SIZE,
        category: null,
        keywords: '',
    });

    const debouncedKeywords = useDebounce(filters.keywords, 1500)

    const {data, isLoading} = useFetch(getNews, {
        ...filters,
        keywords: debouncedKeywords,
    });

    const {data: dataCategies} = useFetch(getCategories);

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
<main className={styles.main}>
    {dataCategies ? <Categories 
        categories={dataCategies.categories} 
        selectedCategorie={filters.category}
        setSelectedCategorie={(category) => changeFilter('category', category)}
        /> : null}
    <Search 
        keywords={filters.keywords} 
        setKeyWords={(keywords) => changeFilter('keywords', keywords)}/>
    <NewsBanner 
        isLoading={isLoading} 
        item={data && data.news && data.news[0]}/>
    {<Pagination 
        totalPages={TOTAL_PAGES} 
        currentPage={filters.page_number}
        onNextPageHandler={onNextPageHandler} 
        onPrevPageHandler={onPrevPageHandler} 
        onClickPageHandler={onClickPageHandler}
    />} 
    <NewsList 
        isLoading={isLoading} 
        news={data?.news} />
    {<Pagination 
        totalPages={TOTAL_PAGES} 
        currentPage={filters.page_number}
        onNextPageHandler={onNextPageHandler} 
        onPrevPageHandler={onPrevPageHandler} 
        onClickPageHandler={onClickPageHandler}
    />} 
</main>
    )
};

export default Main;