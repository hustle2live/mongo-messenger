'use client';

import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks.js';

import Image from 'next/image';
import IconTrash from '@/images/trash-bin.svg';
import IconEdit from '@/images/edit.svg';
import IconPlus from '@/images/add-plus.svg';

import { actions as chatActionCreator } from '@/store/reducers/chat/chat.js';

import burgerImage from '@/images/burger.jpg';
import SVGImage from '@/images/christmas-tree-svgrepo-com.svg';

import styles from './menu.module.scss';
import { FormElement } from '../form/form.component.jsx';

const ChatsListElement = ({ chatList, handleChatClick, handleChatDelete, handleChatEdit, handleChatAdd }) => {
   const { isOpened } = useAppSelector(({ chatReducer }) => chatReducer);

   const [activeChat, setActiveChat] = useState(isOpened);
   useEffect(() => {
      setActiveChat(isOpened);
   }, [isOpened]);

   return (
      <div className={styles.chats_container}>
         <p className={styles.chats_container__heading}>
            Christmas Chats <Image src={SVGImage} alt='tree' width={34} height={30} unoptimized />
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
                        onClick={() => {
                           handleChatClick(_id);
                        }}
                     >
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
                           {messages.length > 0 ? (
                              <>
                                 <p className={styles.chats_list__chat_last_text}>
                                    {[...messages].reverse()[0]?.text ?? ''}
                                 </p>
                                 <p className={styles.chats_list__chat_last_date}>
                                    {[...messages].reverse()[0]?.created_at ?? ''}
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

export const MenuComponent = ({ chatList }) => {
   const dispatch = useAppDispatch();
   const [showForm, setShowForm] = useState(false);
   const [formProps, setFormProps] = useState({});

   const handleChatClick = (id) => {
      dispatch(chatActionCreator.setOpened(id));
   };
   const handleChatDelete = (id) => {
      dispatch(chatActionCreator.deleteChat({ chatId: id }));
   };
   const handleChatEdit = ({ id, firstName, lastName }) => {
      setShowForm(true);
      setFormProps({
         chatId: id,
         firstname: firstName,
         lastname: lastName,
         actionHandler: chatActionCreator.updateChat
      });
   };
   const handleChatAdd = () => {
      setShowForm(true);
      setFormProps({ actionHandler: chatActionCreator.createChat, createNew: true });
   };

   // const [chatData, setChatData] = useState([]);
   console.log(' chatList 1 ', chatList);

   // useEffect(() => {
   //    setChatData(chatList);
   // }, []);

   // console.log(chatData);

   const ChatHeadingElement = () => {
      return (
         <div className={styles.searchbar_container}>
            <div className={styles.searchbar_container__favourites}>
               <div>
                  <Image src={burgerImage} width={20} height={20} alt='favourites users and chats' />
                  <p className='capitalize'>{'data.currentUser'}</p>
               </div>
            </div>

            <div className={styles.searchbar_container__search_form}>
               <label htmlFor='live_search'>Search</label>
               <input id='live_search' value={''} onChange={() => {}} type='text' />
               <button onClick={() => {}}>
                  <span className=''>Cancel</span>
               </button>
            </div>
         </div>
      );
   };

   return (
      <div className={styles.menu}>
         <ChatHeadingElement />
         <ChatsListElement
            chatList={chatList}
            handleChatClick={handleChatClick}
            handleChatDelete={handleChatDelete}
            handleChatEdit={handleChatEdit}
            handleChatAdd={handleChatAdd}
         />
         <FormElement formProps={formProps} display={showForm} setDisplay={setShowForm} />
      </div>
   );
};
