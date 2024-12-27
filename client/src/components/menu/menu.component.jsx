'use client';

import { useState } from 'react';
import { useAppDispatch } from '@/store/hooks.js';

import { actions as chatActionCreator } from '@/store/reducers/chat/chat.js';

import styles from './menu.module.scss';
import { FormElement } from '../form/form.component.jsx';

import { ChatHeadingElement } from './menu-heading';
import { ChatsListElement } from './menu-list';

export const MenuComponent = ({ chatList, setFilter }) => {
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

   return (
      <div className={styles.menu}>
         <ChatHeadingElement setFilter={setFilter} />
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
