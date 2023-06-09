import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <Link href="/images">
            <p>Images</p>
          </Link>
          <Link href="/list">
            <p>users</p>
          </Link>
          <Link href="/demo">
            <p>demo</p>
          </Link>
        </div>
      </main>
    </>
  )
}
