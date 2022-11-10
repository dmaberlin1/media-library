import React, {useState} from 'react';
import styles from './Categories.module.css'


const categoriesData=[
    {index:0,title:'Books'},
    {index:1,title:'Films'},
    {index:2,title:'Music'}
]


const Categories = ({setIndex}) => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexHandler=(value)=>{
        setActiveIndex(value)
        setIndex(value)
    }

    const resultCategories=[categoriesData.map((category)=>{

        return (
          <li
          key={category.index}
          onClick={()=>activeIndexHandler(category.index)}
          className={activeIndex===category.index ? styles.active:''}
          >
              {category.title}
          </li>

        )

    })]

    return (
      <div className={styles.categories}>
<ul>
    {resultCategories}
</ul>
      </div>
    );
};

export default Categories;
