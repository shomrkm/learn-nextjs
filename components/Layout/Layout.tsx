import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../../styles/utils.module.css';

const NAME = 'Shomrkm Code';
const SITE_TITLE = 'Next.js blog';

type Props = {
  children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <header className={styles.header}>
        <Image
          src='/images/profile.png'
          alt='profile'
          width={72}
          height={72}
          className={utilStyles.borderCircle}
        />
        <h1 className={utilStyles.heading2Xl}>{NAME}</h1>
      </header>
      <main>{children}</main>
    </div>
  );
};
