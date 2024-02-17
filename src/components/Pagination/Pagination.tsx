import { IPaginationProps } from '../../interfaces';
import styles from './Pagination.module.css';

const Pagination = ({ totalPages, currentPage, onNextPageHandler, onPrevPageHandler, onClickPageHandler }: IPaginationProps) => {
    return (
<div className={styles.pagination}>
    <button className={styles.arrow} onClick={onPrevPageHandler}  disabled={currentPage <= 1}>{'<'}</button>
    <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
            return  <button key={index} className={styles.pageNumber} onClick={ () => onClickPageHandler(index + 1)} disabled={index + 1 === currentPage}>{index + 1}</button>
        })}
    </div>
    <button className={styles.arrow} onClick={onNextPageHandler} disabled={currentPage >= totalPages}>{'>'}</button>
</div>
    )
};

export default Pagination;