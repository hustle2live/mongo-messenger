'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import burgerImage from '@/images/burger.jpg';

import styles from '@/styles/global.module.scss';

import { MainMenu } from '@/components/menu/menu.component';

const Page = () => {
   const ChatView = () => {
      return <></>;
   };

   return (
      <>
         <h1 className={styles.heading}>Wellcome to Next.js App</h1>
         <p className={styles.text}> Hello World</p>
         <Image src={burgerImage} alt='Picture of the author' width={120} height={120} />
         <>
            {/* <MenuView chatlist={chatStore} /> */}
            <MainMenu />
            <ChatView />
         </>
      </>
   );
};

export default Page;
