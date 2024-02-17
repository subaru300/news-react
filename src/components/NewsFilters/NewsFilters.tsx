import Slider from '../Slider/Slider';
import { getCategories } from '../../api/apiNews';
import { useFetch } from '../../helpers/hooks/useFetch';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './NewsFilters.module.css';
import { CategoriesApiResponse, IFilters } from '../../interfaces';

interface Props {
    filters: IFilters;
    changeFilter: (key: string, value: string | number | null) => void;
}

const NewsFilters = ({ filters, changeFilter }: Props) => {
    const {data: dataCategies} = useFetch<null, CategoriesApiResponse>(getCategories);

    return (
<div className={styles.filters}>
    {dataCategies ? (
   <Slider>
        <Categories 
            categories={dataCategies.categories} 
            selectedCategorie={filters.category}
            setSelectedCategorie={(category) => changeFilter('category', category)}
        />
   </Slider>
    )  : null}
    <Search
        keywords={filters.keywords} 
        setKeyWords={(keywords) => changeFilter('keywords', keywords)}/>
</div>
    )
};

export default NewsFilters;