import ProductModal from '@/components/ProductModal'
import { PHARMA_ABI, PHARMA_ADDRESS } from '@/constants'
import { Contract } from 'ethers'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAccount, useSigner } from 'wagmi'
import ProductCard from '../../components/products/ProductCard'
import { formatItem } from '../../utils/utils'

function ProductIndex() {

  const { data: signer } = useSigner()
  const { isConnected } = useAccount()


  const [allItems, setAllItems] = useState();
  const getAllItems = async() => {
    try {
        if(isConnected) {

            const contractInstance = new Contract(
                PHARMA_ADDRESS,
                PHARMA_ABI,
                signer
            );
            
            const allItems = await contractInstance.getAllItems();
            const formattedItems = allItems.map(item => formatItem(item))
            console.log("🚀 ~ file: index.js:180 ~ getAllItems ~ formattedItems", formattedItems)

            setAllItems(formattedItems);
            
        }
    } catch (error) {
        console.log('Could not get all items', error);
    }
  }
  

  const [myItems, setMyItems] = useState();
  const getMyItems = async() => {
    try {
        if(isConnected) {
    
            const contractInstance = new Contract(
                PHARMA_ADDRESS,
                PHARMA_ABI,
                signer
            );
            
            const myItems = await contractInstance.getMyItems();
            const formattedItems = myItems.map(item => formatItem(item))
            console.log("🚀 ~ file: index.js:191 ~ getMyItems ~ formattedItems", formattedItems)

            setMyItems(formattedItems);
            
        }
    } catch (error) {
        console.log('Could not get my items', error);
    }
  }

  
  const [myAccountList, setMyAccountList] = useState();
  const getMyAccountsList = async() => {
    try {
        if(isConnected) {
    
            const contractInstance = new Contract(
                PHARMA_ADDRESS,
                PHARMA_ABI,
                signer
            );
            
            const myUsersList = await contractInstance.getMyAccountsList();
            setMyAccountList(myUsersList)                                
        }
    } catch (error) {
        console.log('Could not get mu accounts list', error);
    }
}
  

  const sellItem = async(data) => {

    const { accountId, barcodeId } = data
        console.log("🚀 ~ file: index.js:247 ~ sellItem ~ accountId, barcodeId", accountId, barcodeId)
        
    try {
        if(isConnected) {

            const contractInstance = new Contract(
              PHARMA_ADDRESS,
              PHARMA_ABI,
              signer
            );

            const currentTimestamp = Date.now(); // current time epoch

            const response = await contractInstance.sellItem(accountId, barcodeId, currentTimestamp);
            console.log("🚀 ~ file: ContextWrapper.js:247 ~ sellItem ~ response", response)
            setShowModal(false);

        }
    } catch (error) {
        console.log('Could not sell item', error);
        return null;
    }
  }  

  useEffect(() => {
    if(!signer) return;
    getAllItems();
    getMyAccountsList();
  },[signer])


  // Modal Logic  
  const [showModal, setShowModal] = useState(false);
  const [modalItem, setModalItem] = useState({});

  function openModal(item) {
    setModalItem({item, myAccountList})
    setShowModal(true);
  }

  function closeModal() {
    console.log('set close');
    setShowModal(false);
  }

  return (
    
    <div className='bg-white w-full h-full shadow-md rounded-md p-2 md:p-10'>
      <div className='flex justify-between items-center w-full'>
        <p className='text-2xl font-bold mb-8'>Products</p>
        <Link href="/products/new" className='border border-pharmaGreen-700 py-2 px-4 rounded-md text-xs text-pharmaGreen-700 transition ease-linear duration-200 hover:bg-pharmaGreen-500 hover:text-pharmaGreen-700'>Add new product</Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
        {
          allItems && allItems.map((item, index) => (
            <ProductCard key={index} item={item} openModal={openModal} />
          ))
        }
      </div>
      
      {/* MODAL */}
      {
        showModal &&  <ProductModal isVisible={showModal} onClose={closeModal} modalItem={modalItem} shouldCloseOnOverlayClick={false} sellItem={sellItem} />
      }
    </div>
  )
}

export default ProductIndex 