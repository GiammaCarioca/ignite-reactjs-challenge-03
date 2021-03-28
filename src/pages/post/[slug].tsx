import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';
import { FiCalendar, FiClock, FiUser } from 'react-icons/fi';
import Header from '../../components/Header';

import { getPrismicClient } from '../../services/prismic';

import commonStyles from '../../styles/common.module.scss';
import styles from './post.module.scss';

interface Post {
  first_publication_date: string | null;
  data: {
    title: string;
    banner: {
      url: string;
    };
    author: string;
    content: {
      heading: string;
      body: {
        text: string;
      }[];
    }[];
  };
}

interface PostProps {
  post: Post;
}

export default function Post({ post }: PostProps) {
  return (
    <>
      <Header />
      <img
        src="/banner.png"
        alt="Eat Sleep Code Repeat"
        className={styles.banner}
      />
      <main className={commonStyles.container}>
        <div className={styles.post}>
          <div className={styles.postTop}>
            <h1>Título</h1>
            <ul>
              <li>
                <FiCalendar />
                28 Mar 2021
              </li>
              <li>
                <FiUser />
                Thiago Giammattey
              </li>
              <li>
                <FiClock />5 min
              </li>
            </ul>
          </div>

          <article>
            <h2>Título seção</h2>
            <p>
              Lorem, ipsum <a href="/">dolor</a> sit amet consectetur
              adipisicing elit. Sed debitis eligendi eos nihil! Facilis
              molestiae doloribus minus quia similique consectetur{' '}
              <strong>inventore</strong> quisquam cumque, dignissimos, debitis
              placeat? Reprehenderit repudiandae in suscipit?
            </p>
          </article>
        </div>
      </main>
    </>
  );
}

// export const getStaticPaths = async () => {
//   const prismic = getPrismicClient();
//   const posts = await prismic.query(TODO);

//   // TODO
// };

// export const getStaticProps = async context => {
//   const prismic = getPrismicClient();
//   const response = await prismic.getByUID(TODO);

//   // TODO
// };
