import React from 'react';
import Categories from "../Categories/Categories";
import styles from './Header.module.css'
const Header = ({setIndex}) => {
    return (
      <div className={styles.header}>
          <div className={styles.container}>

              <h1>Media Library</h1>
              <Categories setIndex={setIndex}></Categories>

          </div>
      </div>
    );
};

export default Header;
