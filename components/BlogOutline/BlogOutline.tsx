import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import styles from '../../styles/Home.module.css';
import utilStyle from '../../styles/utils.module.css';

interface Props {
  title: string;
  date: string;
  thumbnail: string;
}

export const BlogOutline = ({ title, date, thumbnail }: Props) => {
  return (
    <article>
      <Link href='/'>
        <Image
          src={thumbnail}
          alt=''
          width={480}
          height={320}
          className={styles.thumbnailImage}
        />
      </Link>
      <Link href='' className={utilStyle.boldText}>
        {title}
      </Link>
      <br />
      <small className={utilStyle.lightText}>{date}</small>
    </article>
  );
};
