import Slider from '../Slider/Slider';
import Categories from '../Categories/Categories';
import Search from '../Search/Search';
import styles from './NewsFilters.module.css';
import { useGetCategoriesQuery } from '../../store/services/newsApi';
import { IFilters } from '../../interfaces';
import { useAppDispatch } from '../../store';
import { setFilters } from '../../store/slices/newsSlice';

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
            setSelectedCategorie={(category) => dispatch(setFilters({key: 'category', value: category }))}
        />
   </Slider>
    )  : null}
    <Search
        keywords={filters.keywords} 
        setKeyWords={(keywords) => dispatch(setFilters({key: 'keywords', value: keywords }))}/>
</div>
    )
};

export default NewsFilters;