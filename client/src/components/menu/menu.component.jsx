'use client';

import { useAppDispatch } from '@/store/hooks.js';
import { actions as chatActionCreator } from '@/store/reducers/chat/chat.js';
import { ChatHeadingElement } from './menu-heading';
import { ChatsListElement } from './menu-list';

import styles from './menu.module.scss';

export const MenuComponent = ({ chatList, setFilter, setShowForm, setFormProps, disableEvents }) => {
   const dispatch = useAppDispatch();

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
      <div className={`${styles.menu} ${disableEvents}`}>
         <ChatHeadingElement setFilter={setFilter} />
         <ChatsListElement
            chatList={chatList}
            handleChatClick={handleChatClick}
            handleChatDelete={handleChatDelete}
            handleChatEdit={handleChatEdit}
            handleChatAdd={handleChatAdd}
         />
      </div>
   );
};
