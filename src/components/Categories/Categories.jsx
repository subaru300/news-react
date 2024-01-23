import styles from './Categories.module.css';


const Categories = ({ categories, setSelectedCategorie, selectedCategorie }) => {

    return (
<div className={styles.categories}>
        {categories.map((categ) => {
            return (
                <button 
                    className={selectedCategorie === categ ? styles.active : styles.item} 
                    key={categ}
                    onClick={() => setSelectedCategorie(categ)}>{categ}</button>
            )
        })}
</div>
    )
};

export default Categories;