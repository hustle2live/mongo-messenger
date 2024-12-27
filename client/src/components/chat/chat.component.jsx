'use client';
import Form from 'next/form';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import userLogo from '@/images/burger.jpg';

import styles from './chat.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { actions as chatActionCreator } from '@/store/reducers/chat/chat';

export const ChatComponent = ({ isOpened, chatList, userId }) => {
   const [chatData, setChatData] = useState([]);
   const [formValue, setFormValue] = useState('');

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!isOpened) {
         setChatData([]);
         return;
      }
      const idx = chatList.findIndex(({ _id }) => _id === isOpened);

      if (idx >= 0) {
         setChatData(chatList[idx]['messages']);
      }
   }, [isOpened, chatList]);

   const align = (prop) => (prop ? '_left' : '_right');
   const messageClassName = (position) => styles[`chat_wrapper__message${position}`];

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
         <Form
            className={styles.chat_wrapper__sendform}
            action={() => {
               const newMessage = { textMessage: formValue, chatId: isOpened };
               dispatch(chatActionCreator.createMessage(newMessage));
               setFormValue('');
            }}
         >
            <input
               disabled={!isOpened}
               name='query'
               value={formValue}
               onChange={(e) => setFormValue(e.target.value)}
               placeholder='write a message'
            />
            <button type='submit'>Submit</button>
         </Form>
      </div>
   );
};
