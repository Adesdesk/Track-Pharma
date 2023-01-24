import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <div className={styles.landingpage}>
        <div className='w-full h-screen relative'>
          
          <div className='p-4 md:w-10/12 md:mx-auto'>
            <div className='w-1/2'>
              <p className='text-5xl font-bold text-white pt-36 leading-normal'>
                Transparency in 
                <span className='bg-clip-text text-transparent bg-gradient-to-br from-pharmaGreen-700 to-yellow-400'> healthcare</span>, 
                powered by 
                <span className='bg-clip-text text-transparent bg-gradient-to-br from-pharmaGreen-700 to-yellow-500'> blockchain</span>
            </p>
            <p className='text-white mt-8 mb-16'>
              Empowering healthcare through decentralization: the future of pharmaceutical supply chain management is here!
            </p>
            {/*<Link href='/products' className='py-4 px-6 text-white font-bold text-2xl rounded-md bg-gradient-to-br from-pharmaGreen-700 to-yellow-500'>Explore Products</Link>*/}
            <Link href='/products' className='block py-4 px-6 text-white font-bold text-2xl 
            rounded-md bg-gradient-to-br from-pharmaGreen-700 to-yellow-500 md:text-3xl lg:text-4xl 
            xl:text-5xl md:py-6 lg:py-8 xl:py-10 md:px-8 lg:px-10 xl:px-12'>Explore Products</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
