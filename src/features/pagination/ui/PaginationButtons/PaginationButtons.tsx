import { useTheme } from '@/app/providers/ThemeProvider';
import styles from './PaginationButtons.module.css';
import { IPaginationProps } from '../../model/types';

const Pagination = ({
  totalPages,
  currentPage,
  onNextPageHandler,
  onPrevPageHandler,
  onClickPageHandler,
}: IPaginationProps) => {
  const { isDark } = useTheme();
  return (
    <div
      className={`${styles.pagination} ${isDark ? styles.dark : styles.ligth}`}
    >
      <button
        className={styles.arrow}
        onClick={onPrevPageHandler}
        disabled={currentPage <= 1}
      >
        {'<'}
      </button>
      <div className={styles.list}>
        {[...Array(totalPages)].map((_, index) => {
          return (
            <button
              key={index}
              className={styles.pageNumber}
              onClick={() => onClickPageHandler(index + 1)}
              disabled={index + 1 === currentPage}
            >
              {index + 1}
            </button>
          );
        })}
      </div>
      <button
        className={styles.arrow}
        onClick={onNextPageHandler}
        disabled={currentPage >= totalPages}
      >
        {'>'}
      </button>
    </div>
  );
};

export default Pagination;
