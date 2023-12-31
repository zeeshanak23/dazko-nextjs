import Head from 'next/head'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Hero from '../../components/Hero'
import Information from '../../components/Information'
import Join from '../../components/Join'
import Classes from '../../components/Classes'
import Pricing from '../../components/Pricing'
import MemberShip from '../../components/MemberShip'
import Schedules from '../../components/Schedules'
import Trainer from '../../components/Trainer'
import Testimonal from '../../components/Testimonal'
import Blog from '../../components/Blog'
import Form from '../../components/Form'
import Footer from '../../components/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Hero />
        <Information />
        <Join />
        <Classes />
        <Pricing />
        <MemberShip />
        <Schedules />
        <Trainer />
        <Testimonal />
        <Blog />
        <Form />
        <Footer />
      </main>
    </>
  )
}
