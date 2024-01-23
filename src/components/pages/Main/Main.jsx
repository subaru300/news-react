import { useEffect, useState } from 'react';
import NewsBanner from '../../NewsBanner/NewsBanner';
import { getCategories, getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';
import Skeleton from '../../Skeleton/Skeleton';
import Pagination from '../../Pagination/Pagination';
import Categories from '../../Categories/Categories';

import styles from './Main.module.css';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [categories, setCategories] = useState([]);
    const [selectedCategorie, setSelectedCategorie] = useState('All');
    const totalPages = 10;
    const pageSize = 10;


    

    const fetchNews = async (currentPage) => {
        try {
            setIsLoading(true);
            const response = await getNews({
                page_number: currentPage,
                page_size: pageSize,
                category: selectedCategorie === 'All' ?  null : selectedCategorie,
            });
            setNews(response.news);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
            
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(['All', ...response.categories]);

        } catch (error) {
            console.log(error);
            
        }
    };

    useEffect(()=>{
        fetchCategories();
    },[])

    useEffect(()=>{
        fetchNews(currentPage);
    },[currentPage, selectedCategorie])

    const onNextPageHandler = () => {
        if(currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const onPrevPageHandler = () => {
        if(currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const onClickPageHandler = (pageNumber) => {
            setCurrentPage(pageNumber);  
    };


    return (
<main className={styles.main}>
    <Categories 
        categories={categories} 
        setSelectedCategorie={setSelectedCategorie}
        selectedCategorie={selectedCategorie}
        />
  {news.length > 0 && !isLoading ? <NewsBanner item={news[0]}/> : <Skeleton count={1} type={'banner'}/>} 
  {<Pagination 
        totalPages={totalPages} 
        currentPage={currentPage}
        onNextPageHandler={onNextPageHandler} 
        onPrevPageHandler={onPrevPageHandler} 
        onClickPageHandler={onClickPageHandler}
    />} 
  {!isLoading ? <NewsList news={news}/> : <Skeleton count={10} type={'item'}/>}
  {<Pagination 
        totalPages={totalPages} 
        currentPage={currentPage}
        onNextPageHandler={onNextPageHandler} 
        onPrevPageHandler={onPrevPageHandler} 
        onClickPageHandler={onClickPageHandler}
    />} 
</main>
    )
};

export default Main;