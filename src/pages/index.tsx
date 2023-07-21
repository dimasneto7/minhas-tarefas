import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '@/styles/Home.module.css'

import heroImg from '../../public/assets/hero.svg'

import { collection, getDocs } from 'firebase/firestore'

import { db } from '../services/firebaseConnection'

interface HomeProps {
  comments: number
  posts: number
}

export default function Home({ posts, comments }: HomeProps) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Tarefas</title>
      </Head>

      <main className={styles.main}>
        <div className={styles.logoContent}>
          <Image
            className={styles.hero}
            src={heroImg}
            alt="Logo Minhas Tarefas"
            priority
          />
        </div>
        <h1 className={styles.title}>
          Sistema feito para você organizar
          <br /> seus estudos e tarefas
        </h1>

        <div className={styles.infoContent}>
          <section className={styles.box}>
            <span>+{posts} posts</span>
          </section>

          <section className={styles.box}>
            <span>+{comments} comentários</span>
          </section>
        </div>
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const commentRef = collection(db, 'comments')
  const postRef = collection(db, 'tarefas')

  const commentSnapshot = await getDocs(commentRef)
  const postSnapshot = await getDocs(postRef)

  return {
    props: {
      posts: postSnapshot.size || 0,
      comments: commentSnapshot.size || 0,
    },
    revalidate: 60,
  }
}
