import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';
import utilStyle from '../../styles/utils.module.css';

interface Props {
  id: string;
  title: string;
  date: string;
  thumbnail: string;
}

export const BlogOutline = ({ id, title, date, thumbnail }: Props) => {
  return (
    <article key={id}>
      <Link href={`/posts/${id}`}>
        <Image
          src={thumbnail}
          alt=''
          width={480}
          height={320}
          priority={true}
          className={styles.thumbnailImage}
        />
      </Link>
      <Link href={`/posts/${id}`} className={utilStyle.boldText}>
        {title}
      </Link>
      <br />
      <small className={utilStyle.lightText}>{date}</small>
    </article>
  );
};
