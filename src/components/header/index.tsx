import styles from './styles.module.css'
import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session, status } = useSession()

  return (
    <header className={styles.header}>
      <section className={styles.content}>
        <nav className={styles.nav}>
          <Link href="">
            <h1 className={styles.logo}>
              <span>Minhas</span> Tarefas
            </h1>
          </Link>
        </nav>
        <div>
          {session?.user && (
            <Link href="/dashboard" className={styles.dashboard}>
              Meu Painel
            </Link>
          )}

          {status === 'loading' && <></>}
          {session && (
            <button className={styles.loginButton} onClick={() => signOut()}>
              Olá {session?.user?.name}
            </button>
          )}
          {!session && (
            <button
              className={styles.loginButton}
              onClick={() => signIn('google')}
            >
              Acessar
            </button>
          )}
        </div>
      </section>
    </header>
  )
}
