import {
  GetStaticProps,
  InferGetStaticPropsType,
  // GetServerSideProps,
} from 'next';

import styles from '../styles/Home.module.css';
import utilStyles from '../styles/utils.module.css';
import { Layout } from '../components/Layout';
import { BlogOutline } from '../components/BlogOutline';
import { getPostsData } from '../lib/post';
import { Post } from '../types';

// SSG の場合
export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};

// SSR の場合
// export const getServerSideProps: GetServerSideProps = async (context) => {
//   return {
//     props: {
//       // コンポーネントへ渡すための props
//     },
//   };
// };

export default function Home({
  allPostsData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <Layout home>
      <section className={utilStyles.headingMd}>
        <p>私は shomrkm です。好きな言語は TypeScript です</p>
      </section>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>📝エンジニアのブログ</h2>
        <div className={styles.grid}>
          {allPostsData.map((post: Post) => (
            <BlogOutline
              key={post.id}
              id={post.id}
              title={post.title}
              date={post.date}
              thumbnail={post.thumbnail}
            />
          ))}
        </div>
      </section>
    </Layout>
  );
}
