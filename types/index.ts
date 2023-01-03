export type PostMetaData = {
  title: string;
  date: string;
  thumbnail: string;
};

export type Post = {
  id: string;
  blogContentHTML: string;
} & PostMetaData;
