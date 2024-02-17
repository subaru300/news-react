import { ForwardedRef, forwardRef } from 'react';
import styles from './Categories.module.css';
import { CategoriesType } from '../../interfaces';

interface Props {
    categories: CategoriesType[];
    setSelectedCategorie: (category: CategoriesType | null) => void;
    selectedCategorie: CategoriesType | null;
}

const Categories = forwardRef(({ categories, setSelectedCategorie, selectedCategorie }: Props, ref: ForwardedRef<HTMLDivElement>) => {
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