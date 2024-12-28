'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks.js';

import Image from 'next/image';
import IconTrash from '@/images/trash-bin.svg';
import IconEdit from '@/images/edit.svg';
import IconPlus from '@/images/add-plus.svg';

import burgerImage from '@/images/burger.jpg';
import SVGImage from '@/images/christmas-tree-svgrepo-com.svg';

import styles from './menu.module.scss';

import { cutString, notEmpty, lastElem, toLocalDate } from 'helpers';

import { actions } from '@/store/reducers/auth/auth.slice';

export const ChatsListElement = ({ chatList, handleChatClick, handleChatDelete, handleChatEdit, handleChatAdd }) => {
   const { isOpened, incomes } = useAppSelector(({ chatReducer }) => chatReducer);
   const { autoResponse } = useAppSelector(({ authReducer }) => authReducer);
   const [activeChat, setActiveChat] = useState(isOpened);
   const isNewIncome = (id) => incomes.includes(id);
   const autoMode = autoResponse ? '__green' : '__red';

   const dispatch = useAppDispatch();

   useEffect(() => {
      setActiveChat(isOpened);
   }, [isOpened]);

   const handleAutoResponse = () => {
      dispatch(actions.toggleAutoResponse());
   };

   return (
      <div className={styles.chats_container}>
         <p className={styles.chats_container__heading}>
            Christmas Chats <Image src={SVGImage} alt='tree' width={34} height={30} unoptimized />
            <i> with </i>{' '}
            <span onClick={handleAutoResponse} className={styles[`autoResponse${autoMode}`]}>
               {' '}
               Auto Response{' '}
            </span>
         </p>
         <ul className={styles.chats_list}>
            {chatList.length < 1 ? (
               <p>Chat is empty</p>
            ) : (
               chatList.map(({ _id, firstname, lastname, users, messages }) => {
                  const selected = _id === activeChat ? styles.selected : '';

                  return (
                     <li
                        key={_id}
                        className={`${styles.chats_list__item} ${selected}`}
                        onClick={() => handleChatClick(_id)}
                     >
                        <div className={styles.chats_list__item_icon}>
                           <Image
                              className={styles.chats_list__chat_image}
                              src={burgerImage}
                              width={30}
                              height={30}
                              alt='chat preview'
                           />
                           {isNewIncome(_id) && (
                              <Image
                                 className={styles.chats_list__chat_notifier}
                                 src={burgerImage}
                                 width={10}
                                 height={10}
                                 alt='new message notifier'
                              />
                           )}
                        </div>
                        <div className={styles.chats_list__item_content}>
                           <p className={styles.chats_list__chat_name}>
                              {firstname} {lastname}
                           </p>
                           {notEmpty(messages) ? (
                              <>
                                 <p className={styles.chats_list__chat_last_text}>
                                    {cutString(lastElem(messages).text, 40, '...')}
                                 </p>
                                 <p className={styles.chats_list__chat_last_date}>
                                    {cutString(toLocalDate(lastElem(messages).created_at), 12)}
                                 </p>
                              </>
                           ) : (
                              ''
                           )}
                           <div className={styles.chats_list__buttons_edit}>
                              <Image
                                 src={IconEdit}
                                 width={20}
                                 height={30}
                                 alt='edit'
                                 className={styles.chats_list__icon_edit}
                                 onClick={(e) => {
                                    handleChatEdit({
                                       id: _id,
                                       firstName: firstname,
                                       lastName: lastname
                                    });
                                    e.stopPropagation();
                                 }}
                              />
                              <Image
                                 src={IconTrash}
                                 width={20}
                                 height={30}
                                 alt='delete'
                                 className={styles.chats_list__icon_delete}
                                 onClick={(e) => {
                                    if (window.confirm('Are You Sure to Delete This Chat ?')) {
                                       handleChatDelete(_id);
                                    }
                                    e.stopPropagation();
                                 }}
                              />
                           </div>
                        </div>
                     </li>
                  );
               })
            )}
         </ul>
         <button className={styles.chats__button_add} onClick={handleChatAdd}>
            <Image src={IconPlus} width={50} height={50} alt='plus' />
         </button>
      </div>
   );
};
