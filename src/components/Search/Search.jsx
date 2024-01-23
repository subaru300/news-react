import styles from './Search.module.css';

const Search = ({ keywords, setKeyWords }) => {
    return (
        <div className={styles.search}>
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