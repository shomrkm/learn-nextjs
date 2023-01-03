import React, { FC } from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';

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
      {postData.title}
      <br />
      {postData.date}
      <br />
      {postData.blogContentHTML}
    </Layout>
  );
};

export default BlogPost;
