import React, { useContext, useEffect, useState } from 'react'
import { CiMail } from "react-icons/ci";
import { RiWallet2Line } from "react-icons/ri";
import { BsSearch } from "react-icons/bs";
import AppContext from '../../context/AppContext';
import { useAccount, useContract, useSigner } from 'wagmi';
import { PHARMA_ABI, PHARMA_ADDRESS } from '@/constants';
import { Contract } from 'ethers';
import { useForm } from "react-hook-form";

// const users = [{
//     "name": "Gnni Cecere",
//     "email": "gcecere0@elpais.com",
//     "address": "0xdd2ca9e37829571d09653913925732b4b538e69b"
//   }, {
//     "name": "Joyann Gooding",
//     "email": "jgooding1@woothemes.com",
//     "address": "0xeda51ea8e07476cc25a05ad985ba79eaa3c9219d"
//   }, {
//     "name": "Hayes Collingdon",
//     "email": "hcollingdon2@answers.com",
//     "address": "0x65657b4a63c5a924220d4acefdaf9e710ef42f59"
//   }, {
//     "name": "Virge MacKellen",
//     "email": "vmackellen3@ask.com",
//     "address": "0x212cd2debc083ac6de2672ab2bb3008c17f85661"
//   }]

function UserCard ({user}) {
    
    return (
        <div className='space-y-2 border border-gray-300 p-4 rounded-md backdrop-blur-sm bg-pharmaGreen-700/5'>
            <div><p className='font-semibold'>{user.name}</p></div>
            <div className='flex items-center space-x-2'>
                <CiMail size={18} />
                <p className='text-xs'>{user.email}</p>
            </div>
            <div className='flex items-center space-x-2'>
                <RiWallet2Line size={18} />
                <p className='text-xs'>{user.accountId}</p>
            </div>
        </div>
    )
}

function AddProduct() {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const { data: signer } = useSigner()
    const { connector: activeConnector, isConnected } = useAccount()

    const [search, setSearch] = useState('');
    const [usersList, setUsersList] = useState('');
    const [loading, setLoading] = useState(false);

    const saveUser = async(user) => {
        try {
            if(isConnected) {
        
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                console.log("🚀 ~ file: index.js:66 ~ saveUser ~ contractInstance", contractInstance)
                
                user.role = 1 // temporarily hardcoded
                const tx = await contractInstance.addParty(user);
                console.log("🚀 ~ file: index.js:69 ~ saveUser ~ tx", tx)

                setLoading(true)
                await tx.wait()
                setLoading(false)

                // get users list
                await getMyAccountsList()
                
            }
        } catch (error) {
            console.log('Could not add user', error);
        }
    }
    
    const getMyAccountsList = async() => {
        try {
            if(isConnected) {
         
                const contractInstance = new Contract(
                    PHARMA_ADDRESS,
                    PHARMA_ABI,
                    signer
                );
                
                const myUsersList = await contractInstance.getMyAccountsList();
                setUsersList(myUsersList)                                
            }
        } catch (error) {
            console.log('Could not add user', error);
        }
    }

    const handleSaveUser = async (e) => {
        
        e.preventDefault()
        
        await saveUser();
    }

    useEffect(() => {
      if(!signer) return;
      getMyAccountsList()
    }, [signer, isConnected])
    


    return (
        <div className='flex flex-col-reverse gap-12 md:flex-row bg-white w-full h-full shadow-md rounded-md p-10'>
            
            <div className='w-full md:w-1/2 mb-12'>
                <p className='text-xl md:text-2xl font-bold mb-10'>Existing Users</p>

                    <div className='flex items-center my-4 border border-gray-400 rounded-md px-2 space-x-4'>
                        <BsSearch size={18} />
                        <input 
                            value={search}
                            onChange={(event) => setSearch(event.currentTarget.value)} 
                            className='w-full h-9 border-none p-2 text-sm focus-within:border-none active:border-none' 
                            type="search" 
                            placeholder='Filter...' 
                            autoFocus 
                        />
                    </div>

                    <div className='mt-12 space-y-4'>
                        {
                            usersList && usersList.filter((user) => {
                                const query = search.toLowerCase()
                                return query === '' ? user : (user.name.toLowerCase().includes(query) || user.email.toLowerCase().includes(query))
                            }).map((user, idx) => (<UserCard key={idx} user={user} />))
                        }
                    </div>
            </div>
            <div className='w-full md:w-1/2 mb-12'>
                <p className='text-xl md:text-2xl font-bold mb-4'>Add New User</p>

                <form onSubmit={handleSubmit(saveUser)}>
                    <div className=''>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Name</label>
                            <div>
                                <input {...register("name", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                                {errors.name && <span className='text-red-600 text-xs'>This field is required</span>}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Email</label>
                            <div>
                                <input {...register("email", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="email" />
                                {errors.email && <span className='text-red-600 text-xs'>This field is required</span>}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <label className='text-sm font-semibold'>Address</label>
                            <div>
                                <input {...register("accountId", { required: true })} className='w-full h-9 rounded-md p-2 text-sm' type="text" />
                                {errors.accountId && <span className='text-red-600 text-xs'>This field is required</span>}
                            </div>
                        </div>
                        <div className='mb-4'>
                            <button type='submit' className='bg-pharmaGreen-800 px-4 py-2 text-white rounded-md hover:bg-pharmaGreen-900'>{loading ? 'Saving...' : 'Save'}</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddProduct