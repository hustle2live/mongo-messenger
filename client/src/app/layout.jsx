'use client';

import React from 'react';
import { store } from '@/store/store';
import { Provider } from 'react-redux';

import { Inter, Montserrat } from 'next/font/google';

const inter = Inter({
   variable: '--inter',
   subsets: ['latin'],
   weight: ['300', '400', '700']
});

const montserrat = Montserrat({
   variable: '--montserrat',
   subsets: ['latin'],
   weight: ['300', '400', '700']
});

const RootLayout = ({ children }) => {
   return (
      <Provider store={store}>
         <html id='html' lang='en' className={`${montserrat.variable} ${inter.variable}`}>
            <body id='body'>{children}</body>
         </html>
      </Provider>
   );
};

export default RootLayout;
