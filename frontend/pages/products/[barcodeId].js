import { PHARMA_ABI, PHARMA_ADDRESS } from '@/constants';
import { formatItem, firstAndLastFour } from '@/utils/utils';
import { Contract } from 'ethers';
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { useAccount, useSigner } from 'wagmi';

function ItemDetails() {

  const { data: signer } = useSigner()
  const { isConnected } = useAccount()

  const [item, setItem] = useState();
  const [itemHistory, setItemHistory] = useState();
  const [manufacturer, setManufacturer] = useState();
  const [distributor, setDistributor] = useState();
  const [retailer, setRetailer] = useState();
  const [customers, setCustomers] = useState();

  const router = useRouter();

  const getManufacturer = async(address) => {
    try {
                      
      const contractInstance = new Contract(
          PHARMA_ADDRESS,
          PHARMA_ABI,
          signer
      );

        const manufacturerDetails = await contractInstance.getAccountDetails(address);
        setManufacturer(manufacturerDetails)
        console.log(manufacturer);
    } catch (error) {
      console.log("🚀 ~ file: [barcodeId].js:28 ~ getManufacturer ~ error", error)
      
    }
  }

  const getDistributor = async(address) => {
    try {
                      
        const contractInstance = new Contract(
            PHARMA_ADDRESS,
            PHARMA_ABI,
            signer
        );

        const distributorDetails = await contractInstance.getAccountDetails(address);
        setDistributor(distributorDetails)
        console.log(distributor);
    } catch (error) {
      console.log("🚀 ~ file: [barcodeId].js:28 ~ getManufacturer ~ error", error)
      
    }
  }

  const getRetailer = async(address) => {
    try {
      
        const contractInstance = new Contract(
            PHARMA_ADDRESS,
            PHARMA_ABI,
            signer
        );

        const retailerDetails = await contractInstance.getAccountDetails(address);
        retailerDetails ? setRetailer(retailerDetails) : setRetailer(null)
        console.log(retailer)
    } catch (error) {
      console.log("🚀 ~ file: [barcodeId].js:28 ~ getManufacturer ~ error", error)
      
    }
  }

  const getSingleItem = async() => {
          
    try {
        if(isConnected) {
                      
            const contractInstance = new Contract(
                PHARMA_ADDRESS,
                PHARMA_ABI,
                signer
            );
            
            const barcodeId = router.query.barcodeId
            const singleItem = await contractInstance.getSingleItem( barcodeId );
            

            // get item
            const formattedItem = formatItem(singleItem[0])
            setItem(formattedItem)

            // get item history
            const itemHistory = singleItem[1];
            console.log("🚀 ~ file: [barcodeId].js:37 ~ getSingleItem ~ itemHistory", itemHistory)

            // get manufacturer details
            const manufacturerAddress = itemHistory.manufacturer?.accountId
            getManufacturer(manufacturerAddress);

            // get distributor details
            const distributorAddress = itemHistory.distributor?.accountId
            getDistributor(distributorAddress);

            // get retailer details
            const retailerAddress = itemHistory.retailer?.accountId
            getRetailer(retailerAddress);
        }
    } catch (error) {
        console.log('Could not get single item', error);
        return null;
    }
  }

  useEffect(() => {
    if(!signer) return;
    getSingleItem();
  },[signer])

  return (
    <div className='flex flex-col md:flex-row'>
      <div className='flex flex-col w-full md:w-5/12 px-4 '>
        <div className="text-left sm:text-left mb-14">
          <h3 className="text-2xl font-bold">Item Details</h3>
        </div>
        <div className='flex flex-col'>
          <div className='w-full'>
            <img src='/logo3.png' className='w-24' />
          </div>
          <div className='w-full space-y-2'>
            <p className='text-xl font-bold'>{ item?.name }</p>
            <p className=''>MFG: { item?.manufacturedDate }</p>
            <p className=''>EXP: { item?.expiringDate }</p>
          </div>
        </div>
      </div>
      <div className="px-4 py-12 md:py-0 w-full md:w-7/12">
        <div className="">
          <div className="">
            <div className="text-left sm:text-left mb-14">
              <h3 className="text-2xl font-bold">Item History</h3>
            </div>
          </div>
          <div className="relative col-span-12 px-4 space-y-6 sm:col-span-9">
            <div className="col-span-12 space-y-12 relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:dark:bg-gray-700">

              {manufacturer && 
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-pharmaGreen-800 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold tracking-wide">{manufacturer?.name}</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">Manufacturer</time>
                  <p className="mt-3">{manufacturer?.email}</p>
                  <p className="text-xs mt-3">{firstAndLastFour(manufacturer?.accountId)}</p>
                </div>
              }

              {distributor &&
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-pharmaGreen-800 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold tracking-wide">{distributor?.name}</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">Supplier</time>
                  <p className="mt-3">{distributor?.email}</p>
                  <p className="text-xs mt-3">{firstAndLastFour(distributor?.accountId)}</p>
                </div> 
              }

              {retailer && 
                <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:dark:bg-violet-400 bg-white p-4 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold tracking-wide">{retailer?.name}</h3>
                  <time className="text-xs tracking-wide uppercase dark:text-gray-400">Retailer</time>
                  <p className="mt-3">{retailer?.email}</p>
                  <p className="text-xs mt-3">{firstAndLastFour(retailer?.accountId)}</p>
                </div>
              }

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetails