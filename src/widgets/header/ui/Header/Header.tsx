import { useTheme } from '@/app/providers/ThemeProvider';
import { formatDate } from '@/shared/helpers/formatDate';
import ThemeButton from '@/features/theme/ui/ThemeButton/ThemeButton';
import styles from './Header.module.css';

const Header = () => {
  const { isDark } = useTheme();

  return (
    <header
      className={`${styles.header} ${isDark ? styles.dark : styles.ligth}`}
    >
      <div className={styles.info}>
        <h1 className={styles.title}>BREAKING NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
      </div>
      <ThemeButton />
    </header>
  );
};

export default Header;
