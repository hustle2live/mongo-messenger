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
   const [chatName, setChatName] = useState('');

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!isOpened) {
         setChatData([]);
         return;
      }
      const idx = chatList.findIndex(({ _id }) => _id === isOpened);

      if (idx >= 0) {
         const chatElement = chatList[idx];
         setChatData(chatElement['messages']);
         const { firstname, lastname } = chatElement;
         setChatName(`${firstname} ${lastname}`);
      }
   }, [isOpened, chatList]);

   const align = (prop) => (prop ? '_left' : '_right');
   const messageClassName = (position) => styles[`chat_wrapper__message${position}`];

   return (
      <div className={styles.chat_wrapper}>
         <div className={styles.chat_wrapper__heading}>
            <Image width={40} height={40} src={userLogo} alt='active user icon' />
            <span className='capitalize'>{chatName}</span>
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
