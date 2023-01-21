import React, { useContext, useEffect, useState } from 'react'
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { useListState } from '@mantine/hooks';
import { useForm } from 'react-hook-form';
import { useAccount, useSigner } from 'wagmi';
import { fetchSigner } from '@wagmi/core'
import { Contract, ethers } from 'ethers';
import { getCustomDateEpoch, increaseGasLimit } from '@/utils/utils';
import { PHARMA_ABI, PHARMA_ADDRESS } from '@/constants';

function AddProduct() {

    const { register, handleSubmit, formState: { errors } } = useForm();

    const urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // validate port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator

    const { data: signer } = useSigner()
    const { connector: activeConnector, isConnected, address } = useAccount();
    
    
    const saveItem = async(item, e) => {
        try {
            if(isConnected) {

                const signer = await fetchSigner();
                const address2 = await signer.getAddress();
                console.log("🚀 ~ file: new.js:32 ~ saveItem ~ address1", address)
                console.log("🚀 ~ file: new.js:32 ~ saveItem ~ address2", address2)

        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );

                // configure item obj
                item.manufacturedDate = getCustomDateEpoch(item.manufacturedDate);
                item.expiringDate = getCustomDateEpoch(item.expiringDate);
                item.isInBatch = false;
                item.batchCount = 0;
                item = {...item, 'manufacturer': address, 'others': [...sideEffectsList, ...compositionList]};
                
                // prep arguments
                const currentTimestamp = Math.round(Date.now() / 1000); 
                
                // estimate gas price
                // const estimatedGas = await contractInstance.estimateGas.addNewItem(item, currentTimestamp);
                // console.log("🚀 ~ file: new.js:54 ~ saveItem ~ estimatedGas", estimatedGas)
                // const paddedEstimate = increaseGasLimit(estimatedGas);
                // console.log("🚀 ~ file: new.js:56 ~ saveItem ~ paddedEstimate", paddedEstimate)

                // save product
                const addedItem = await contractInstance.addNewItem(item, currentTimestamp);
                await addedItem.wait();
                console.log("🚀 ~ file: new.js:60 ~ saveItem ~ addedItem", addedItem)

                // reset form fields
                e.target.reset();
                
            }
        } catch (error) {
            console.log('Could not add item', error);
        }
    }
    
    // side effects
    const [sideEffect, addSideEffect] = useState('');
    const [sideEffectsList, addSideEffecstList] = useListState([]);
    const appendSideEffect = () => {
        if(sideEffect == '' || sideEffect === undefined) return;

        addSideEffecstList.append(sideEffect)
    };
    const deleteSideEffect = (index) => {
        addSideEffecstList.remove(index);
    }

    // compositions
    const [composition, addComposition] = useState('');
    const [compositionList, addCompositionList] = useListState([]);
    const appendComposition = () => {
        if(composition == '' || composition === undefined) return;

        addCompositionList.append(composition)
    };
    const deleteComposition = (index) => {
        addCompositionList.remove(index);
    }

    useEffect(() => {
        // handleProductChange(sideEffectsList, 'sideEffects')
        // handleProductChange(compositionList, 'composition')
    },[sideEffectsList, compositionList])

    return (
        <div className='flex flex-col gap-12 md:flex-row bg-white w-full h-full shadow-md rounded-md p-10'>
            <div className='w-full'>
                <p className='text-xl md:text-2xl font-bold mb-4'>Add Product</p>

                <div className=''>
                    <form onSubmit={handleSubmit(saveItem)}>

                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Manufacturer Name</label>
                            <div>
                                <input {...register("manufacturerName", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                                <span className='text-xs text-red-600'>{errors.manufacturerName && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        {/* <div className='mb-4'>
                            <label className='text-sm font-semibold'>Manufacturer Email</label>
                            <div>
                                <input {...register("manufacturerEmail", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="email" />
                                {errors.exampleRequired && <span>This field is required</span>}
                            </div>
                        </div> */}
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Manufacturing Date</label>
                            <div>
                                <input {...register("manufacturedDate", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                                <span className='text-xs text-red-600'>{errors.manufacturedDate && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Expires in (Days)</label>
                            <div>
                                <input {...register("expiringDate", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                                <span className='text-xs text-red-600'>{errors.expiringDate && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Product Name</label>
                            <div>
                                <input {...register("name", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                                <span className='text-xs text-red-600'>{errors.name && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Choose Prodcut Type</label>
                            <div className='flex items-center space-x-12'>
                                <div className='flex items-center space-x-2'>
                                    <input {...register("isInBatch", { required: true })} value="individual" checked="checked" className='w-4 h-4 rounded p-1 text-sm form-radio' type="radio" id='product_type_i' />
                                    <label htmlFor='product_type_i'>Individual</label>
                                </div>
                                <div className='flex items-center space-x-2'>
                                    <input {...register("isInBatch", { required: true })} value="batch" className='w-4 h-4 rounded p-1 text-sm form-radio' type="radio" id='product_type_b' />
                                    <label htmlFor='product_type_b'>Batch</label>
                                </div>
                                <span className='text-xs text-red-600'>{errors.isInBatch && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Product ID</label>
                            <span className='w-full text-xs text-gray-300'>F0212522542</span>
                            <div>
                                <input {...register("barcodeId", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                                <span className='text-xs text-red-600'>{errors.barcodeId && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Product Image (URL)</label>
                            <div>
                                <input {...register("itemImage", { required: urlPattern })} className='w-full h-9 rounded-md p-2 text-sm' type="url" />
                                <span className='text-xs text-red-600'>{errors.itemImage && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        
                        <p className='text-xl md:text-2xl font-bold mb-4'>General Information</p>

                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Type</label>
                            <div>                                
                                <select {...register("itemType")} className='w-full h-9 rounded-md p-2 text-sm'>
                                    <option value="0">Antibiotics</option>
                                    <option value="1">Antimalaria</option>
                                    <option value="2">Analgestics</option>
                                    <option value="3">Supplements</option>
                                    <option value="4">Steroids</option>
                                </select>
                                <span className='text-xs text-red-600'>{errors.itemType && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        
                        <p className='text-lg md:text-xl font-bold mb-4'>Others</p>

                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Side Effect</label>
                            <div className='flex gap-4'>
                                <div className='w-3/4'>
                                    <input className='w-full h-9 rounded-md p-2 text-sm' id='sideEffect' onChange={(e)=>{
                                        addSideEffect(e.target.value)
                                    }} type="text" />
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <AiFillPlusCircle onClick={()=>appendSideEffect()} className='text-pharmaGreen-800 cursor-pointer' size={25} />
                                </div>
                            </div>
                            <div>
                                {
                                    sideEffectsList.map((sideEffect, index) => {
                                        return (
                                            <div key={index} className='flex gap-4 my-2'>
                                                <div className='w-3/4'>
                                                    {sideEffect}
                                                </div>
                                                <div className='flex justify-center items-center w-1/4'>
                                                    <AiFillMinusCircle onClick={() => deleteSideEffect(index)} className='text-red-800 cursor-pointer' size={25} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Composition</label>
                            <div className='flex gap-4'>
                                <div className='w-3/4'>
                                    <input className='w-full h-9 rounded-md p-2 text-sm' onChange={(e)=> {
                                        addComposition(e.target.value)
                                    }} type="text" />
                                </div>
                                <div className='flex justify-center items-center w-1/4'>
                                    <AiFillPlusCircle onClick={()=>appendComposition()} className='text-pharmaGreen-800 cursor-pointer' size={25} />
                                </div>
                            </div>
                            <div>
                                {
                                    compositionList.map((composition, index) => {
                                        return (
                                            <div key={index} className='flex gap-4 my-2'>
                                                <div className='w-3/4'>
                                                    {composition}
                                                </div>
                                                <div className='flex justify-center items-center w-1/4'>
                                                    <AiFillMinusCircle onClick={() => deleteComposition(index)} className='text-red-800 cursor-pointer' size={25} />
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Prescription</label>
                            <div>
                                <textarea {...register("usage", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text"></textarea>
                                <span className='text-xs text-red-600'>{errors.usage && <span>This field is required</span>}</span>
                            </div>
                        </div>
                        <div>
                            <input className='bg-pharmaGreen-800 cursor-pointer text-white rounded-md text-sm py-2 px-4 hover:bg-pharmaGreen-700 transition ease-linear duration-150' type="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default AddProduct