'use client';

import React from 'react';
import { useEffect, useState } from 'react';

import { useAppDispatch, useAppSelector } from '@/store/hooks';

import styles from '@/styles/global.module.scss';

import { MenuComponent } from '@/components/menu/menu.component';
import { ChatComponent } from '@/components/chat/chat.component';

import { socket } from 'socket/socket';

import { actions as authActions } from '@/store/reducers/auth/auth.slice';
import { actions as chatActionsCreator } from '@/store/reducers/chat/chat';
import { socketListener } from 'socket/listener';

const Page = () => {
   const dispatch = useAppDispatch();
   const { isOpened } = useAppSelector(({ chatReducer }) => chatReducer);
   const { chatList } = useAppSelector(({ chatReducer }) => chatReducer);
   const { userId } = useAppSelector(({ authReducer }) => authReducer);

   const [filteredList, setFilteredList] = useState(chatList);
   const [filter, setFilter] = useState('');

   const filterHandler = () => {
      if (!filter) {
         setFilteredList(chatList);
         return;
      }
      try {
         const regex = new RegExp(filter, 'gi');
         const list = chatList.filter(({ firstname, lastname }) => firstname.match(regex) || lastname.match(regex));
         setFilteredList(list);
      } catch (error) {
         console.log(error);
      }
   };

   useEffect(() => {
      console.log('App running');
      dispatch(chatActionsCreator.fetchChats());

      try {
         socket.connect();
         const actions = {
            income: (data) => {
               dispatch(chatActionsCreator.setNewMessage(data));
               console.log('income message!');
            },
            connect: (data) => {
               dispatch(authActions.login(data));
               console.log('connected');
            }
         };
         socketListener(socket, dispatch, actions);
      } catch (error) {
         console.log(error);
      }
      return () => {
         socket.disconnect();
      };
   }, []);

   useEffect(() => {
      filterHandler();
   }, [chatList, filter, setFilter]);

   return (
      <>
         <h1 className={styles.heading}>Wellcome to Next.js App</h1>

         <div className={styles.main_content}>
            <MenuComponent chatList={filteredList} setFilter={setFilter} />
            <ChatComponent isOpened={isOpened} chatList={chatList} userId={userId} />
         </div>
      </>
   );
};

export default Page;
