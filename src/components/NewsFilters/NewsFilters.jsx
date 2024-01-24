
import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './NewsFilters.module.css';


const NewsFilters = ({ filters, changeFilter }) => {
    const {data: dataCategies} = useFetch(getCategories);

    return (
<div className={styles.filters}>
    {dataCategies ? <Categories 
        categories={dataCategies.categories} 
        selectedCategorie={filters.category}
        setSelectedCategorie={(category) => changeFilter('category', category)}
        /> : null}
    <Search
        keywords={filters.keywords} 
        setKeyWords={(keywords) => changeFilter('keywords', keywords)}/>
</div>
    )
};

export default NewsFilters;