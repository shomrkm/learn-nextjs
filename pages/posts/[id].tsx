import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { ParsedUrlQuery } from 'querystring';

import utilStyles from '../../styles/utils.module.css';
import { Layout } from '../../components/Layout';
import { getAllPostIds, getPostData } from '../../lib/post';
import { Post as BlogPost } from '../../types';

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();

  return {
    paths,
    fallback: false,
  };
};

type Props = {
  postData: BlogPost;
};

type Params = { id: string } & ParsedUrlQuery;

export const getStaticProps: GetStaticProps<Props, Params> = async ({
  params,
}) => {
  const postData = await getPostData(params!.id);
  return {
    props: {
      postData,
    },
  };
};

const BlogPost: FC<Props> = ({ postData }) => {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingX1}>{postData.title}</h1>
        <div className={utilStyles.lightText}>{postData.date}</div>
        {/* NOTE: You should sanitize HTML for product environment */}
        <div dangerouslySetInnerHTML={{ __html: postData.blogContentHTML }} />
      </article>
    </Layout>
  );
};

export default BlogPost;
