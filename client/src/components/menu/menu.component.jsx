'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

import { mockdata } from '../../mockdata.js';

import burgerImage from '@/images/burger.jpg';
import SVGImage from '@/images/christmas-tree-svgrepo-com.svg';

import styles from './menu.module.scss';

export const MainMenu = (chatlist = []) => {
   const [chatData, setChatData] = useState([]);

   useEffect(() => {
      setChatData(mockdata);
   }, []);

   console.log(chatData);

   const ChatHeadingElement = () => {
      return (
         <div className='container'>
            <p>Search</p>
            <input type='text' />
         </div>
      );
   };

   const ChatsListElement = () => {
      return (
         <div className={styles.chats_container}>
            <p className={styles.chats_container__heading}>
               Christmas Chats <Image src={SVGImage} alt='tree' width={34} height={30} unoptimized />
            </p>
            <ul className={styles.chats_list}>
               {chatData.length < 1 ? (
                  <p>Chat is empty</p>
               ) : (
                  chatData.map(({ _id, firstname, lastname, users, messages }) => (
                     <li className={styles.chats_list__item} key={_id}>
                        <div className={styles.chats_list__item_icon}>
                           <Image
                              className={styles.chats_list__chat_image}
                              src={burgerImage}
                              width={30}
                              height={30}
                              alt='chat preview'
                           />
                           <Image
                              className={styles.chats_list__chat_notifier}
                              src={burgerImage}
                              width={10}
                              height={10}
                              alt='new message notifier'
                           />
                        </div>
                        <div className={styles.chats_list__item_content}>
                           <p className={styles.chats_list__chat_name}>
                              {firstname} {lastname}
                           </p>
                           <p className={styles.chats_list__chat_last_text}>{messages.reverse()[0].text}</p>
                           <p className={styles.chats_list__chat_last_date}>{messages.reverse()[0].created_at}</p>
                        </div>
                     </li>
                  ))
               )}
            </ul>
         </div>
      );
   };

   return (
      <>
         <ChatHeadingElement />
         <ChatsListElement />
      </>
   );
};
