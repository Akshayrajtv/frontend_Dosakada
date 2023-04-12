import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Featured from '@/components/Featured'
import DosaList from '@/components/DosaList'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Dosa kada</title>
        <meta name="description" content="Best Restaurant in Edappal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Featured/>
        <DosaList/>
      </main>
    </>
  )
}
