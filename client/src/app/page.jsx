'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import burgerImage from '@/images/burger.jpg';

import styles from '@/styles/global.module.scss';

import { MainMenu } from '@/components/menu/menu.component';
import { ChatView } from '@/components/chat/chat.component';

const Page = () => {
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
