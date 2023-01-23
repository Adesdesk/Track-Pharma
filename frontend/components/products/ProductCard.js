import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '../../public/logo4.png'

function ProductCard({item, openModal}) {
  return (
    <div className='flex h-full border border-gray-200 shadow-md rounded-md'>
        <div className='h-full w-4/12 bg-pharmaGreen-600 rounded-l-md'>            
            <Image className='h-full w-full object-contain' src={logo} alt="logo" />
        </div>
        <div className='flex w-3/4 p-4'>
            <div className='w-1/2 space-y-3'>
                <p className='text-sm font-semibold'>{item.name}</p>
                <p className='text-xs font-thin'>{item.barcodeId} days</p>
                <p className='text-xs font-thin'>MFG  Date: {item.manufacturedDate}</p>
                <p className='text-xs font-thin'>Expiry Date: {item.expiringDate}</p>
            </div>
            <div className='flex flex-col justify-center items-end w-1/2 space-y-2'>
                <Link href={`products/${item.barcodeId}`} className='text-white text-xs font-semibold py-1 px-4 w-8/12 text-center bg-pharmaGreen-600 rounded-md hover:bg-pharmaGreen-700 transition ease-linear duration-200'>Details</Link>
                
                <button onClick={()=>openModal(item)} className="text-white text-xs font-semibold py-1 px-4 w-8/12 text-center bg-pharmaGreen-600 rounded-md hover:bg-pharmaGreen-700 transition ease-linear duration-200 cursor-pointer">Sell</button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard