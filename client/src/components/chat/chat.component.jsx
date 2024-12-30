'use client';
import Form from 'next/form';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import userLogo from '@/images/burger.jpg';
import backLogo from '@/images/back-2.svg';

import styles from './chat.module.scss';
import { useAppDispatch } from '@/store/hooks';
import { actions as chatActionCreator } from '@/store/reducers/chat/chat';
import { cutString } from 'helpers';

export const ChatComponent = ({ isOpened, chatList, userId, disableEvents }) => {
   const [messages, setChatMessages] = useState([]);
   const [formValue, setFormValue] = useState('');
   const [chatName, setChatName] = useState('');
   const chatRef = useRef(null);

   const dispatch = useAppDispatch();

   useEffect(() => {
      if (!isOpened) {
         return setChatMessages([]);
      }

      const idx = chatList.findIndex(({ _id }) => _id === isOpened);

      if (idx === -1) {
         return;
      }

      const { messages, firstname, lastname } = chatList[idx];

      setChatMessages(messages);
      setChatName(`${firstname} ${lastname}`);
   }, [isOpened, chatList]);

   useEffect(() => {
      if (chatRef.current) {
         chatRef.current.scrollTop = chatRef.current.scrollHeight;
      }
   }, [messages]);

   const align = (prop) => (prop ? '_left' : '_right');
   const messageClassName = (position) => styles[`chat_wrapper__message${position}`];
   const mobileViewClass = isOpened ? styles.active : '';

   return (
      <div className={`${styles.chat_wrapper} ${mobileViewClass} ${disableEvents}`}>
         <div className={styles.chat_wrapper__heading}>
            <button
               onClick={() => dispatch(chatActionCreator.setOpened(null))}
               className={styles.chat_wrapper__button_back}
            >
               <Image width={40} height={40} src={backLogo} alt='back to list' />
            </button>
            <Image
               className={styles.chat_wrapper__userLogo}
               width={40}
               height={40}
               src={userLogo}
               alt='active user icon'
            />
            <span className='capitalize'>{chatName}</span>
         </div>
         <div className={styles.chat_wrapper__dialog} ref={chatRef}>
            {messages.length < 1
               ? ''
               : messages.map(({ _id, text, user_id, created_at }) => (
                    <div key={_id} className={styles.chat_wrapper__message}>
                       <p className={messageClassName(align(user_id === userId))}>
                          {text} <span> {cutString(created_at)}</span>
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
