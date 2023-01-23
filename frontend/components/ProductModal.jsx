import React from 'react'
import { AiFillCloseCircle } from "react-icons/ai";
import { useForm } from "react-hook-form";
import Image from 'next/image';


function ProductModal({ isVisible, onClose, modalItem, shouldCloseOnOverlayClick, sellItem }) {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { item, myAccountList } = modalItem;

  if (!isVisible) return;

  return (

/*function ProductModal({ isVisible, onClose, modalItem, shouldCloseOnOverlayClick, sellItem }) {

  
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { item, myAccountList } = modalItem;
  
  if (!isVisible) return;

  return (*/
    
    <div onClick={()=>(shouldCloseOnOverlayClick?onClose():null)} className="fixed inset-0 bg-black/50 bg-opacity-25 backdrop-blur-sm flex justify-center items-center">
      <div className='w-3/4 lg:w-4/12'>
        <div className='bg-white p-2 rounded-md'>

          <div className='flex items-center justify-end'>
            <AiFillCloseCircle onClick={()=>onClose()} className='w-6 h-6 hover:text-red-600 cursor-pointer' />
          </div>

          <form onSubmit={handleSubmit(sellItem)}>
            <div className='p-2'>
                <div className='mb-4'>
                  <div>
                    <Image src={item.itemImage} alt={item.name} width={50} height={50} />
                    <p className='mt-1 text-sm text-gray-600'>{item.name}</p>
                    <p className='mt-1 text-sm text-gray-600'>{item.barcodeId}</p>
                    <p className='mt-1 text-sm text-gray-600'>{item.manufacturedDate}</p>
                    <p className='mt-1 text-sm text-gray-600'>{item.expiringDate}</p>
                  </div>
                </div>
                <div className='mb-4'>
                    
                    <input {...register("barcodeId", { required: true })} value={item.barcodeId} type="hidden" />
                    
                    <label className='text-sm font-semibold mb-2'>Sell to:</label>
                    <div>
                        <select {...register("accountId")} className='w-full h-9 rounded-md p-2 text-sm'>
                            {
                              (myAccountList && myAccountList.length > 0)&& myAccountList.map((account, index) => (
                                <option key={index} value={account.accountId}>{account.name}</option>
                              ))
                            }
                        </select>
                        <span className='text-xs text-red-600'>{errors.itemType && <span>This field is required</span>}</span>
                    </div>
                </div>
            </div>

            <div className='flex justify-end items-center space-x-2 p-2'>
              <button className='bg-red-500 hover:bg-red-600 text-white py-1 px-4 rounded' onClick={()=>onClose()}>
                Close
              </button>
              <button type='submit' className='bg-pharmaGreen-700 hover:bg-pharmaGreen-800 text-white py-1 px-4 rounded'>Sell Item</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ProductModal