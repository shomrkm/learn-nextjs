import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

import { Post, PostMetaData } from '../types';

const POST_DIRECTORY = path.join(process.cwd(), 'posts');

type PostData = Omit<Post, 'blogContentHTML'>;

/**
 * Extract blog posts data from mardkdown files.
 */
export const getPostsData = (): PostData[] => {
  const fileNames = fs.readdirSync(POST_DIRECTORY);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(POST_DIRECTORY, fileName);
    const fileContent = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContent);
    return {
      id,
      ...data,
    } as PostData;
  });
};

/**
 * Get paths for getStaticPath method
 */
export const getAllPostIds = (): { params: { id: string } }[] => {
  const fileNames = fs.readdirSync(POST_DIRECTORY);
  return fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
};

/**
 * Get a blog post from a markdown file according to id
 */
export const getPostData = async (id: string): Promise<Post> => {
  const filePath = path.join(POST_DIRECTORY, `${id}.md`);
  const fileContent = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(fileContent);

  const blogContent = await remark().use(html).process(content);
  const blogContentHTML = blogContent.toString();

  return {
    id,
    blogContentHTML,
    ...data,
  } as Post;
};
