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
      <html lang='en' className={`${montserrat.variable} ${inter.variable}`}>
         <body>{children}</body>
      </html>
   );
};

export default RootLayout;