import { useTheme } from '../../context/ThemeContext';
import styles from './Search.module.css';

interface Props {
    keywords: string; 
    setKeyWords: (keywords: string) => void;
}

const Search = ({ keywords, setKeyWords }: Props) => {
    const {isDark} = useTheme();

    return (
        <div className={`${styles.search} ${isDark ? styles.dark : styles.ligth}`}>
            <input 
                className={styles.input}
                type='text' 
                value={keywords} 
                onChange={(e) => setKeyWords(e.target.value)}
                placeholder='Trump'/>
        </div>
    )
};

export default Search;