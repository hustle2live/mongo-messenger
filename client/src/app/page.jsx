import Image from 'next/image';
import burgerImage from '@/images/burger.jpg';

import styles from '../styles/global.module.scss';

const Page = () => {
   return (
      <div>
         <h1 className={styles.heading}>Wellcome to Next.js App</h1>
         <p className={styles.text}> Hello World</p>
         <Image src={burgerImage} alt='Picture of the author' width={300} height={300} />
      </div>
   );
};

export default Page;
