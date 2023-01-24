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
            <Link href='/products' className='block py-2 px-4 text-white font-bold text-xl 
            rounded-md bg-gradient-to-br from-pharmaGreen-700 to-yellow-500 md:text-2xl lg:text-2xl 
            xl:text-2xl md:py-4 lg:py-4 xl:py-4 md:px-6 lg:px-6 xl:px-6'>Explore Products</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
