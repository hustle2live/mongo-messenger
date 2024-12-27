'use client';
import Form from 'next/form';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import userLogo from '@/images/burger.jpg';

import styles from './chat.module.scss';

export const ChatComponent = ({ isOpened, chatList, userId }) => {
   const [chatData, setChatData] = useState([]);

   useEffect(() => {
      if (!isOpened) {
         setChatData([]);
         return;
      }
      const idx = chatList.findIndex(({ _id }) => _id === isOpened);

      if (idx >= 0) {
         setChatData(chatList[idx]['messages']);
      }
   }, [isOpened]);
   // }, [isOpened, chatList]);

   const align = (prop) => (prop ? '_left' : '_right');
   const messageClassName = (position) => styles[`chat_wrapper__message${position}`];

   console.log(chatData);

   return (
      <div className={styles.chat_wrapper}>
         <div className={styles.chat_wrapper__heading}>
            <Image width={20} height={20} src={userLogo} alt='active user icon' />
            <span className='capitalize'>{'data.currentUser'}</span>
         </div>
         <div className={styles.chat_wrapper__dialog}>
            {chatData.length < 1
               ? ''
               : chatData.map(({ _id, text, user_id, created_at }) => (
                    <div key={_id} className={styles.chat_wrapper__message}>
                       <p className={messageClassName(align(user_id === userId))}>
                          {text} <span>{created_at}</span>
                       </p>
                    </div>
                 ))}
         </div>
         <Form className={styles.chat_wrapper__sendform} action='/search'>
            <input name='query' value={'message'} onChange={() => {}} placeholder='write a message' />
            <button type='submit'>Submit</button>
         </Form>
      </div>
   );
};
