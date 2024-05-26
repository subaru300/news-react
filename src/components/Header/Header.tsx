import { themeIcons } from "../../assets";
import { formatDate } from "../../helpers/formatDate";
import styles from './Header.module.css';
import { useTheme } from "../../context/ThemeContext";

const Header = () => {
    const {isDark, toggleTheme} = useTheme();

    return (
<header className={`${styles.header} ${isDark ? styles.dark : styles.ligth}`}>
    <div className={styles.info}>
        <h1 className={styles.title}>BREAKING NEWS</h1>
        <p className={styles.date}>{formatDate(new Date())}</p>
    </div>
    <img src={ isDark ? themeIcons.light : themeIcons.dark } width={'30px'} alt="themeIcon" onClick={toggleTheme}/>
</header>
    )
};

export default Header;