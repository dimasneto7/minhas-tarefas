import styles from './styles.module.css'
import Head from 'next/head'
import { GetServerSideProps } from 'next'

import { getSession } from 'next-auth/react'

export default function Dashboard() {
  return (
    <div className={styles.containter}>
      <Head>
        <title>Meu painel de Tarefas</title>
      </Head>

      <h1>Página Painel</h1>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  const session = await getSession({ req })

  if (!session?.user) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  return {
    props: {},
  }
}
