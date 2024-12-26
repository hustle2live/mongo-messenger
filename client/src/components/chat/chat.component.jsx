'use client';
import Form from 'next/form';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import userLogo from '@/images/burger.jpg';

import { mockdata } from '../../mockdata.js';

import styles from './chat.module.scss';

export const ChatView = () => {
   const [chatData, setChatData] = useState([]);

   useEffect(() => {
      const chatArrayData = mockdata[1]['messages'];
      if (chatArrayData.length > 0) setChatData(chatArrayData);
   }, []);

   console.log(chatData);

   const messageClassName = (prop) => (prop ? styles.chat_wrapper__message_right : styles.chat_wrapper__message_left);

   return (
      <div className={styles.chat_wrapper}>
         <div className={styles.chat_wrapper__heading}>
            <Image width={20} height={20} src={userLogo} alt='active user icon' />
            <span className='capitalize'>{'data.currentUser'}</span>
         </div>
         <div className={styles.chat_wrapper__dialog}>
            {chatData.length < 1
               ? ''
               : chatData.map(({ _id, text, user_id, created_at, updated_at }, idx) => (
                    <div key={_id} className={styles.chat_wrapper__message}>
                       {/* <Image width={20} height={20} src={userLogo} alt='active user icon' /> */}
                       <p className={messageClassName(idx % 2 === 0)}>
                          {text} <span>{created_at}</span>
                       </p>
                    </div>
                 ))}
         </div>
         <Form className={styles.chat_wrapper__sendform} action='/search'>
            {/* On submission, the input value will be appended to 
          the URL, e.g. /search?query=abc */}
            <input name='query' value={'message'} onChange={() => {}} placeholder='write a message' />
            <button type='submit'>Submit</button>
         </Form>
      </div>
   );
};
