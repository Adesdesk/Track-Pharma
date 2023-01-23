import ProductModal from '@/components/ProductModal'
import { PHARMA_ABI, PHARMA_ADDRESS } from '@/constants'
import { Contract } from 'ethers'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useAccount, useSigner } from 'wagmi'
import Footer from '../../components/Footer'
import ProductCard from '../../components/products/ProductCard'
import { formatItem } from '../../utils/utils'


// const items = [{
//   "name": "Esta",
//   "manufacturerName": "Zoomdog",
//   "manufacturer": "0x913091f06f5815ce9f53b0b9c9acd23a62491b93",
//   "manufacturedDate": "8/10/2022",
//   "expiringDate": "4/16/2022",
//   "isInBatch": false,
//   "batchCount": 1,
//   "barcodeId": "c5d82c72-9665-431a-b9cc-45a6e227fe8b",
//   "itemImage": "http://dummyimage.com/157x100.png/ff4444/ffffff",
//   "itemType": 1,
//   "usage": "Pellentesque ultrices mattis odio.",
//   "others": null
// }, {
//   "name": "Vi",
//   "manufacturerName": "Izio",
//   "manufacturer": "0x074031321ca0534484fca87f0729d55ffea17f23",
//   "manufacturedDate": "4/3/2022",
//   "expiringDate": "11/15/2022",
//   "isInBatch": true,
//   "batchCount": 2,
//   "barcodeId": "c1e75791-a6a9-46ee-be2a-29327119f1ff",
//   "itemImage": "http://dummyimage.com/152x100.png/cc0000/ffffff",
//   "itemType": 2,
//   "usage": "Nulla justo. Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis. Sed ante. Vivamus tortor. Duis mattis egestas metus. Aenean fermentum.",
//   "others": null
// }, {
//   "name": "Adriaens",
//   "manufacturerName": "Eabox",
//   "manufacturer": "0x1a66db6e56b6668d09dfcd581b67a18cb2dd431f",
//   "manufacturedDate": "9/19/2022",
//   "expiringDate": "11/22/2022",
//   "isInBatch": false,
//   "batchCount": 3,
//   "barcodeId": "3cf5855a-00c8-4491-ae01-e9709207faa6",
//   "itemImage": "http://dummyimage.com/113x100.png/5fa2dd/ffffff",
//   "itemType": 3,
//   "usage": "Ut tellus. Nulla ut erat id mauris vulputate elementum.",
//   "others": null
// }, {
//   "name": "Kyrstin",
//   "manufacturerName": "Meezzy",
//   "manufacturer": "0xa3e5034f289fa05f505872d64595a01a5b3782d5",
//   "manufacturedDate": "4/5/2022",
//   "expiringDate": "7/13/2022",
//   "isInBatch": true,
//   "batchCount": 4,
//   "barcodeId": "58aa4eed-3b82-424f-96fe-dc86b506adb3",
//   "itemImage": "http://dummyimage.com/191x100.png/cc0000/ffffff",
//   "itemType": 4,
//   "usage": "Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus.",
//   "others": null
// }, {
//   "name": "Liva",
//   "manufacturerName": "Twitterwire",
//   "manufacturer": "0x7d08890ed4ba37e8cbe8a79da67e74064b0b2778",
//   "manufacturedDate": "11/26/2022",
//   "expiringDate": "1/17/2023",
//   "isInBatch": true,
//   "batchCount": 5,
//   "barcodeId": "15ea82a7-8349-44da-9e9f-2c594d973e8d",
//   "itemImage": "http://dummyimage.com/178x100.png/dddddd/000000",
//   "itemType": 5,
//   "usage": "Pellentesque eget nunc. Donec quis orci eget orci vehicula condimentum. Curabitur in libero ut massa volutpat convallis. Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo. Maecenas pulvinar lobortis est. Phasellus sit amet erat.",
//   "others": null
// }, {
//   "name": "Sapphire",
//   "manufacturerName": "Thoughtstorm",
//   "manufacturer": "0xdcf3041ef6dc76145149fb84875007ce7c32cbc5",
//   "manufacturedDate": "3/28/2022",
//   "expiringDate": "2/23/2022",
//   "isInBatch": false,
//   "batchCount": 6,
//   "barcodeId": "6abf0d0e-3ced-48da-943f-758f291ad56d",
//   "itemImage": "http://dummyimage.com/173x100.png/ff4444/ffffff",
//   "itemType": 6,
//   "usage": "Morbi non quam nec dui luctus rutrum. Nulla tellus. In sagittis dui vel nisl.",
//   "others": null
// }, {
//   "name": "Emanuele",
//   "manufacturerName": "Layo",
//   "manufacturer": "0x41d4c5c59e49ed50bf77ac9277ead97f9e3502d0",
//   "manufacturedDate": "12/30/2022",
//   "expiringDate": "9/23/2022",
//   "isInBatch": false,
//   "batchCount": 7,
//   "barcodeId": "6bb0bfa2-7bf6-42c4-be11-d6d3858ae8a9",
//   "itemImage": "http://dummyimage.com/246x100.png/dddddd/000000",
//   "itemType": 7,
//   "usage": "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus.",
//   "others": null
// }, {
//   "name": "Arte",
//   "manufacturerName": "Wordify",
//   "manufacturer": "0xf18ef3b049d12a09d4946fcac2120e3fdd46681d",
//   "manufacturedDate": "12/9/2022",
//   "expiringDate": "12/31/2022",
//   "isInBatch": true,
//   "batchCount": 8,
//   "barcodeId": "83540962-3f97-45de-941a-40fdc9a33af6",
//   "itemImage": "http://dummyimage.com/186x100.png/cc0000/ffffff",
//   "itemType": 8,
//   "usage": "Aenean fermentum. Donec ut mauris eget massa tempor convallis.",
//   "others": null
// }, {
//   "name": "Connie",
//   "manufacturerName": "Jaxspan",
//   "manufacturer": "0x5fdfb368ba9c811aecbef185d678df3de42d13f6",
//   "manufacturedDate": "9/12/2022",
//   "expiringDate": "9/30/2022",
//   "isInBatch": true,
//   "batchCount": 9,
//   "barcodeId": "e5f33e4d-cd3a-4ec4-a5b2-ea6afe4edab7",
//   "itemImage": "http://dummyimage.com/171x100.png/cc0000/ffffff",
//   "itemType": 9,
//   "usage": "In est risus, auctor sed, tristique in, tempus sit amet, sem. Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi, in porttitor pede justo eu massa. Donec dapibus. Duis at velit eu est congue elementum. In hac habitasse platea dictumst. Morbi vestibulum, velit id pretium iaculis, diam erat fermentum justo, nec condimentum neque sapien placerat ante.",
//   "others": null
// }, {
//   "name": "Hilda",
//   "manufacturerName": "Skilith",
//   "manufacturer": "0x7239b336b7fb56821a802d0b32493b70ac28b9bd",
//   "manufacturedDate": "11/20/2022",
//   "expiringDate": "11/17/2022",
//   "isInBatch": true,
//   "batchCount": 10,
//   "barcodeId": "fe5e974e-2485-4115-8d93-67a6291bf07f",
//   "itemImage": "http://dummyimage.com/240x100.png/cc0000/ffffff",
//   "itemType": 10,
//   "usage": "Aliquam augue quam, sollicitudin vitae, consectetuer eget, rutrum at, lorem. Integer tincidunt ante vel ipsum. Praesent blandit lacinia erat. Vestibulum sed magna at nunc commodo placerat. Praesent blandit. Nam nulla. Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.",
//   "others": null
// }]


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


  const [singleItem, setSingleItem] = useState();
  const getSingleItem = async(barcodeId) => {
          
    try {
        if(isConnected) {
                      
            const contractInstance = new Contract(
                PHARMA_ADDRESS,
                PHARMA_ABI,
                signer
            );
            
            const singleItem = await contractInstance.getSingleItem( barcodeId );
            console.log("🚀 ~ file: index.js:213 ~ getSingleItem ~ singleItem", singleItem)
            const formattedItems = formatItem(singleItem[0])
            console.log("🚀 ~ file: index.js:214 ~ getSingleItem ~ formattedItems", formattedItems)

            setSingleItem(singleItem)
        }
    } catch (error) {
        console.log('Could not get single item', error);
        return null;
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
  },[signer, getAllItems, getMyAccountsList])
  /*useEffect(() => {
    if(!signer) return;
    getAllItems();
    getMyAccountsList();
  },[signer])*/


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
    <>    
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
    <Footer />
    </>
  )
}

export default ProductIndex 