import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

import { Post } from '../types';

const POST_DIRECTORY = path.join(process.cwd(), 'posts');

/**
 * Extract blog posts data from mardkdown files.
 */
export const getPostsData = (): Post[] => {
  const fileNames = fs.readdirSync(POST_DIRECTORY);
  return fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(POST_DIRECTORY, fileName);
    const contents = fs.readFileSync(fullPath, 'utf-8');
    const { data, content } = matter(contents);
    return {
      id,
      ...data,
      content,
    } as Post;
  });
};
