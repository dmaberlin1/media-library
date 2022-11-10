import React, {useState} from 'react';

const categiresData=[
    {index:0,title:'Books'},
    {index:1,title:'Films'},
    {index:2,title:'Music'}
]


const Categories = () => {

    const [activeIndex, setActiveIndex] = useState(0);
    const activeIndexHandler=(value)=>{
        setActiveIndex(value)
    }

    const resultCategories=[categiresData.map((category)=>{
        return (
          <li
          key={category.index}
          onClick={()=>activeIndexHandler(category.index)}
          className={activeIndex===category.index ? 'active':''}
          >
              {category.title}
          </li>
        )
    })]

    return (
      <div className={'categories'}>
<ul>
    {resultCategories}
</ul>
      </div>
    );
};

export default Categories;
