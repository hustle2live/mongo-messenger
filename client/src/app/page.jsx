'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import burgerImage from '@/images/burger.jpg';

import { useSelector, useDispatch } from 'react-redux';

import styles from '@/styles/global.module.scss';

import { MainMenu } from '@/components/menu/menu.component';
import { ChatView } from '@/components/chat/chat.component';

import { socket } from 'socket/socket';

import { actions as chatActionsCreator } from '@/store/reducers/chat/chat';
const Page = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      console.log('App running');
      dispatch(chatActionsCreator.fetchChats());

      return () => {
         socket.disconnect();
      };
   }, []);

   return (
      <>
         <h1 className={styles.heading}>Wellcome to Next.js App</h1>

         <div className={styles.main_content}>
            <MainMenu />
            <ChatView />
         </div>
      </>
   );
};

export default Page;
