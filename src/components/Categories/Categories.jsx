import { forwardRef } from 'react';
import styles from './Categories.module.css';

const Categories = forwardRef(({ categories, setSelectedCategorie, selectedCategorie }, ref) => {
    return (
<div ref={ref} className={styles.categories}>
            <button 
             className={!selectedCategorie ? styles.active : styles.item} 
             onClick={() => setSelectedCategorie(null)}>All
            </button>
        {categories.map((categ) => {
            return (
                <button 
                    className={selectedCategorie === categ ? styles.active : styles.item} 
                    key={categ}
                    onClick={() => setSelectedCategorie(categ)}>{categ}
                </button>
            )
        })}
</div>
    )
});

Categories.displayName = 'Categories';

export default Categories;