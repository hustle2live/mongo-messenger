'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import burgerImage from '@/images/burger.jpg';

import styles from '@/styles/global.module.scss';

import { mockdata } from '../mockdata.js';

export const MenuView = (chatlist = []) => {
   const [chatData, setChatData] = useState([]);

   useEffect(() => {
      setChatData(mockdata);
   }, []);

   console.log(chatData);

   return (
      <ul>
         Merry Christmas
         {chatData.length < 1 ? (
            <p>Chat is empty</p>
         ) : (
            chatData.map((chat, idx) => <li key={chat._id}>{chat.firstname}</li>)
         )}
      </ul>
   );
};

const Page = () => {
   const ChatView = () => {
      return <></>;
   };

   return (
      <>
         <h1 className={styles.heading}>Wellcome to Next.js App</h1>
         <p className={styles.text}> Hello World</p>
         <Image src={burgerImage} alt='Picture of the author' width={300} height={300} />
         <>
            {/* <MenuView chatlist={chatStore} /> */}
            <MenuView />
            <ChatView />
         </>
      </>
   );
};

export default Page;
