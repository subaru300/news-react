import { useEffect, useState } from 'react';
import NewsBanner from '../../NewsBanner/NewsBanner';
import { getNews } from '../../../api/apiNews';
import NewsList from '../../NewsList/NewsList';
import Skeleton from '../../Skeleton/Skeleton';
import Pagination from '../../Pagination/Pagination';

import styles from './Main.module.css';

const Main = () => {
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 10;
    const pageSize = 10;

    useEffect(()=>{
        const fetchNews = async (currentPage) => {
            try {
                setIsLoading(true);
                const response = await getNews(currentPage, pageSize);
                setNews(response.news);
                setIsLoading(false);
            } catch (error) {
                console.log(error);
                
            }
        }
        fetchNews(currentPage);
    },[currentPage])

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