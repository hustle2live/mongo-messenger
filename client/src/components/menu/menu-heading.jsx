'use client';

import { useEffect, useState } from 'react';

import Image from 'next/image';

import burgerImage from '@/images/burger.jpg';

import styles from './menu.module.scss';

export const ChatHeadingElement = ({ setFilter }) => {
   const [searchValue, setSearchValue] = useState('');
   useEffect(() => {
      setFilter(searchValue);
   }, [searchValue, setSearchValue]);

   return (
      <div className={styles.searchbar_container}>
         <div className={styles.searchbar_container__favourites}>
            <div>
               <Image src={burgerImage} width={20} height={20} alt='favourites users and chats' />
               <p className='capitalize'>Current User</p>
            </div>
         </div>

         <div className={styles.searchbar_container__search_form}>
            <label htmlFor='live_search'>Search</label>
            <input id='live_search' value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type='text' />
            <button onClick={() => {}}>
               <span className=''>Cancel</span>
            </button>
         </div>
      </div>
   );
};
