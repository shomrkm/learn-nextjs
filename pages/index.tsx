import Link from 'next/link';
import Image from 'next/image';

import styles from '../styles/Home.module.css';
import utilStyle from '../styles/utils.module.css';
import { Layout } from '../components/Layout';
import { BlogOutline } from '../components/BlogOutline';

export default function Home() {
  return (
    <Layout>
      <section className={utilStyle.headingMd}>
        <p>私は shomrkm です。好きな言語は TypeScript です</p>
      </section>
      <section className={`${utilStyle.headingMd} ${utilStyle.padding1px}`}>
        <h2 className={utilStyle.headingLg}>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          <BlogOutline
            title='SSGとSSRの使い分けの場面はいつなのか'
            date='January 02, 2023'
            thumbnail='/images/thumbnail01.jpg'
          />
          <BlogOutline
            title='SSGとSSRの使い分けの場面はいつなのか'
            date='January 02, 2023'
            thumbnail='/images/thumbnail01.jpg'
          />
          <BlogOutline
            title='SSGとSSRの使い分けの場面はいつなのか'
            date='January 02, 2023'
            thumbnail='/images/thumbnail01.jpg'
          />
          <BlogOutline
            title='SSGとSSRの使い分けの場面はいつなのか'
            date='January 02, 2023'
            thumbnail='/images/thumbnail01.jpg'
          />
        </div>
      </section>
    </Layout>
  );
}
